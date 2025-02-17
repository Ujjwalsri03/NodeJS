const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeIPLData() {
    try {
        // Launch Puppeteer browser
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Navigate to the IPL stats page
        await page.goto('https://www.iplt20.com/stats/', { waitUntil: 'networkidle2' });

        // Wait for the container that holds the 2024 leaders section
        await page.waitForSelector('.np-battingtable_container'); // Ensure the table section loads

        // Extract data from the table section
        const data = await page.evaluate(() => {
            const leadersSection = document.querySelector('.np-battingtable_container');
            const rows = leadersSection.querySelectorAll('.np-battingtableBg');
            const battingLeaders = [];

            rows.forEach(row => {
                const player = row.querySelector('.player-name-selector'); // Adjust the selector based on the exact structure
                const runs = row.querySelector('.runs-selector'); // Adjust the selector based on the exact structure
                if (player && runs) {
                    battingLeaders.push({ player: player.innerText.trim(), runs: runs.innerText.trim() });
                }
            });

            return { battingLeaders };
        });

        // Save the data to a JSON file
        fs.writeFileSync('ipl-data.json', JSON.stringify(data, null, 2));
        console.log('Data scraped and saved as ipl-data.json');

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('Error scraping data:', error.message);
    }
}

scrapeIPLData();

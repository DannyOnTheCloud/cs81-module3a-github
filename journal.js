// This function takes a name as an argument and returns a greeting message.
function greet(name) {
    return `Hello, ${name}!`;
}
//This function allows you to enter the job app count for a specific site.
function addApplication(site, count) {
    jobApps[site] = (jobApps[site] || 0) + count;
}

// This function returns the total number of job applications across all sites.
function getTotalApplications() {
    let total = 0;
    for (let site in jobApps) {
        total += jobApps[site];
    }
    return total;
}
// This function returns the job application count for a specific site.
function mostUsedPlatform(apps) {
    let maxCount = 0;
    let mostUsed = '';
    for (let site in apps) {
        if (apps[site] > maxCount) {
            maxCount = apps[site];
            mostUsed = site;
        }
    }
    return mostUsed;
}
//This function prints out the summary of job applications on the console.
function printSummary() {
    console.log("Job Application Summary:");
    for (let site in jobApps) {
        console.log(`${site}: ${jobApps[site]} applications`);
    }
    console.log(`Total applications: ${getTotalApplications()}`);
    console.log(`Most used platform: ${mostUsedPlatform(jobApps)}`);
}
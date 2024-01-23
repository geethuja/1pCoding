// filter active jobs from array of job objects
const jobs = [
    { id:1, isActive: true },
    { id:2, isActive: false },
    { id:3, isActive: true }
]

//const activeJobs = jobs.filter(function (job) { return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs)
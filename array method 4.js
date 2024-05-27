let jobs = ["frontend engineer", "backend engineer", "cloud engineer", "product manager", "database analyst"];
console.log(jobs);

jobs.splice(2,1, "UI/UX", "QA", "Deveops");  // we started from element no.2 and deleted only 1 (cloud engineer) and then added UI/UX AND CO.
console.log(jobs)

// SLICE IS similar to splice but  only start and removes, it can not add.


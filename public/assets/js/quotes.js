const quotes = [
    'Website Design',
    'Design Software',
    'Canva',
    'Logo Creation',
    'Using/Finding Royalty-Free Images',
    'Software Engineering',
    'Full-Stack Engineering',
    'Front-End Web Development',
    'Back-End Programming',
    'Graphic Design Software',
    'Website Development',
    'CSS Frameworks',
    'HTML and/or CSS',
    'JavaScript (Front-End)',
    'JavaScript (Back-End)',
    'Node.js',
    'NPM (Node Package Manager) Downloads',
    'Handlebars.js Templating Engine',
    'Express.js (setting up servers and routers)',
    'React JS',
    'SQL/NoSQL (or working with Databases)',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'MERN Stack (Full-Stack Applications)',
    'Web Design, Development, or Software Programming/Engineering Careers',
    'Working at a Creative Agency',
    'LinkedIn (or utilizing social media and networking platforms as a Tech Professional',
    'GitHub',
    'VS Code',
    'WordPress (and/or using CMS platforms for website development/creation',
    'Content Publishing',
    'Copywriting',
    'Marketing and Web Design',
    'MailChimp (creating email templates using HTML & CSS)',
    'Designing/Developing Landing Pages',
    'Educational Resources for Learning Web Design, Development, or Software Programming'
]

function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
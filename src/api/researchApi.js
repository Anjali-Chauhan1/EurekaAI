export async function fetchResearchData(topic) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        summary: [
          {
            title: "Breakthrough #1",
            content: "NeuroCureX improved early-stage patients by 30%.",
            source: { name: "Science Daily", link: "https://sciencedaily.com" }
          },
          {
            title: "Breakthrough #2",
            content: "Blood test can detect early biomarkers years in advance.",
            source: { name: "Nature Medicine", link: "https://nature.com" }
          },
          {
            title: "Debate",
            content: "Some researchers argue current trials lack diversity in participants.",
            source: { name: "AlzForum", link: "https://www.alzforum.org" }
          }
        ],
        sources: [
          { name: "Science Daily", link: "https://sciencedaily.com" },
          { name: "Nature Medicine", link: "https://nature.com" },
          { name: "AlzForum", link: "https://www.alzforum.org" }
        ]
        
      });
    }, 1000);
  });
}

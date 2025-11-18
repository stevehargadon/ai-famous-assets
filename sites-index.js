/**
 * AI Famous - Centralized Site Index
 * This file is loaded by all satellite sites to display the cross-linking index
 * Update this file to add/remove sites, and all satellite sites will update automatically
 * 
 * Last updated: 2025-11-18T14:00:53.633Z
 * Total sites: 1
 */

(function() {
  'use strict';
  
  // Site registry - automatically generated from sites-registry.json
  const sites = [
    {
        "title": "Output Shaping: A New Way to Think About the Ethics and Use of AI for Content Creation",
        "url": "https://www.stevehargadon.com/2025/11/output-shaping-new-way-to-think-about.html",
        "domain": "outputshaping.com",
        "description": "A new way to think about the ethics and use of AI for content creation",
        "status": "new"
    }
];
  
  /**
   * Render the site index into the page
   */
  function renderSiteIndex() {
    const container = document.getElementById('site-index');
    if (!container) {
      console.warn('Site index container not found');
      return;
    }
    
    // Get current domain to exclude it from the list
    const currentDomain = window.location.hostname;
    
    // Filter out the current site
    const otherSites = sites.filter(site => !currentDomain.includes(site.domain));
    
    if (otherSites.length === 0) {
      container.innerHTML = '<p class="no-sites">More topics coming soon...</p>';
      return;
    }
    
    // Build the HTML
    let html = '';
    otherSites.forEach(site => {
      html += `
        <a href="https://${site.domain}" class="site-card" target="_blank" rel="noopener">
          <h3>${site.title}</h3>
          <p>${site.description}</p>
          <span class="domain">${site.domain}</span>
        </a>
      `;
    });
    
    container.innerHTML = html;
  }
  
  /**
   * Get all sites for external use (e.g., hub page)
   */
  window.AIFamousSites = {
    getAllSites: function() {
      return sites;
    },
    getSiteCount: function() {
      return sites.length;
    }
  };
  
  // Render when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSiteIndex);
  } else {
    renderSiteIndex();
  }
  
})();

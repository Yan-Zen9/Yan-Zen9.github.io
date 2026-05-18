---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 3
cv_pdf: /assets/pdf/Resume_Yan_Zeng.pdf
---

<div class="cv-pdf-actions">
  <a class="btn btn-sm z-depth-0" href="{{ page.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer">
    Open PDF
  </a>
</div>

<object class="cv-pdf-viewer" data="{{ page.cv_pdf | relative_url }}" type="application/pdf">
  <p>
    Your browser cannot display the PDF inline.
    <a href="{{ page.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer">Open the CV PDF</a>.
  </p>
</object>

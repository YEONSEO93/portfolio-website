'use strict';

// Function to update project counts based on their data-type attribute
function updateProjectCounts() {
    const allProjects = document.querySelectorAll('.project');
    const totalProjects = allProjects.length;

    // Count web applications and mobile applications
    const webProjects = document.querySelectorAll('.project[data-type="web"]').length;
    const mobileProjects = document.querySelectorAll('.project[data-type="mobile"]').length;

    // Update category counts in the buttons
    document.querySelector('.category[data-category="all"] .category__count').textContent = totalProjects;
    document.querySelector('.category[data-category="web"] .category__count').textContent = webProjects;
    document.querySelector('.category[data-category="mobile"] .category__count').textContent = mobileProjects;
}

// Function to handle category selection and filtering projects
function handleCategorySelection() {
    const categories = document.querySelector('.categories');
    const projects = document.querySelectorAll('.project');
    const projectsContainer = document.querySelector('.projects');

    categories.addEventListener('click', (event) => {
        const filter = event.target.dataset.category;
        if (filter == null) {
            return;
        }
        handleActiveSelection(event.target);
        filterProjects(filter, projects, projectsContainer);
    });
}

// Function to handle the active category selection
function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    if (active) {
        active.classList.remove('category--selected');
    }
    target.classList.add('category--selected');
}

// Function to filter projects based on selected category
function filterProjects(filter, projects, projectsContainer) {
    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}

// Initialize functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateProjectCounts(); // Update counts when the page loads
    handleCategorySelection(); // Set up the category selection and filtering
});

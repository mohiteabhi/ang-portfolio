import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  showAll = false;
  allProjects = [
    {
      title: 'SWAYAMSEVAK',
      subtitle: 'Volunteer Management System',
      link: 'https://gitlab.com/mohiteabhi/swayamsevak',
      image: 'assets/images/logo1.png',
      coverTitle: 'Full Stack Volunteer System',
      technologies: 'Java · JavaFX · Firebase',
      tags: ['Desktop App', 'Real-time Tracking']
    },
    {
      title: 'WEB BROWSER',
      subtitle: 'JavaFX Application',
      link: 'https://github.com/mohiteabhi/JavaFX-Project',
      image: 'assets/images/weeathe.png',
      coverTitle: 'Tabbed Interface Browser',
      technologies: 'JavaFX · Tab Management · History Tracking',
      tags: ['Desktop Application', 'Cross-platform']
    },
    {
      title: 'WEATHER APP',
      subtitle: 'Real-time Forecast',
      link: 'https://day-18-weather-app.netlify.app/',
      image: 'assets/images/weeather.png',
      coverTitle: 'Weather Forecasting System',
      technologies: 'OpenWeather API · Geolocation · 5-day Predictions',
      tags: ['Web App', 'Responsive']
    },
    {
      title: 'CHATBOT',
      subtitle: 'Interactive Chatbot',
      link: 'https://day-16-chatbot.netlify.app/',
      image: 'assets/images/chatbot.png',
      coverTitle: 'Smart Chatbot System',
      technologies: 'Gemini API · Typing Animation · Modern UI',
      tags: ['AI', 'Frontend', 'Dynamic']
    },    
    {
      title: 'QUIZ APP',
      subtitle: 'Interactive Knowledge Tester',
      link: 'https://day-1-quiz-app.netlify.app/',
      image: 'assets/images/quiz.png',
      coverTitle: 'Quiz Application',
      technologies: 'DOM Manipulation · Event Handling · Conditional Logic',
      tags: ['Web App', 'Responsive', 'JavaScript']
    },    
    {
      title: 'CODE EDITOR',
      subtitle: 'Write & Test Code in Real Time',
      link: 'https://day-3-code-editor.netlify.app/',
      image: 'assets/images/code-editor.png',
      coverTitle: 'Interactive Code Editor',
      technologies: 'HTML · CSS · JavaScript · DOM Manipulation',
      tags: ['JavaScript', 'Code Editor', 'Real-Time', 'Frontend Practice']
    },    
    {
      title: 'MOVIE INFO FINDER',
      subtitle: 'Discover Movie Details Instantly',
      link: 'https://day-12-movie-info-finder.netlify.app/',
      image: 'assets/images/movie-guide.png',
      coverTitle: 'Movie Search Tool',
      technologies: 'OMDB API · Fetch API · Conditional Rendering',
      tags: ['JavaScript', 'API Integration', 'Movies', 'Real-Time Data']
    },    
    {
      title: 'VIRTUAL PIANO',
      subtitle: 'Play Music with JavaScript',
      link: 'https://day-20-pianio.netlify.app/',
      image: 'assets/images/pianio.png',
      coverTitle: 'JavaScript Piano',
      technologies: 'DOM Manipulation · Event Handling · Audio Integration',
      tags: ['JavaScript', 'Music', 'Interactive', 'Mini-Project']
    },    
    {
      title: 'To-Do List',  
      subtitle: 'Track Your Daily Tasks',  
      link: 'https://lnkd.in/dQrvAnnM',  
      image: 'assets/images/todo-list.png',  
      coverTitle: 'Task Management App',  
      technologies: 'Local Storage · DOM Manipulation · Event Handling',  
      tags: ['JavaScript', 'Productivity', 'Beginner Project', 'To-Do']  
    },    
    {
      title: 'CSS Changer App',  
      subtitle: 'Live Style Customizer',  
      link: 'assets/images/css-changer.png',  
      image: 'assets/images/css-changer.png',  
      coverTitle: 'Dynamic CSS Editor',  
      technologies: 'DOM Manipulation · Event Handling · CSS Variables',  
      tags: ['JavaScript', 'Styling', 'Interactive', 'UI Enhancer']
    },    
    {
      title: 'Form Validator',  
      subtitle: 'Client-Side Input Validation',  
      link: 'https://day-4-form-validation.netlify.app/',  
      image: 'assets/images/form-validation.png',  
      coverTitle: 'JavaScript Form Validation',  
      technologies: 'Regex · DOM Manipulation · Event Listeners',  
      tags: ['JavaScript', 'Validation', 'Form', 'Regex'] 
    },    
    {
      title: 'Custom Cursor',  
      subtitle: 'Animated Mouse Tracker',  
      link: 'https://lnkd.in/dx86zN4z',  
      image: 'assets/images/custom-cursor.png',  
      coverTitle: 'Interactive Cursor Animation',  
      technologies: 'JavaScript · CSS Animations · DOM Events',  
      tags: ['UI Effects', 'JavaScript', 'Animation', 'Mini Project']  
    },    
    {
      title: 'Accordion',  
      subtitle: 'JavaScript Concepts Explained',  
      link: 'https://lnkd.in/duM5mwUi',  
      image: 'assets/images/accordion.png',  
      coverTitle: 'Interactive Accordion for JS Topics',  
      technologies: 'JavaScript · CSS Transitions · Event Delegation',  
      tags: ['UI Component', 'JavaScript', 'Accordion', 'Mini Project']  
    },
  ];

  get visibleProjects() {
    return this.showAll ? this.allProjects : this.allProjects.slice(0, 3);
  }

  toggleProjects() {
    this.showAll = !this.showAll;
  }
  

}

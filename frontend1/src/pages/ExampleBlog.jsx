import React from 'react';
import BlogPost from '../components/BlogPost';

const ExampleBlog = () => {
  const blogData = {
    title: "Getting Started with Web Development",
    subtitle: "A comprehensive guide for beginners",
    content: (
      <>
        <h2 id="introduction">Introduction</h2>
        <p>
          Welcome to the world of web development! This guide will walk you through
          the fundamental concepts and tools you need to start your journey as a
          web developer.
        </p>

        <h2 id="html-basics">HTML Basics</h2>
        <p>
          HTML (HyperText Markup Language) is the foundation of every webpage.
          It provides the structure and content of your website. Let's explore
          some basic HTML elements and their usage.
        </p>

        <h2 id="css-styling">CSS Styling</h2>
        <p>
          CSS (Cascading Style Sheets) is what makes your website beautiful.
          Learn how to style your HTML elements, create layouts, and make your
          website responsive.
        </p>

        <h2 id="javascript-fundamentals">JavaScript Fundamentals</h2>
        <p>
          JavaScript brings interactivity to your website. Discover the basics of
          programming with JavaScript, including variables, functions, and
          event handling.
        </p>
      </>
    ),
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'html-basics', title: 'HTML Basics' },
      { id: 'css-styling', title: 'CSS Styling' },
      { id: 'javascript-fundamentals', title: 'JavaScript Fundamentals' }
    ],
    quiz: {
      questions: [
        {
          text: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Hyper Text Modern Language"
          ]
        },
        {
          text: "Which of the following is a CSS property?",
          options: [
            "color",
            "function",
            "variable",
            "loop"
          ]
        },
        {
          text: "What is JavaScript primarily used for?",
          options: [
            "Adding interactivity to websites",
            "Styling web pages",
            "Creating database structures",
            "Managing server configurations"
          ]
        }
      ]
    }
  };

  return <BlogPost {...blogData} />;
};

export default ExampleBlog; 
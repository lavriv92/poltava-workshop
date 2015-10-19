================================================================================
============================== SERVER AGENDA ===================================
================================================================================

GENERAL REQIREMENTS:
  - Should have token authentication
  - Should check token
  - Implement co, generators, Repositories, Service Objects
  - Should handle errors


TECHNICAL STACK:
  - Framework: Express
  - Testing: Mocha
  - Database: MongoDB


SERVER MODELING:
  - MODULES:
    - Account
    - Serving
    - Blog
    - Problems

  - MODELS

    - User:
      - Username
      - Password
      - Email
      - Token
      - First Name
      - Last Name
      - Role

      - Aggregated full name

      - Post:
        - Category
        - Title
        - Author
        - Content
        - Created at
        - Updated at
        - Tags

      - Category:
        - Title
        - Created at
        - Updated at

      - Problem:
        - Description
        - Title
        - Location
        - Answer


DESIGN ELEMENTS:
  - Models
  - Repositories
  - Service objects
  - Routes
  - Decorators
  - Presenters
  

API REQUIREMENTS:
  - Semantic api
  - Limiting
  - Pagination
  - filtering

  - Routes
    - Authentication
    - Authorization

    - List Problems
    - Post problem
    - Edit Problem

    - Blog
    - Posts
    - Post Detail
    - Create post

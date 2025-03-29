# Task given by Atlan after Assessment round for the Frontend intern position.
<strong> Link to the application:</strong>
<br>
## Introduction
The given application is developed as a task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.
The detailed Problem Statement is also mentioned towards the end of this document.

## Data
The data used in the task is obtained from the website suggested in the task, which is https://github.com/graphql-compose/graphql-compose-examples/blob/master/examples/northwind/data/csv/customers.csv The "Customer" data is used in the application, and the data is downloaded and stored as a local JSON object but CSV files can also be used for the same by using a different logic, or a pre exisiting format conversion library.

## Work-flow
The application is a simple SQL editor that allows users to run SQL queries on the data provided. The application has been built using React and uses the following libraries:<br/>
* react-ace - for the SQL editor <br/>
* react-csv - for downloading the data in CSV format<br/>
* react-router-dom - for routing(It ensures that the application is a single page application)<br/>
* react-dom - for rendering the application<br/>
* ace-builds - for the SQL editor<br/>
* brace - for the SQL editor <br/>
and some dev-dependencies.<br/>

Users can run SQL queries on the data provided, and the output is displayed in a table format. The application also allows users to download the data in CSV format. The application is hosted on Vercel, and the link to the application is provided above.
<br/>
## Performance and Optimisation
For the Performance and Optimisation analysis, I have used Google's <strong>Lighthouse tool </strong> and Page Speed Insights to analysze the page load time, along with how well it performs as per web standards.<br/>
The Screenshots of the Performance are given below:
<br/>
### 1. Homepage



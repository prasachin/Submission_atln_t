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
# Desktop
![Screenshot 2025-03-30 003331](https://github.com/user-attachments/assets/3438e1ef-3820-4e25-b36b-11693e81bded)<br/>
# Mobile
![Screenshot 2025-03-30 003436](https://github.com/user-attachments/assets/4ad28447-d6f8-45dd-8efe-e2e4d646812f)

### 2. Editor Page 
# Desktop
![Screenshot 2025-03-30 003107](https://github.com/user-attachments/assets/b70901a1-998f-4847-8646-d31d7364568a)<br/>
# Mobile
![Screenshot 2025-03-30 003247](https://github.com/user-attachments/assets/1b08c774-a208-4316-a27a-cd52041fab87)<br/>

## How optimized the performance 
* Used <strong> React.memo </strong>: Basically a higher order component that prevents unnecessary re-renders of the component.
* Used <strong>React.lazy and React.Suspense</strong> to load the components only when they are required.   
* Used <strong>React Router</strong> to load the components only when they are required.
* Used <strong>React-ace</strong> for the SQL editor, which is a lightweight library that provides a simple and easy to use SQL editor.
* Used <strong>useCallback</strong> to memoize the functions that are passed as props to the components.Whereever possible.
* Used <strong>useMemo</strong> to memoize the values that are passed as props to the components. Whereever possible.
* Used <strong>useEffect</strong> to load the data only when the component is mounted.<br/>

# Functionality
To keep the user interactive I used some animations.But as told in the task I don't need to focus much on the UI part.

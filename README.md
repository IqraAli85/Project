# Project things you need to know. 
There are 2 types of files. adminfront means its a frontpage and adminback means its a backend file . the Problem I have its in the AdminFront file. src<pages<profile<products.
To access the Profile folder on web browser just write http://localhost:3000/Profile. 
 There are 2 files in Products folders. 1-Products.Form.jsx is basically a page where i entered a Data about the Buses Information. To add the Data click on the button Add Information. Its takes 2 APIs AddStop and updateStop.  2- index.jsx its takes 2 Apis fetchStop and deleteStop.this file also contain the table of (Bus Number	  All Stops	 Route	 Total  Stops	  Added On	 Action) . 
 All the APIs are in folder apicall<businfo.js
 APIs backend are in folder routes<stopRoutes.js . the Schemma is in Models folder.  busrouteModel.js
 PROBLEM 
 the problem i have is in the products folder. In Products.Form.jsx when I add the Buses Information . the information do goes into the backend but doesnot show in frontend page . When i opened my console network then i got to know that the addStop API happens to work 2 times. at first it just gives the OK status but then again it shows  204 no content status . what i know is when the api goes second times its shows no content that why it shows  no information on frontend page . what it suppose to do is that it should work one time only and then the fetchAPI should work and show the data on front page table.
 
I have checked my all APIs they are working fine. addStop api do sent the data in backend. 

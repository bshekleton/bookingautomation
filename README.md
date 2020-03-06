# bookingautomation
Automate a booking on Ryanair.com to get a declined message 

A sample video of how to run the test can be found <a href="https://github.com/bshekleton/bookingautomation/blob/master/sample_run.mp4">here</a>




<h3>Prerequisites</h3>
<ul>
 <li>Node version: 13.9.0</li>
 <li>npm version: 6.14.1</li>
 </ul>
<h2>Setup</h2>
<ol>
<li>Clone this repo: <b>git clone https://github.com/bshekleton/bookingautomation.git</b></li>
<li>Install dependencies using: <b>npm i</b></li>
</ol>


<h2>Running the test</h2>
<ol>
<li>Start the webdriver manager using in a seperate terminal: <b>webdriver-manager start </b></li>
<li>Run protractor using: <b>protractor .\protractor.conf.js</b></li>
<li>once the test is finished run the report: <b>node index.js</b></li>
</ol>

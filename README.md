<b>HospAppEthereum </b><br/><br/>
Please go through the following article:<br/><br/>
https://medium.com/@sushreesoumya.mishra/how-i-see-the-ethereum-world-d31b8a6fca3a <br/><br/>

In order to run an application on top of Ethereum, you need two things:<br/>
&nbsp;&nbsp;1.&nbsp; The ABI (you'll get it after compiling)<br/>
&nbsp;&nbsp;2.&nbsp; The contract address (you'll get it after deploying)<br/><br/>

<b><i>NOTE 1:</i></b><br/>
<i>
If you check the code in <b>compile.js</b> that has been placed inside a folder named <b>"etethreum"</b>,<br/>
you'll see that a piece of code has been written to create a folder named <b>"build"</b><br/>
that will have the <b>ABI</b> inside it. Moreover, when you recompile the smart contract, <br/>
the build folder will be deleted and a <b>new folder</b> named "build" will be created.
</i>

<br/><br/>
<b><i>NOTE 2:</i></b><br/>
<i>
If you check the code in <b>deploy.js</b>, you'll see that the provider is truffle-hdwallet-provider.<br/>
I'm sure after reading my article on ethereum, you have an understanding on this part.<br/>
We'll get the <b>contract address</b> if we run this particular file. But we need not do it now <br/>
because we already have an address. Please open <b>contractInstance.js</b> to find out the address.<br/>
</i>
<br/><br/>

<b>Steps to run the application: </b><br/><br/>

&nbsp; &nbsp; 1.&nbsp;git clone https://github.com/sushreesoumya1/HospAppEthereum.git<br/>
&nbsp; &nbsp; 2.&nbsp;Open the HospAppEthereum in Command Promptand execute the following:<br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - <b>cd .\ethereum\</b><br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - <b>node compile.js</b><br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - <b>node deploy.js</b> &nbsp; &nbsp;<i>(you can skip this for now)</i><br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - copy the contract address from the console and paste it in <b>contractInstance.js</b> <br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;<i>(you can skip this for now)</i><br/>
&nbsp; &nbsp; 3.&nbsp;It's time to start the server:<br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - <b>npm run dev</b> &nbsp; &nbsp;<i>(check the scripts section in <b>package.json</b>)</i><br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;<i>You'll see a message in your console that says "Ready on localhost:3000"<i><br/>
&nbsp; &nbsp; 4.&nbsp;Open Google Chrome and type localhost:3000 in the URL <br/>

<br/><br/><b>There you are!</b>




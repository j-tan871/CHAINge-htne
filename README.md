# CHAINge
A website that brings volunteers and nonprofits together to work for social change and inclusivity. Volunteers are rewarded for their hard work with CHAINgeCoin, a decentralized token based on the Stellar blockchain network, and gain perks for each task they complete with their group.

Link: https://folding-297715.web.app/

Devpost: https://devpost.com/software/chainge-uvmn19

## Inspiration
CHAINge is a worldwide organization that strives to bring volunteers together and work for social change and inclusivity during the COVID-19 pandemic. We connect volunteers with non-profit organizations that need motivated individuals to help further their cause. Volunteers are rewarded for their hard work with CHAINgeCoin, a decentralized token based on the Stellar blockchain network, and gain perks for each task they complete with their group. 

## What it does
CHAINge features groups where users can join and meet other volunteers with similar interests. Users can find a group that suits their interests on the Find Groups page by searching by keyword or by group name. Categorizing the groups by topic and interest allows users to easily find groups that they are interested in, and allows nonprofit organizations to assign tasks appropriately. 

The CHAINge platform runs on the Stellar blockchain network. We have created the token CHAINgeCoin, a Stellar asset that represents the volunteer manpower of users on our platform. When users sign up for an account, a Stellar wallet is automatically created and a trustline is created. Then, every time the user completes a non-profit hosted task, the non-profit directs the central change wallet to automatically reward the user with CHAINgeCoin. 

Once users have CHAINgeCoin in their account, they can then redeem the coin for certain perks on the website, such as priority selection, profile badges, or the ability to request certain projects. Non-profits would not have to pay to have their tasks listed, as CHAINgeCoin will be mined and distributed from ad revenue on the platform. 

This system allows non-profits to quantify the projects they need completed and gives users an incentive for working on these projects. Using blockchain allows for volunteering to be completely transparent and easily verifiable by outside individuals. We also foresee giving higher weights to group projects to facilitate collaboration and increase knowledge sharing within and between groups. 

## How we built it
To create this app, we used Firebase as a wallet database and for hosting the website, which is written in React. The React frontend interfaces with a Python Flask server hosted on Heroku for authentication and fulfilling transactions. 

## What's next for CHAINge
In the future, we plan on implementing more features of a social media site such as messaging and discussion posts to further facilitate collaboration within groups and also incorporate ways for groups to search for volunteers with relevant skills. We also plan on expanding the Stellar blockchain functionality by introducing a method for converting changecoin into monetary donations to nonprofits. 

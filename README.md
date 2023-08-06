SETTING UP REACT-NATIVE DEVELOPMENT ENVIRONMENT ON WINDOWS
To develop react-native applications for android on your windows device, you need the following:
•	Nodejs
•	Android Studio - For running the app on an emulator
•	You can use Expo if you wish to run the app on your physical device
INSTALLATION
•	Install Nodejs LTS version and jdk. It is recommended to install using Chocolatey package manager. Using the following command
'choco install -y nodejs-lts microsoft-openjdk'
•	You can install via gui by downloading nodejs from nodejs.org and jdk from oracle.com.
SET UP ANDROID STUDIO
•	Check if HAXM is installed using the command
•	'Get-WmiObject Win32_Product | Where-Object { $_.Name -like "*Intel Hardware Accelerated Execution Manager*" }' or simply run appwiz.cpl, confirm Intel Hardware Accelerated Execution Manager is listed among the Installed programs, otherwise install your processor specific HAXM.
•	Download and Install android studio selecting the following options
•	Android SDK
•	Android SDK Platform
•	Android Virtual Device
On completing the installation, You will be presented with the welcome screen.
INSTALL THE ANDROID SDK
React Native Apps explicitly support the Android 13(Tiramisu) SDK, you will therefore install it from the more actions menu in the welcome screen. You are required to install
•	Android SDK platform 33
•	Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
•	Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected.
•	Finally, click "Apply" to download and install the Android SDK and related build tools.
•	Configure the ANDROID_HOME environment variable
•	To do that;
•	Open the Windows Control Panel.
•	Click on User Accounts, then click User Accounts again
•	Click on Change my environment variables
•	Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
%LOCALAPPDATA%\ Android\Sdk
Ensure the environment variable is set by performing the following
•	Open powershell
•	Copy and paste Get-ChildItem -Path Env:\ into powershell
•	Verify ANDROID_HOME has been added

Add platform-tools to path
•	Open the Windows Control Panel.
•	Click on User Accounts, then click User Accounts again
•	Click on Change my environment variables
•	Select the Path variable.
•	Click Edit.
•	Click New and add the path to platform-tools to the list.
The default location for this folder is:
%LOCALAPPDATA%\Android\Sdk\platform-tools

REACT NATIVE COMMAND LINE INTERFACE
React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, it is recommended to access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run. However, if you have previously installed a global react-native-cli package, remove it as it may cause unexpected issues.
‘npm uninstall -g react-native-cli @react-native-commynity/cli’ will uninstall it, and ‘npx react-native@latest init ProjectName will install the latest version as well as initialize your new react-native project.
RUNNING THE REACT-NATIVE APPLICATION
Once the project is created, you should navigate to the project’s folder, and start Metro; the javascript bundler that ships with react-native. To do that, run ‘npm start’ on the terminal, you will be provided with options to proceed, 
•	r - reload the app
•	d - open developer menu
•	i - run on iOS
•	a - run on Android
You are set and can make changes to your application and see the changes live on your android emulator.

Alternatively, you can run the application with npx, which is considered more effective using the following commands
	   npx react-native start
	   npx react-native run-android
	   # or
	   npx react-native run-ios
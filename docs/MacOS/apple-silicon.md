# Apple Silicon (2020+) MacBook

## Table of Contents

## Preface

If you're reading this, you probably have a MacBook with an M1, M2, M3, or any M-series chip and want to run MultiSim on it. Unfortunately, MultiSim isn't available for macOS, and running it on an Apple Silicon MacBook isn't as simple as installing it on a Windows PC. This guide will walk you through the process of setting up a virtual machine on your MacBook to run Windows and install MultiSim. You can skip this section and go straight to the [guide](#guide) if you're already familiar with the situation.

### Why So Complicated?

The newer MacBooks, released in 2020 and later, use Apple's own M-series Apple Silicon chips, which are based on the ARM architecture. This means that the processor in these MacBooks is different from the Intel processors used in older MacBooks. The software that runs on these MacBooks must be compatible with the ARM architecture to run natively on these devices. To rub salt in the wound, MultiSim isn't even available for macOS, which is, at the moment, the only operating system that can run natively on Apple Silicon MacBooks easily.

### So What's the Solution?

The solution to run MultiSim on an Apple Silicon MacBook is to use a virtual machine. A virtual machine is a software that emulates a computer system. This allows you to run an operating system within another operating system. In this case, we will be using a virtual machine to run Windows 10 on an Apple Silicon MacBook to run MultiSim. If you prefer Windows 11, you can use that instead and still follow this guide, as the steps should be relatively the same.

## Guide

### 1. Installing Homebrew & Other Prerequisites

Homebrew is a package manager for macOS that allows you to install software and apps easily. We will be using Homebrew to install the software required to set up the virtual machine.

#### 1.1. Installing Homebrew

1. Press `Command + Space` to open Spotlight Search
2. Type `Terminal` and press `Enter`
3. Copy and paste the following command into the terminal and press `Enter`:

    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

4. Follow the instructions in the terminal to complete the installation.
   1. Enter your password when prompted
   2. Press `Enter` to confirm the installation location
   3. Wait for the installation to complete

#### 1.2 Other Prerequisites

1. Close the Terminal window and open a new one.
    > :information_source: **If you don't remember how to open a terminal window:** Press `Command + Space` to open Spotlight Search, type `Terminal`, and press `Enter`.

2. Run `brew --version` to verify that Homebrew is installed. If you see a version number, Homebrew is installed correctly and you can proceed. If you see an error message, please refer to the [Installing Homebrew](#installing-homebrew) section.
3. Copy and paste the following command into the terminal and press `Enter`:

    ```sh
    brew install utm
    ```

4. Wait for the installation to complete.
5. Copy and paste the following command into the terminal and press `Enter`:

    ```sh
    brew install crystalfetch
    ```

6. Wait for the installation to complete.

### 2. Setting Up the Virtual Machine

#### 2.1. Getting a Windows ISO

To install Windows on the virtual machine, you will need a Windows ISO file. You can skip this section if you already have a Windows ISO file.

1. Press `Command + Space` to open Spotlight Search
2. Type `CrystalFetch` and press `Enter`
3. Select `Windows 10` from the list of versions
4. Select `Intel x64` from the list of architectures
5. Select any language you prefer, or leave it as default, which should be `English (United States)`
6. Press `Download...` to download the Windows ISO file
7. Select your preferred download location (your `Downloads` folder is probably the default and good enough) and press `Move`.

#### 2.2. Creating the Virtual Machine

1. Press `Command + Space` to open Spotlight Search
2. Type `UTM` and press `Enter`
3. Click on `Create New Virtual Machine`
4. Select `Emulate` and click `Windows`
5. Make sure these settings are selected:
   - `Install Windows 10 or higher` is checked
   - `Import VHDX Image` is unchecked
   - `Install drivers and SPICE tools` is checked
6. Press `Browse...` and select the Windows ISO file you downloaded earlier, then press `Continue`.
7. Select the following settings:
   - `Architecture`: `x86_64`
   - `System`: `Standard PC (Q35 + ICH9, 2009) (alias of pc-q35-7.2) (q35)`
   - `Memory`: `4096 MB` (4 GB) or more
   - `CPU Cores`: `4` or more
8. Press `Continue`. The default of 64GiB is fine for the disk size, but you can increase it if you want. Press `Continue` again.
9. If you wish to make a folder that is shared between macOS and your virtual machine, you can set it up here. For now, press `Continue`.
10. Change the name of the virtual machine if you want, then press `Save`. Don't worry about the other settings.

#### 2.3. Configuring the Virtual Machine

1. Click on the virtual machine you just created and press the configure button, which is next to the play button in the upper right corner.
2. Click on `System` in the left sidebar.
3. Enable `Force Multicore`.
4. Click on `Display` in the left sidebar.
5. Enable `Resize display to window size automatically`.
6. Scroll down in the left sidebar and look through the list of IDE drives. You should see three drives. Find the one that has its `Image Type` set to `Disk Image` and click on it.
7. Change the `Interface` to `NVMe`. This will make identifying the drive easier later.
8. Press `Save`.
9. Press `Command + ,` to open UTM settings.
10. Click `Display` in the top bar.
11. Change the `Renderer Backend` to `ANGLE (Metal)`.
12. Close the settings window.

#### 2.4. Installing Windows

1. Click on the virtual machine you created and press the play button in the upper right corner.
2. When the window pops up, spam any key on your keyboard to boot to the Windows installer.
3. Wait for the installer to load.
4. Follow the instructions to install Windows.
   - When asked for a product key, you can skip it by pressing `I don't have a product key`. We will activate Windows later.
   - Select `Windows 10 Pro N` when asked which version to install. We use the `N` edition because it has better privacy, but it doesn't really matter if you don't use the `N` edition.
   - When asked for a partition to install Windows on, there should be only one option in the list. Select it and press `Next`.
5. Wait for Windows to install. This will take a while.
6. The installer will restart the virtual machine.

#### 2.5. Going Through Windows Setup

Wait for the Windows setup screen to show up. Setting up Windows is quite straightforward. Just follow the instructions on the screen. However, there are a few things to note:

1. Turn off WiFi after completing the Basics section. You can turn it back on after activating Windows.
2. If you get any errors that start with `OOBE`, just click `Skip`.
3. Deny all privacy settings. Any settings that ask for your location, microphone, camera, etc., should be denied.
4. When asked about Cortana, select `Not now`.
5. If you are asked to sign in with a Microsoft account, select `Offline account` and then `Limited experience`.

The setup for Windows 11 is slightly different though. To set up Windows 11, follow these steps:

1. Select your language and then your keyboard layout
2. Press `Shift + Fn + F10` to open Command Prompt
3. Type in `oobe\bypassnro`, press `Enter`, and wait for your computer to restart.
4. Continue through with setup, but:
   - Do not connect to the internet
   - Deny each option in the Privacy section

### 3. Improving Performance (Optional)

All of the steps in this section are technically optional, but it's highly recommended to follow these steps to make your virtual machine run better. By default, the virtual machine will work fine, but it will be quite slow and not as good as it could be. These steps will make your virtual machine run faster and more smoothly.

#### 3.1. Activating Windows

Windows will work fine without activation, but it's best to activate it to remove the watermark and unlock all features. If you have a product key, you can use it to activate Windows. However, we'll assume you don't have a product key and will use a free method to activate Windows.

1. Turn on Wi-Fi on your MacBook. Wait for Windows to connect to the internet.
2. Open the Start menu and search for `Powershell`.
3. Run the following command in Powershell:

    ```pwsh
    irm https://get.activated.win | iex
    ```

    If that command doesn't work, use the following command:

    ```pwsh
    irm https://massgrave.dev/get | iex
    ```

4. Once the new window pops up, press `1` and wait for the activation to complete. You will know when it's done because the window will tell you.
5. Close the window and close Powershell.

#### 3.2. Installing UTM Tools

UTM Tools are a set of drivers and tools that make the virtual machine run better. They are not required, but they are recommended. They allow us to resize the window freely, share files between macOS and Windows, and more.

1. Open the Start menu and search for `File Explorer`.
2. Go to `This PC` and open the `CD Drive (D:) UTM` by double-clicking on it.
3. Run the `utm-guest-tools-0.299.exe` file by double-clicking it. The number may be different depending on the version of UTM you are using, but it should be similar.
4. Click `Next`, `I Agree`, and wait for UTM Guest Tools to be installed.
5. Click `Finish`.

#### 3.3. Installing AtlasOS

AtlasOS is a modification of Windows that removes all the bloatware and telemetry that comes with Windows. It's originally made for gaming, but it works well for general use too and will make using your virtual machine a lot better. You can skip this step if you don't mind the performance.

1. Open Microsoft Edge (the browser that comes with Windows).
2. Go to [this link](https://atlasos.net/).
3. Click on `Get started`.
4. Click on `Already following the guide?`.
5. Click `Atlas Playbook` and `AME Wizard` and wait for them to download.
6. In your File Explorer window, go to `Downloads` and right-click both of the files you just downloaded. To do this, hold down the `Control` key on your keyboard while clicking.
7. Extract both files by clicking `Extract here`.
8. Open the `AME Wizard Beta` folder and run the `AME Wizard Beta.exe` file.
9. Return to your File Explorer window, navigate back to your Downloads folder and open the `AtlasPlaybook_v0.4.0` folder. It may have a different version number, but it should be similar.
10. Drag the similarly named `AtlasPlaybook_v0.4.0.apbx` folder into the `AME Wizard Beta` window, right onto where it says to drag `.apbx` files to.
11. Follow the instructions in the AME Wizard Beta window to install AtlasOS.

#### 3.4. Disabling Visual Effects

1. Open the Start menu and open `Settings`.
2. Go to `Ease of Access` > `Display` and make sure the following settings are off:
    - `Show animations in Windows`
    - `Show transparency in Windows`
3. Close the Settings window.
4. Open the Start menu and search for `Control Panel`.
5. Click on `System and Security` > `System`.
6. Scroll down and click on `Advanced system settings`.
7. Click on `Settings` under `Performance`.
8. Leave only the following settings checked:
    - `Show thumbnails instead of icons`
    - `Show window contents while dragging`
    - `Smooth edges of screen fonts`
    - `Smooth-scroll list boxes`
9. Click `Apply` and then `OK`.
10. Close the windows that are open.

#### 3.5. Cleaning Up Leftovers

1. Open the Start menu and click on the power button.
2. Click on `Shut down`.
3. Wait for the virtual machine to shut down.
4. Close the UTM window.
5. Open UTM again and click on the virtual machine you created.
6. Click on the settings button in the upper right corner, next to the play button.
7. Scroll down in the left sidebar and delete the two IDE drives by Control-clicking on them and selecting `Delete`.

### 4. Installing MultiSim

#### 4.1. Making an NI Account

One of the requirements to download MultiSim is to have an NI Account. If you already have an NI account, you can skip this section. If you don't have an NI account, follow these steps to create one on your Mac, not in the virtual machine:

1. Go to [this link](https://www.ni.com/en-us/support/downloads/software-products/download.multisim.html#369660).
2. Press the "Log in to download" button.
3. Click on the "Create Account>" link.
4. Fill in the required information and press "Create Account". For `Role`, select `Student`. Use your own, personal, non-school email address.
5. Check your email for a verification email from NI. Click on the link in the email to verify your account and press `Continue`.
6. Return to your browser and log in to your NI account by returning to the [download page](https://www.ni.com/en-us/support/downloads/software-products/download.multisim.html#369660) and pressing the "Log in to download" button.

#### 4.2. Installing MultiSim

With a NI Account, you can now install MultiSim on your virtual machine:

1. Turn on your virtual machine by opening UTM and clicking on the virtual machine you created, then pressing the play button.
2. Log in to your virtual machine.
3. If you decided to install AtlasOS in the previous steps, launch Brave (the browser that comes with AtlasOS) and go to the [download page](https://www.ni.com/en-us/support/downloads/software-products/download.multisim.html#369660) to download MultiSim. Otherwise, use Microsoft Edge to go to the download page.
4. Log in to your NI account and download the MultiSim installer.
5. Launch the installer and follow the instructions to install MultiSim.
    > :information_source: **Note:** When you get to the `Installing Circuit Design Suite` screen, select `NI Certificates Installer`. This will make installing other NI software easier, which the installer will also install alongside MultiSim.
    - When prompted to enable the NI Update Service, select `Yes`.
6. Close the activation window that pops up after the installation is complete, then press the `Restart Now` button in the installer.

#### 4.3. Activating MultiSim

1. Launch MultiSim.

> :information_source: **Note:** Additional information on activating MultiSim will be added in the future.

### 5. Conclusion

Congratulations! You have successfully set up a virtual machine on your Apple Silicon MacBook to run Windows and installed MultiSim. You can now use MultiSim on your MacBook without any issues. If you have any questions or need help with any of the steps, feel free to ask in the 
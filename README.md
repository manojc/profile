# POC To Host Node App Using Domains

Follow following steps -

* After creating AWS instance, customise security groups as per exposed ports.
* Make sure following lines are commented to allow OM" deploy to talk to aws server -
    ``` bash
    # If not running interactively, don't do anything
    case $- in
        *i*) ;;
        *) return;;
    esac
    ```
* Add shh keys for git ssh commands to work
* Copy `ecosystem.config.js` file in ~/.pm2 folder on the awsAWS server.
* Set up pm2 deploy using following command -
    ``` bash
    pm2 deploy /home/localstars/Documents/project-config/pm2-configs/profile.config.js production setup
    ```
* deploy app using following command -
    ```
    pm2 deploy /home/localstars/Documents/project-config/pm2-configs/profile.config.js production
    ```
# TEAMWORK

A project to build effective teamwork and communication.

## Frontend Docker Setup

- Docker desktop is required to set up a docker container, it can be gotten here [Docker](https://www.docker.com/), run `docker --version` to confirm installation.

- Navigate into the client folder from the terminal `cd client`

- Run the command to generate a docker image `docker build -t my-app .`

- Run this command after building an image `docker compose up`


## Backend Docker Setup

- Navigate to the client folder from the terminal `cd client`

- Run the command to generate a docker image `docker build -t server-app .`

- Run this command after building an image `docker compose up`


- If you want to run the compose silenty use `docker compose up -d`
<p align="center">
<img src="/docs/Screenshot from 2023-01-18 22-32-45.png" alt="server folder" style="height: 20%; width:70%;"/>
</p>

- Result from both commands `docker compose up` and `docker compose up -d`
    * This shows that the server is up and running
    <p align="center">
    <img src="/docs/Screenshot from 2023-01-18 22-30-49.png" alt="server folder" style="height: 20%; width:70%;"/>
    </p>

    * This shows that the mongo-express (A web interface for mongo-db)
    <p align="center">
    <img src="/docs/Screenshot from 2023-01-18 22-31-04.png" alt="server folder" style="height: 20%; width:70%;"/>
    </p>
- if you want to stop the container `docker compose down`
<p align="center">
<img src="/docs/Screenshot from 2023-01-18 22-28-05.png" alt="server folder" style="height: 20%; width:70%;"/>
</p>


### Note 
- If you're on linux you might need to use `sudo ` beofre all commands listed above

## NOTE

- Use `pnpm install` for installation in this project.
- If you don't have pnpm, install it via `npm i -g pnpm`. For more details, go to https://pnpm.js.org/
- Use icons from [mingcute](https://www.mingcute.com/) or [remixicon](https://remixicon.com/). **NB: Ming is our fist choice**

## CONTRIBUTORS

## LICENSE

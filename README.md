# TEAMWORK

A project to build effective teamwork and communication.

## Installation steps

1. Clone the project by running

    ```sh
    git clone https://github.com/<your-github-username>/team.git
    ```

2. Go into the project directory

    ```sh
    cd projectmate
    ```

3. Go into the client directory and install all dependencies

    ```sh
    cd client
    pnpm install
    ```

4. Go into the server directory and install all dependencies

    ```sh
    cd server
    pnpm install
    ```

5. Start the client development server

    ```sh
    cd client
    pnpm dev
    ```

6. Start the server directory development server
    ```sh
    cd server
    pnpm dev
    ```

## Frontend Docker Setup

-   Docker desktop is required to set up a docker container, it can be gotten here [Docker](https://www.docker.com/), run `docker --version` to confirm installation.

-   Navigate into the client folder from the terminal `cd client`

-   Run the command to generate a docker image `docker build -t my-app .`

-   Run this command after building an image `docker compose up`

## Backend Docker Setup

-   Navigate to the client folder from the terminal `cd client`

-   Run the command to generate a docker image `docker build -t server-app .`

-   Run this command after building an image `docker compose up`

-   If you want to run the compose silenty use `docker compose up -d`
<p align="center">
<img src="/docs/Screenshot from 2023-01-18 22-32-45.png" alt="server folder" style="height: 20%; width:70%;"/>
</p>

-   Result from both commands `docker compose up` and `docker compose up -d`

    -   This shows that the server is up and running
    <p align="center">
    <img src="/docs/Screenshot from 2023-01-18 22-30-49.png" alt="server folder" style="height: 20%; width:70%;"/>
    </p>

    -   This shows that the mongo-express (A web interface for mongo-db)
    <p align="center">
    <img src="/docs/Screenshot from 2023-01-18 22-31-04.png" alt="server folder" style="height: 20%; width:70%;"/>
    </p>

-   if you want to stop the container `docker compose down`
<p align="center">
<img src="/docs/Screenshot from 2023-01-18 22-28-05.png" alt="server folder" style="height: 20%; width:70%;"/>
</p>

-   if you want to see your running containers `docker ps`

### Note

-   If you're on linux you might need to use `sudo ` beofre all commands listed above

## NOTE

-   Use `pnpm install` for installation in this project.
-   If you don't have pnpm, install it via `npm i -g pnpm`. For more details, go to https://pnpm.js.org/
-   Use icons from either [mingcute](https://www.mingcute.com/) or [remixicon](https://remixicon.com/). **NB: Ming is our fist choice**

## CONTRIBUTORS

## LICENSE

The MIT License :balance_scale:

Copyright (c) 2022 TeamWork

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

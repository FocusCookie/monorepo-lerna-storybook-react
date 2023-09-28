FROM mcr.microsoft.com/playwright:v1.34.0-jammy
ARG DEBIAN_FRONTEND=noninteractive

RUN apt purge nodejs -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get install -y nodejs
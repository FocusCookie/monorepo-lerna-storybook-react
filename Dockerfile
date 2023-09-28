FROM ubuntu:20.04
RUN echo "APT::Get::Assume-Yes \"true\";" > /etc/apt/apt.conf.d/90assumeyes
RUN apt-get update
RUN apt-get -y install locales
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
RUN locale-gen en_US.UTF-8
RUN locale
RUN apt-get update
ENV DEBIAN_FRONTEND=noninteractive 
RUN apt-get install -y --no-install-recommends --fix-missing -f \
        wget \
        make \
        ca-certificates \
        curl \
        jq \
        git \
        iputils-ping \
        libunwind8 \
        netcat \
        default-jre \
        zip \
        nano \
        apt-transport-https \
        ca-certificates \
        gnupg-agent \
        software-properties-common \
        unzip \
        python3 \
        libglu1 \
        libxi6 \
        libgconf-2-4 \
        build-essential \
        libpng-dev \
        zip \
        bzip2 \
        git \
        python3-distutils \
        python3-apt \
        python \
        sudo

RUN curl -sL https://sentry.io/get-cli/ | bash
RUN curl -sS https://bootstrap.pypa.io/pip/3.5/get-pip.py | sudo python3
RUN wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -

RUN echo "Ubuntu: Install nodejs"
RUN sudo apt-get install -y nodejs

RUN echo "Install lerna"
RUN sudo npm i lerna@6.0.0 -g

RUN echo "🎎 Install playwright "
RUN npx playwright install
RUN npx playwright install-deps

RUN echo "👯‍♀️ clone repository"
RUN git clone https://github.com/FocusCookie/monorepo-lerna-storybook-react.git /home/repo/
WORKDIR /home/repo

RUN echo "⛓️ Install npm dependencies"
RUN npm install

RUN echo "🥾 lerna bootstrap"
RUN lerna bootstrap

RUN echo "📸 Screenshot tests"
RUN lerna run test:screenshots
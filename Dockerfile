FROM ubuntu:20.04
RUN echo "APT::Get::Assume-Yes \"true\";" > /etc/apt/apt.conf.d/90assumeyes
RUN apt-get update
RUN apt-get -y install locales
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen
RUN apt-get update
RUN apt-get install -y --no-install-recommends \
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
        sudo \
        libgtk2.0-0 \
        libgtk-3-0 \
        libgbm-dev \
        libnotify-dev \
        libgconf-2-4 \
        libnss3 \
        libxss1 \
        libasound2 \
        libxtst6 \
        xauth \
        xvfb \
        libsoup-3.0.0 \
        libgstreamer* \
        libgstcodecparsers-1.0 \
        libflite \
        libflite_usenglish \
        libflite_cmu_grapheme_lang \
        libflite_cmu_grapheme_lex \
        libflite_cmu_indic_lang \
        libflite_cmu_indic_lex \
        libflite_cmulex \
        libflite_cmu_time_awb \
        libflite_cmu_us_awb \
        libflite_cmu_us_kal16 \
        libflite_cmu_us_kal \
        libflite_cmu_us_rms \
        libflite_cmu_us_slt \
        libx264 \
        gstreamer1.0-libav \
        libnss3-tools \
        libatk-bridge2.0-0 \
        libcups2-dev \
        libxkbcommon-x11-0 \
        libxcomposite-dev \
        libxrandr2 \
        libgbm-dev \
        libgtk-3-0  

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"
#RUN apt-cache madison docker-ce
RUN apt-get update && apt-get install docker-ce="5:19.03.13~3-0~ubuntu-focal" docker-ce-cli="5:19.03.13~3-0~ubuntu-focal" containerd.io -y
RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose
RUN ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
RUN curl -sL https://sentry.io/get-cli/ | bash
RUN curl -sS https://bootstrap.pypa.io/pip/3.5/get-pip.py | sudo python3
RUN wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
RUN dpkg -i packages-microsoft-prod.deb
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN echo "Install dependencies"
RUN sudo apt-get install -y nodejs
RUN echo "Install lerna"
RUN sudo npm i lerna -g
RUN echo "Lerna bootstrap"
RUN sudo lerna bootstrap
RUN echo "Run screenshot tests"
RUN sudo lerna run screenshots:test
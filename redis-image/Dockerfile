# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc


# Tell the image what to do when it starts as a container
CMD ["redis-server"]


# =============================================================================================
# FROM ubuntu:latest

# # Installing prereqs

# RUN apt-get update -y
# RUN apt-get install curl -y
# RUN apt-get install sudo -y
# RUN sudo apt-get install vim -y
# RUN sudo apt-get install gnupg -y

# # Adding Elastic repo

# RUN curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
# RUN echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
# RUN sudo apt-get update -y

# # install elastic
# RUN sudo apt install elasticsearch

# # configure elastic
# RUN sed -i 's/#network.host: 192.168.0.1/network.host: 0.0.0.0/g' /etc/elasticsearch/elasticsearch.yml
# RUN echo "discovery.type: single-node" >> /etc/elasticsearch/elasticsearch.yml

# #entrypoint script
# RUN touch /opt/start.sh
# RUN echo "#!/bin/sh" >> /opt/start.sh
# RUN echo "sudo -u elasticsearch /usr/share/elasticsearch/bin/elasticsearch" >> /opt/start.sh
# RUN chmod 750 /opt/start.sh

# ENTRYPOINT ["/opt/start.sh"]

#  Run:  docker build .
# docker run -p 9200:9200 <container_id>



apk update && apk add --virtual build-dependencies build-base 
apk add git 
apk add postgresql16-dev
gem install bundler 
gem install rails 
rails new agoraKosmos --api --database=postgresql 
gem install pg
cd agoraKosmos
bundle install --gemfile /home/app/agoraKosmos/Gemfile
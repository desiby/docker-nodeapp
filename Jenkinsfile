pipeline {
   agent any
   stages {
      stage('Verify Branch') {
         steps {
            echo "$GIT_BRANCH"
         }
      }
      stage('Build Docker image') {
         steps {
            sh "docker image ls"
            sh "docker build -t desiby/docker-nodeapp ."
            sh "docker image ls"
         }
      }
      stage('Run App in Container') {
         steps {
            sh "docker run -p 50000:9000 desiby/docker-nodeapp"
         }
      }
   }
}

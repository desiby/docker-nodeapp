pipeline {
   agent any
   stages {
      stage('Verify Branch') {
         steps {
            echo "$GIT_BRANCH"
         }
      }
      stage('build image') {
         steps {
            sh "docker image ls"
            sh "docker build desiby/docker-nodeapp "
            sh "docker docker image ls"
         }
      }
   }
}

pipeline {
   agent any
   stages {
      stage('Verify Branch') {
         steps {
            echo "$GIT_BRANCH"
         }
      }
      stage('remove all') {
         steps {
            sh "docker stop $(docker ps -aq)"
            sh "docker rm $(docker ps -aq)"
            sh "docker rmi $(docker images -q)"
         }
      }
   }
}

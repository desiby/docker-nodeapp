pipeline {
   agent { dockerfile true }
     stages { 

      stage('build image') {
         steps {
            sh 'node --version'
         }
      }
     }
      post {
         success {
            echo "build succedeed :)"
         }
         failure {
            echo "build failed :("
         }
      }
}
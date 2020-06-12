node {
      checkout scm
      def image
      
      stage("build image"){  
            image = docker.build 'desiby/docker-nodeapp'
      }

      docker.withRegistry('https://index.docker.io/v1/', 'dockerhub'){  
            image.push()
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
      
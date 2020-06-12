node {
      checkout scm
      def image
   
      stage("build image"){  
          try{
            image = docker.build 'desiby/docker-nodeapp'
          }
          catch (exc){
             echo "something failed"
             throw
          }
      }

      stage("push image"){
         try{
               docker.withRegistry('https://index.docker.io/v1/', 'dockerhub'){  
                     image.push()
               }
         }
         catch (exc){
            echo "something failed, couldn't push"
            throw
         }
      }
}
      
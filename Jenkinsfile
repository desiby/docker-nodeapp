node {
      checkout scm
      def image
   
      stage("build image"){
          try{  
            image = docker.build 'desiby/docker-nodeapp'
          }catch (exc){
             echo exc
          }
      }
      
      stage("scan image"){
          try{  
           sh 'trivy desiby/docker-nodeapp'
          }catch (exc){
             echo exc
          }
      }

      stage("push image"){
         try{
               docker.withRegistry('https://index.docker.io/v1/', 'dockerhub'){  
                     image.push()
               }
         }
         catch (exc){
            echo exc
         }
      }
}
      

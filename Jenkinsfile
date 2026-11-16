pipeline{
    agent any
    stages {
        stage('install'){
            steps {
                bat 'npm install'
            }
        }
        stage('test'){

            
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
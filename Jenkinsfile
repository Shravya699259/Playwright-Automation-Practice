pipeline{
    agent any
    stages {
        stage('install'){
            steps {
                sh 'npm ci'
            }
        }
        stage('test'){
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
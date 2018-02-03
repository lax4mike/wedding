gulp build --env production --no-watch
ssh oceanstar "mkdir -p ~/www/wedding"
scp -r ./build/* oceanstar:~/www/wedding

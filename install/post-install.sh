
# Inside a container
if [ -f /.dockerinit ]; then

    echo "Info: I'm inside matrix, so I will try to reset the world!";

    mysql -u root < install/database.sql
else

    echo "Info: Outside of the container, the database must be installed manualy."
fi
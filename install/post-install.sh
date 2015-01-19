
# Inside a container
if [ -f /.dockerinit ]; then

    echo "Info: I'm inside matrix, so I will try to reset the world!";

    DATABASE="fr_miit_dwh"
    RESULT=$(mysqlshow --u root -p $DATABASE| grep -v Wildcard | grep -o $DATABASE)

    # Database installed:
    if [ "$RESULT" == "$DATABASE" ]; then
        
        echo "Info: database already installed."
    else

        mysql -u root < install/database.sql
    fi
else

    echo "Info: Outside of the container, the database must be installed manualy."
fi
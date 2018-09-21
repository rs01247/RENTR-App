module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        // name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });


    /**JOIN TO ITEM TABLE */
    User.associate = function (models) {

        //USER-ITEM ASSOCIATION
        User.hasMany(models.Item, {
            onDelete: 'cascade'
        }); // END JOIN 

        // USER HAS MANY ITEMS THROUGH REQUEST 
        User.hasMany(models.Request, {
            as: "Owner",
            onDelete: 'cascade'
        });

        User.hasMany(models.Request, {
            as: "Requestor",
            onDelete: 'cascade'
        });

        // User.hasMany(models.Request, {
        //     as: "Owner",
        //     onDelete: 'cascade'
        // });
        // USER HAS MANY ITEMS THROUGH TRANSACTION
        User.hasMany(models.Transaction, {
            onDelete: 'cascade'
        });

        // USER HAS MANY ITEMS THROUGH USER-REVIEW
        User.hasMany(models.UserReview, {
            onDelete: 'cascade'
        });
    }

    return User;
};
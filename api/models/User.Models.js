module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        salt: DataTypes.STRING,
        hash: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            required: true,
            validate: {
                isEmail: true
            }
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
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
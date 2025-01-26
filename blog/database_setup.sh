#!/bin/bash

# 配置数据库连接信息
DB_HOST="localhost"
DB_USER="root"
DB_PASS="password"
DB_NAME="your_database_name"
SQL_FILE="setup.sql"

# 执行 SQL 脚本
mysql -h $DB_HOST -u $DB_USER -p$DB_PASS < $SQL_FILE

echo "Database and tables setup complete."

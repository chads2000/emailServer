./mysqldump --defaults-file=my.cnf.d --single-transaction --ssl -h [HOST] -P 3306 -u [USERNAME] -p[PASSWORD] -B [DB] -r ./dump.sql

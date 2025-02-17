@echo off
python -c "import os; f=open('sitemap.txt', 'w', encoding='utf-8'); [f.write('    '*root.replace(os.getcwd(), '').count(os.sep) + os.path.basename(root) + '/\n' + ''.join('    '*(root.replace(os.getcwd(), '').count(os.sep)+1) + file + '\n' for file in files)) for root, dirs, files in os.walk(os.getcwd())]; f.close()"
echo Sitemap generated: sitemap.txt
pause

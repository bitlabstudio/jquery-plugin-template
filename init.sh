#!/bin/bash
# The variable values here are just examples. Replace them all with real values
# of your own plugin.

# Your full name, will appear in LICENSE and package.json
MYPLUGIN_AUTHOR_NAME='Your Name'

# Your email address, used in package.json
MYPLUGIN_AUTHOR_EMAIL='yourmail@gmail.com'

# The project name as it would appear as the main headline in the README
MYPLUGIN_FULL_NAME='My Awesome jQuery Plugin'

# The package name as defined in package.json - this is also what you would search
# for on npm registry, if you decide to register it there. You should search npm first and make sure
# that your package name is not taken already.
MYPLUGIN_PACKAGE_NAME='jquery-awesome-plugin'

# A short description which will be added as the first line in the README and to the package.json file
MYPLUGIN_DESCRIPTION='A jQuery plugin, that does pretty awesome things.'

# Path to your repo on Github (without the .git at the end)
MYPLUGIN_REPO_URL='https://github.com/bitmazk/jquery-awesome-plugin'

# Since we take a Prototype based plugin approach for better testablity, we implemented it in this template as well.
# Therefore you need to enter a name for the prorotype
MYPLUGIN_PROTOTYPE_NAME='MyAwesomePlugin'

# This will be the function to call the plugin with: e.g. ``$(element).mysuperplugin();``
MYPLUGIN_NAMESPACE='mysuperplugin'

# Current year, will be shown in the license file. You can set it to any year
# (i.e. 2001) or just leave this default and compute it automatically
MYPLUGIN_YEAR=`date +'%Y'`

# ============================================================================

rm -rf .git
rm README.rst
mv MYPLUGIN_README.rst README.rst
rm AUTHORS
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_YEAR#${MYPLUGIN_YEAR}#g"
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_AUTHOR_NAME#${MYPLUGIN_AUTHOR_NAME}#g"
"${CMD[@]}" | xargs -0 perl -pi -e 's#MYPLUGIN_AUTHOR_EMAIL#$ENV{MYPLUGIN_AUTHOR_EMAIL}#g'
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_FULL_NAME#${MYPLUGIN_FULL_NAME}#g"
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_DESCRIPTION#${MYPLUGIN_DESCRIPTION}#g"
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_PACKAGE_NAME#${MYPLUGIN_PACKAGE_NAME}#g"
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_REPO_URL#${MYPLUGIN_REPO_URL}#g"
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_PLUGIN_PROTOTYPE#${MYPLUGIN_PROTOTYPE_NAME}#g"
"${CMD[@]}" | xargs -0 perl -pi -e "s#MYPLUGIN_NAMESPACE#${MYPLUGIN_NAMESPACE}#g"

rm init.sh
git init
npm install
echo "All done! Don't forget to fix the first headline in README.rst and then make your initial commit!"

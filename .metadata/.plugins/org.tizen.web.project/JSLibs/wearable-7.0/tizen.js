/**
 * The AccountExtendedDataArraySuccessCallback provides the success method for .
 *
 * @super Object
 * @constructor
 * @return {AccountExtendedDataArraySuccessCallback}
 */
function AccountExtendedDataArraySuccessCallback() {};
AccountExtendedDataArraySuccessCallback.prototype = new Object();

/**
 * The AccountManager interface provides configuration functionality for providers and accounts.
 *
 * @super Object
 * @constructor
 * @return {AccountManager}
 */
function AccountManager() {};
AccountManager.prototype = new Object();

/**
 * The Account interface is the interface for a single account. The implementation should manage authentication, storing eventual user credentials, presenting password dialogs, and so on.
          <p>
The information is hidden from web applications.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Account}
 */
function Account() {};
Account.prototype = new Object();

/**
 * The AccountArraySuccessCallback interface provides the success method for .
 *
 * @super Object
 * @constructor
 * @return {AccountArraySuccessCallback}
 */
function AccountArraySuccessCallback() {};
AccountArraySuccessCallback.prototype = new Object();

/**
 * The AccountProviderArraySuccessCallback interface provides the success method for .
 *
 * @super Object
 * @constructor
 * @return {AccountProviderArraySuccessCallback}
 */
function AccountProviderArraySuccessCallback() {};
AccountProviderArraySuccessCallback.prototype = new Object();

/**
 * The AccountExtendedData interface defines the extended data of an account.
 *
 * @super Object
 * @constructor
 * @return {AccountExtendedData}
 */
function AccountExtendedData() {};
AccountExtendedData.prototype = new Object();

/**
 * The AccountManagerObject interface defines what is instantiated in the tizen object.
          <p>
The tizen.account object allows accessing the functionality of the Account API.
There is one account manager in one web runtime.
The Accounts back-end may support multiple account managers.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AccountManagerObject}
 */
function AccountManagerObject() {};
AccountManagerObject.prototype = new Object();

/**
 * The AccountChangeCallback interface defines callbacks for getting notified about account changes.
 *
 * @super Object
 * @constructor
 * @return {AccountChangeCallback}
 */
function AccountChangeCallback() {};
AccountChangeCallback.prototype = new Object();

/**
 * The AccountProvider interface represents a service provider, such as Google, Yahoo or Vodafone.
 *
 * @super Object
 * @constructor
 * @return {AccountProvider}
 */
function AccountProvider() {};
AccountProvider.prototype = new Object();

/**
 * Called when information of extended data is ready.
 *
 * @param {array} extendedDataArray
 * @type void
 * @memberOf AccountExtendedDataArraySuccessCallback
 * @returns {void}
 */
AccountExtendedDataArraySuccessCallback.prototype.onsuccess = function(extendedDataArray){ return; };

/**
 * Adds an account to the account database.
            <p>
If the account is added successfully, an accountId and provider are newly assigned when the function returns.
            </p>
            <p>
This method can be used only by an account provider application.<br/>If the application is registered as provider, it will be launched to authenticate the account.
You should implement the appcontrol for the account provider.<br/>For more details, see
<a href="/application/web/guides/personal/account#retrieving-providers">Account Provider</a>            </p>
           
 *
 * @param {Account} account
 * @type void
 * @memberOf AccountManager
 * @returns {void}
 */
AccountManager.prototype.add = function(account){ return; };

/**
 * Removes an account from the account database.
            <p>
Removes the account in the database that corresponds to the specified identifier.
The function will throw an exception if it failed to remove the specified account.
            </p>
            <p>
This method can be used by an account provider application.
            </p>
           
 *
 * @param {AccountId} accountId
 * @type void
 * @memberOf AccountManager
 * @returns {void}
 */
AccountManager.prototype.remove = function(accountId){ return; };

/**
 * Updates an account.
            <p>
This method can be used only an account provider application.
            </p>
           
 *
 * @param {Account} account
 * @type void
 * @memberOf AccountManager
 * @returns {void}
 */
AccountManager.prototype.update = function(account){ return; };

/**
 * Gets the Account object with the given identifier.
 *
 * @param {AccountId} accountId
 * @type Account
 * @memberOf AccountManager
 * @returns {Account}
 */
AccountManager.prototype.getAccount = function(accountId){ var ret = new Account(); return ret; };

/**
 * Gets the accounts associated with the provider that has a specified applicationId, asynchronously. If you want to get all accounts, omit the applicationId argument.
 *
 * @param {AccountArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {String} applicationId
 * @type void
 * @memberOf AccountManager
 * @returns {void}
 */
AccountManager.prototype.getAccounts = function(successCallback, errorCallback, applicationId){ return; };

/**
 * Gets the account provider with the given application identifier.
            <p>
You can register your application as an account provider by writing account related information in <var>config.xml</var>.<br/>For more details, see
<a href="/application/web/guides/personal/account#retrieving-providers">Account Provider</a>            </p>
           
 *
 * @param {ApplicationId} applicationId
 * @type AccountProvider
 * @memberOf AccountManager
 * @returns {AccountProvider}
 */
AccountManager.prototype.getProvider = function(applicationId){ var ret = new AccountProvider(); return ret; };

/**
 * Gets the providers with the given capabilities, asynchronously. If you want to get all the providers, omit the capability argument.
 *
 * @param {AccountProviderArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {String} capability
 * @type void
 * @memberOf AccountManager
 * @returns {void}
 */
AccountManager.prototype.getProviders = function(successCallback, errorCallback, capability){ return; };

/**
 * Adds an account listener for watching changes to accounts.
 *
 * @param {AccountChangeCallback} callback
 * @type Number
 * @memberOf AccountManager
 * @returns {Number}
 */
AccountManager.prototype.addAccountListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Removes the previously registered listener.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} accountListenerId
 * @type void
 * @memberOf AccountManager
 * @returns {void}
 */
AccountManager.prototype.removeAccountListener = function(accountListenerId){ return; };

/**
 * Identifier for the account. By default, this attribute is set to null.
 *
 * @type AccountId
 */
Account.prototype.id = new AccountId();

/**
 * Account user name. By default, this attribute is set to null.
 *
 * @type String
 */
Account.prototype.userName = new String();

/**
 * Name, identifier or URI of the icon. By default, this attribute is set to null.
 *
 * @type String
 */
Account.prototype.iconUri = new String();

/**
 * Reference to the provider. There is one provider for each account. A given provider can be referenced from many accounts.
 *
 * @type AccountProvider
 */
Account.prototype.provider = new AccountProvider();

/**
 * Adds the specified key and value to the extended data.
            <p>
If the specified key already exists, the corresponding value is overwritten with the specified value.
            </p>
           
 *
 * @param {String} key
 * @param {String} value
 * @type void
 * @memberOf Account
 * @returns {void}
 */
Account.prototype.setExtendedData = function(key, value){ return; };

/**
 * Gets the value for the given key from the extended data. Returns null if the given key is not found.
 *
 * @param {String} key
 * @type String
 * @memberOf Account
 * @returns {String}
 */
Account.prototype.getExtendedData = function(key){ var ret = new String(); return ret; };

/**
 * Gets the extended data for the account as an array, asynchronously. Returns an empty array if there is no extended data.
 *
 * @param {AccountExtendedDataArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Account
 * @returns {void}
 */
Account.prototype.getExtendedData = function(successCallback, errorCallback){ return; };

/**
 * Called when information of accounts is ready.
 *
 * @param {array} accounts
 * @type void
 * @memberOf AccountArraySuccessCallback
 * @returns {void}
 */
AccountArraySuccessCallback.prototype.onsuccess = function(accounts){ return; };

/**
 * Called when information of providers are ready.
 *
 * @param {array} providers
 * @type void
 * @memberOf AccountProviderArraySuccessCallback
 * @returns {void}
 */
AccountProviderArraySuccessCallback.prototype.onsuccess = function(providers){ return; };

/**
 * Name (key) of the account extended data item.
 *
 * @type String
 */
AccountExtendedData.prototype.key = new String();

/**
 * Value of the account extended data item.
 *
 * @type String
 */
AccountExtendedData.prototype.value = new String();

/**
 * Object representing an account manager.
 *
 * @type AccountManager
 */
AccountManagerObject.prototype.account = new AccountManager();

/**
 * Called when an account is added.
 *
 * @param {Account} account
 * @type void
 * @memberOf AccountChangeCallback
 * @returns {void}
 */
AccountChangeCallback.prototype.onadded = function(account){ return; };

/**
 * Called when an account is removed.
 *
 * @param {AccountId} accountId
 * @type void
 * @memberOf AccountChangeCallback
 * @returns {void}
 */
AccountChangeCallback.prototype.onremoved = function(accountId){ return; };

/**
 * Called when an account is updated.
 *
 * @param {Account} account
 * @type void
 * @memberOf AccountChangeCallback
 * @returns {void}
 */
AccountChangeCallback.prototype.onupdated = function(account){ return; };

/**
 * Identifier of the account provider application.
 *
 * @type ApplicationId
 */
AccountProvider.prototype.applicationId = new ApplicationId();

/**
 * Logical (translatable) display name.
 *
 * @type String
 */
AccountProvider.prototype.displayName = new String();

/**
 * Path to the icon representing the account provider.
 *
 * @type String
 */
AccountProvider.prototype.iconUri = new String();

/**
 * Path to the small icon representing the account provider.
 *
 * @type String
 */
AccountProvider.prototype.smallIconUri = new String();

/**
 * Capabilities of the account provider defined in IRI format.
 * <p>
The following predefined capabilities can be used.
            </p>
 * <ul>
 * <li>http://tizen.org/account/capability/contact - Used when the account is related to contacts
 * <li>http://tizen.org/account/capability/calendar - Used when the account is related to calendar
 * </ul>
 *
 * @type array
 */
AccountProvider.prototype.capabilities = new array();

/**
 * Boolean value that indicates whether multiple accounts are supported.
 *
 * @type Boolean
 */
AccountProvider.prototype.isMultipleAccountSupported = new Boolean();

/**
 * Object representing an account manager.
 *
 * @type AccountManager
 */
Tizen.prototype.account = new AccountManager();

/**
 * The AlarmRelative interface provides the relative alarm, which occurs at a fixed interval in future.
          <p>
This alarm triggers after a duration mentioned in the <em>delay</em> attribute from the moment the alarm is added.
If a <em>period</em> is provided, the alarm keeps triggering for the given interval.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmRelative}
 */
function AlarmRelative() {};
AlarmRelative.prototype = new Alarm();

/**
 * The AlarmAbsolute interface provides an absolute alarm, which triggers at a specified absolute date.
          <p>
If the <em>daysOfTheWeek</em> array is not empty, the alarm triggers every week, for the given days, at the time defined by the <em>date</em> attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmAbsolute}
 */
function AlarmAbsolute() {};
AlarmAbsolute.prototype = new Alarm();

/**
 * The Alarm interface is an abstract interface for alarm types.
 *
 * @super Object
 * @constructor
 * @return {Alarm}
 */
function Alarm() {};
Alarm.prototype = new Object();

/**
 * The AlarmManager interface provides methods to manage alarms.
 *
 * @super Object
 * @constructor
 * @return {AlarmManager}
 */
function AlarmManager() {};
AlarmManager.prototype = new Object();

/**
 * The AlarmManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the Alarm API.
 *
 * @super Object
 * @constructor
 * @return {AlarmManagerObject}
 */
function AlarmManagerObject() {};
AlarmManagerObject.prototype = new Object();

/**
 * An attribute to store the difference in time (in seconds) between when an alarm is added and when it is triggered.
 *
 * @type Number
 */
AlarmRelative.prototype.delay = new Number();

/**
 * An attribute to store the duration in seconds between each trigger of an alarm. By default, this attribute is set to , indicating that this alarm does not repeat.
 *
 * @type Number
 */
AlarmRelative.prototype.period = new Number();

/**
 * Returns the duration in seconds before the next alarm is triggered.
            <p>
If the alarm has expired, this method returns <var>null</var>.
            </p>
           
 *
 * @type Number
 * @memberOf AlarmRelative
 * @returns {Number}
 */
AlarmRelative.prototype.getRemainingSeconds = function(){ var ret = new Number(); return ret; };

/**
 * An attribute to store the absolute date/time when the alarm is initially triggered.
 * <p>
This attribute is precise to the second. Milliseconds will be ignored.
            </p>
 *
 * @type Date
 */
AlarmAbsolute.prototype.date = new Date();

/**
 * An attribute to store the duration in seconds between each trigger of the alarm.
 * <p>
By default, this attribute is set to <var>null</var>, indicating that this alarm does not repeat.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type Number
 */
AlarmAbsolute.prototype.period = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
AlarmAbsolute.prototype.daysOfTheWeek = new array();

/**
 * Returns the date / time of the next alarm trigger.
            <p>
If the alarm has expired, this method returns <var>null</var>. The returned date is precise to the second.
            </p>
           
 *
 * @type Date
 * @memberOf AlarmAbsolute
 * @returns {Date}
 */
AlarmAbsolute.prototype.getNextScheduledDate = function(){ var ret = new Date(); return ret; };

/**
 * The alarm identifier.
 *
 * @type AlarmId
 */
Alarm.prototype.id = new AlarmId();

/**
 * The period of a minute. It defines the number of seconds per minute.
 *
 * @type Number
 */
AlarmManager.PERIOD_MINUTE = new Number();

/**
 * The period of an hour. It defines the number of seconds per hour.
 *
 * @type Number
 */
AlarmManager.PERIOD_HOUR = new Number();

/**
 * The period of a day. It defines the number of seconds per day.
 *
 * @type Number
 */
AlarmManager.PERIOD_DAY = new Number();

/**
 * The period of a week. It defines the number of seconds in a week.
 *
 * @type Number
 */
AlarmManager.PERIOD_WEEK = new Number();

/**
 * Adds an alarm to the storage.
            <p>
Sets an alarm with the application ID to be run. You should definitely provide the application ID to run
and the <a href="/application/web/guides/app-management/app-controls#application-control-request">application control</a> information if it is necessary.
For more information about the application control, see <a href="application.html">The Application API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {ApplicationId} applicationId
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.add = function(alarm, applicationId, appControl){ return; };

/**
 * Adds an alarm notification to the storage.
            <p>
Adds an alarm which causes notification to appear instead of launching an AppControl.
For more information about the notification, see <a href="notification.html">The Notification API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {Notification} notification
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.addAlarmNotification = function(alarm, notification){ return; };

/**
 * Removes an alarm from the storage.
            <p>
If an alarm goes off, it will be removed from the storage automatically.
            </p>
           
 *
 * @param {AlarmId} id
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.remove = function(id){ return; };

/**
 * Removes all alarms added by an application.
            <p>
Because each application has its own alarm storage, this method removes alarms only added by the calling application.
            </p>
           
 *
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.removeAll = function(){ return; };

/**
 * Returns an alarm as per the specified identifier.
 *
 * @param {AlarmId} id
 * @type Alarm
 * @memberOf AlarmManager
 * @returns {Alarm}
 */
AlarmManager.prototype.get = function(id){ var ret = new Alarm(); return ret; };

/**
 * Gets the notification to be posted when an alarm is triggered. Returned contains exactly the same data like passed to method .
 *
 * @param {AlarmId} id
 * @type UserNotification
 * @memberOf AlarmManager
 * @returns {UserNotification}
 */
AlarmManager.prototype.getAlarmNotification = function(id){ var ret = new UserNotification(); return ret; };

/**
 * Retrieves all alarms in an application storage.
            <p>
Alarms that have already been triggered are removed automatically from the storage.
            </p>
           
 *
 * @type array
 * @memberOf AlarmManager
 * @returns {array}
 */
AlarmManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * Object representing an alarm manager.
 *
 * @type AlarmManager
 */
AlarmManagerObject.prototype.alarm = new AlarmManager();

/**
 * Object representing an alarm manager.
 *
 * @type AlarmManager
 */
Tizen.prototype.alarm = new AlarmManager();

/**
 * This interface defines information about battery usage of application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationBatteryUsage}
 */
function ApplicationBatteryUsage() {};
ApplicationBatteryUsage.prototype = new Object();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.application</em> object allows access to the Application API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationManagerObject}
 */
function ApplicationManagerObject() {};
ApplicationManagerObject.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the application usage statistics array is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationUsage</em> objects as an input parameter. It is used in <em>ApplicationManager.getAppsUsageInfo()</em> method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AppsUsageInfoArraySuccessCallback}
 */
function AppsUsageInfoArraySuccessCallback() {};
AppsUsageInfoArraySuccessCallback.prototype = new Object();

/**
 * This interface defines information about usage of application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationUsage}
 */
function ApplicationUsage() {};
ApplicationUsage.prototype = new Object();

/**
 * This interface consists of an operation, URI, MIME type, and data. It describes an action to be performed by other applications and is passed to launch other applications. If the system gets the application control request, it finds the corresponding application to be launched with the delivered application control and launches the selected application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControl}
 */
function ApplicationControl() {};
ApplicationControl.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the list of running applications is retrieved.
          <p>
This callback interface specifies a success method with
an array of <em>ApplicationContext</em> objects as an input parameter. It is used in <em>ApplicationManager.getAppsContext()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationContextArraySuccessCallback}
 */
function ApplicationContextArraySuccessCallback() {};
ApplicationContextArraySuccessCallback.prototype = new Object();

/**
 * The ApplicationManager interface provides methods to retrieve application information, launch, install application, etc.
 *
 * @super Object
 * @constructor
 * @return {ApplicationManager}
 */
function ApplicationManager() {};
ApplicationManager.prototype = new Object();

/**
 * This interface defines the general information available to an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformation}
 */
function ApplicationInformation() {};
ApplicationInformation.prototype = new Object();

/**
 * The ApplicationControlDataArrayReplyCallback callback specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
<em>onsuccess()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyResult()</em>.            </li>
            <li>
<em>onfailure()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyFailure()</em>.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlDataArrayReplyCallback}
 */
function ApplicationControlDataArrayReplyCallback() {};
ApplicationControlDataArrayReplyCallback.prototype = new Object();

/**
 * This interface defines a key/value pair used to pass data between applications through the interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlData}
 */
function ApplicationControlData() {};
ApplicationControlData.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the system has finished searching applications that match a specific application control .
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation</em> objects and application control as an input parameter.
It is used in <em>ApplicationManager.findAppControl()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FindAppControlSuccessCallback}
 */
function FindAppControlSuccessCallback() {};
FindAppControlSuccessCallback.prototype = new Object();

/**
 * The SystemEventData interface defines what is retrieved from the event listener.
          <p>
Platform modules will be able to broadcast system events in a future Tizen release.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemEventData}
 */
function SystemEventData() {};
SystemEventData.prototype = new Object();

/**
 * This interface defines the information available about a running application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationContext}
 */
function ApplicationContext() {};
ApplicationContext.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the battery usage per application array is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationBatteryUsage</em> objects as an input parameter. It is used in <em>ApplicationManager.getBatteryUsageInfo()</em> method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BatteryUsageInfoArraySuccessCallback}
 */
function BatteryUsageInfoArraySuccessCallback() {};
BatteryUsageInfoArraySuccessCallback.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the installed application list is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation</em> objects as an input parameter. It is used in <em>ApplicationManager.getAppsInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationArraySuccessCallback}
 */
function ApplicationInformationArraySuccessCallback() {};
ApplicationInformationArraySuccessCallback.prototype = new Object();

/**
 * The EventCallback interface specifies a callback for getting notified when a specified event occurs.
 *
 * @super Object
 * @constructor
 * @return {EventCallback}
 */
function EventCallback() {};
EventCallback.prototype = new Object();

/**
 * This interface defines the meta data of an installed application
 *
 * @super Object
 * @constructor
 * @return {ApplicationMetaData}
 */
function ApplicationMetaData() {};
ApplicationMetaData.prototype = new Object();

/**
 * This interface defines the certificate information of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationCertificate}
 */
function ApplicationCertificate() {};
ApplicationCertificate.prototype = new Object();

/**
 * This interface defines the current application's information and the basic operations (such as exit or hide) for the current application.
 *
 * @super Object
 * @constructor
 * @return {Application}
 */
function Application() {};
Application.prototype = new Object();

/**
 * The StatusEventCallback interface specifies a callback for getting notified when status of the installed application has been changed.
 *
 * @super Object
 * @constructor
 * @return {StatusEventCallback}
 */
function StatusEventCallback() {};
StatusEventCallback.prototype = new Object();

/**
 * This interface has an application control information requested and passed from another application and is passed to launch other applications. The newly launched application can get the requested application control through the method, and send the results to the calling application through the method after performing the required action requested by the calling application.
 *
 * @super Object
 * @constructor
 * @return {RequestedApplicationControl}
 */
function RequestedApplicationControl() {};
RequestedApplicationControl.prototype = new Object();

/**
 * An attribute storing ID of an application.
 *
 * @type ApplicationId
 */
ApplicationBatteryUsage.prototype.appId = new ApplicationId();

/**
 * An attribute which stores information about battery usage of an application with ApplicationId . Battery usage is a ratio of battery consumption of the application with ApplicationId to the total battery consumption of all applications. The attribute value scales from to , the higher value, the more battery is consumed.
 *
 * @type Number
 */
ApplicationBatteryUsage.prototype.batteryUsage = new Number();

/**
 * Object representing a account manager.
 *
 * @type ApplicationManager
 */
ApplicationManagerObject.prototype.application = new ApplicationManager();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} appsInfoArray
 * @type void
 * @memberOf AppsUsageInfoArraySuccessCallback
 * @returns {void}
 */
AppsUsageInfoArraySuccessCallback.prototype.onsuccess = function(appsInfoArray){ return; };

/**
 * An attribute to store the ID of an application.
 *
 * @type ApplicationId
 */
ApplicationUsage.prototype.appId = new ApplicationId();

/**
 * An attribute to store the total number of times the application was in the foreground.
 *
 * @type Number
 */
ApplicationUsage.prototype.totalCount = new Number();

/**
 * An attribute to store the total time of application usage in seconds.
 *
 * @type Number
 */
ApplicationUsage.prototype.totalDuration = new Number();

/**
 * An attribute to store the last time when the application was used.
 *
 * @type Date
 */
ApplicationUsage.prototype.lastTime = new Date();

/**
 * An attribute to store the string that defines the action to be performed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.operation = new String();

/**
 * An attribute to store the URI needed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.uri = new String();

/**
 * An attribute to store the MIME type of content.
 *
 * @type String
 */
ApplicationControl.prototype.mime = new String();

/**
 * An attribute to store the category of the application to be launched.
 *
 * @type String
 */
ApplicationControl.prototype.category = new String();

/**
 * An array of attributes to store the data needed for an application control.
 *
 * @type array
 */
ApplicationControl.prototype.data = new array();

/**
 * An attribute to specify launch mode. Default application launch mode is .
 *
 * @type ApplicationControlLaunchMode
 */
ApplicationControl.prototype.launchMode = new ApplicationControlLaunchMode();

/**
 * Called when completes successfully.
 *
 * @param {array} contexts
 * @type void
 * @memberOf ApplicationContextArraySuccessCallback
 * @returns {void}
 */
ApplicationContextArraySuccessCallback.prototype.onsuccess = function(contexts){ return; };

/**
 * Gets the object defining the current application.
 *
 * @type Application
 * @memberOf ApplicationManager
 * @returns {Application}
 */
ApplicationManager.prototype.getCurrentApplication = function(){ var ret = new Application(); return ret; };

/**
 * Kills an application with the specified application context ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the context is not found with the specified context ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value
or if the specified context ID matches the context ID of the calling application.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextId} contextId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.kill = function(contextId, successCallback, errorCallback){ return; };

/**
 * Launches an application with the given application ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with the specified ID.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launch = function(id, successCallback, errorCallback){ return; };

/**
 * Launches an application with the specified application control.
            <p>
An application can launch other applications with the application control,
and get back the results from the launched applications.
            </p>
            <p>
The application control consists of an operation, URI, and MIME type, and describes
the request to be performed by the newly launched application. The
application control is passed to the <em>launchAppControl()</em> method to launch an
application. The system tries to find the proper application
to perform the requested application control, then launches the selected application.
            </p>
            <p>
The application control request is passed to the newly launched application
and it can be accessed by the <em>getRequestedAppControl()</em> method. The passed
application control contains the reason the application has been launched and
information about what the application is doing. The launched application
can send a result to the caller application with the <em>replyResult()</em> method of the
<em>RequestedApplicationControl</em> interface.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the system cannot find the application that matches the specified application control.              </li>
              <li>
SecurityError - If the application does not have the privilege to call the specified application control operation.              </li>
              <li>
UnknownError: If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationControlDataArrayReplyCallback} replyCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launchAppControl = function(appControl, id, successCallback, errorCallback, replyCallback){ return; };

/**
 * Finds which applications can be launched with the given application control.
            <p>
An application can get a list of other applications that can be launched with the application control.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with the given Appcontrol.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {FindAppControlSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.findAppControl = function(appControl, successCallback, errorCallback){ return; };

/**
 * Gets a list of application contexts for applications that are currently running on a device. The information contained for each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsContext = function(successCallback, errorCallback){ return; };

/**
 * Gets the application context for the specified application context ID. If the ID is set to or is not set at all, the method returns the application context of the current application. The list of running applications and their application IDs is obtained with .
 *
 * @param {ApplicationContextId} contextId
 * @type ApplicationContext
 * @memberOf ApplicationManager
 * @returns {ApplicationContext}
 */
ApplicationManager.prototype.getAppContext = function(contextId){ var ret = new ApplicationContext(); return ret; };

/**
 * Gets the list of installed applications' information on a device. The information contained on each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets application information for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application information for the current application.
The list of installed applications and their application IDs is obtained with <em>getAppsInfo()</em>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type ApplicationInformation
 * @memberOf ApplicationManager
 * @returns {ApplicationInformation}
 */
ApplicationManager.prototype.getAppInfo = function(id){ var ret = new ApplicationInformation(); return ret; };

/**
 * Gets application certificates for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application certificates for the current application.
            </p>
            <p>
The certificate types are listed below:
            </p>
            <ul>
              <li>
AUTHOR_ROOT - Author Root Certificate              </li>
              <li>
AUTHOR_INTERMEDIATE - Author Intermediate Certificate              </li>
              <li>
AUTHOR_SIGNER - Author Signer Certificate              </li>
              <li>
DISTRIBUTOR_ROOT - Distributor Root Certificate              </li>
              <li>
DISTRIBUTOR_INTERMEDIATE - Distributor Intermediate Certificate              </li>
              <li>
DISTRIBUTOR_SIGNER - Distributor Signer Certificate              </li>
              <li>
DISTRIBUTOR2_ROOT - Distributor2 Root Certificate              </li>
              <li>
DISTRIBUTOR2_INTERMEDIATE - Distributor2 Intermediate Certificate              </li>
              <li>
DISTRIBUTOR2_SIGNER - Distributor2 Signer Certificate              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppCerts = function(id){ var ret = new array(); return ret; };

/**
 * Gets the URI of the read-only shared directory of an application for a specified application ID.
            <p>
The shared directory is used to export data to other applications. Its structure is described in
<a href="/application/native/tutorials/details/io-overview">File System Directory Hierarchy</a>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type String
 * @memberOf ApplicationManager
 * @returns {String}
 */
ApplicationManager.prototype.getAppSharedURI = function(id){ var ret = new String(); return ret; };

/**
 * Gets the application meta data array for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the application meta data array for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppMetaData = function(id){ var ret = new array(); return ret; };

/**
 * Gets information about battery usage per application.
            <p>
This method provides information about battery usage collected in last <var>days</var> days, through callback <em>successCallback</em>.
Maximum number of retrieved objects can be set in <em>limit</em> parameter.
            </p>
            <p>
If the <em>days</em> is not given, this method retrieves information about battery usage since the time the device was unplugged, after reaching full charge.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - if any system error occurred.              </li>
              <li>
InvalidValuesError - if any of the input parameters contains an invalid value.              </li>
            </ul>
           
 *
 * @param {BatteryUsageInfoArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} days
 * @param {Number} limit
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getBatteryUsageInfo = function(successCallback, errorCallback, days, limit){ return; };

/**
 * Gets the usage statistics of applications.
            <p>
The method gets the most frequently or recently used applications statistics, depending on parameter <em>mode</em>,
which meet conditions in <em>filter</em> object.
Maximum number of retrieved objects can be set in <em>limit</em> parameter.
            </p>
            <p>
Applications which have not been used will not be included in results.
            </p>
            <p>
If an attribute <em>endTime</em> from <em>filter</em> object is less than or equal to <em>startTime</em> date, an empty array will be returned.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - if any system error occurred.              </li>
              <li>
InvalidValuesError - if any of the input parameters contains an invalid value.              </li>
            </ul>
           
 *
 * @param {AppsUsageInfoArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationUsageMode} mode
 * @param {ApplicationUsageFilter} filter
 * @param {Number} limit
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsUsageInfo = function(successCallback, errorCallback, mode, filter, limit){ return; };

/**
 * Adds a listener for receiving any notification for changes in the list of installed applications on a device.
            <p>
It installs a callback that is triggered every time a change occurs on
the list of installed applications on a device. This change may
occur due to a new installation, uninstallation, or update of an application.
            </p>
            <p>
When executed, the implementation must immediately return a listener
ID that identifies the listener. After returning the ID, the change
detection operation is started asynchronously.
            </p>
            <p>
The <em>ApplicationInformationEventCallback</em> must be invoked every time a new
application is installed, removed, or updated.
            </p>
            <p>
The change detection must continue until the <em>removeAppInfoEventListener()</em> method is called
with the corresponding listener identifier.
            </p>
           
 *
 * @param {ApplicationInformationEventCallback} eventCallback
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppInfoEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppInfoEventListener = function(watchId){ return; };

/**
 * Adds a listener for receiving any notification for status changes of the installed applications on a device.
 *
 * @param {StatusEventCallback} eventCallback
 * @param {ApplicationId} appId
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppStatusChangeListener = function(eventCallback, appId){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for status changes of the installed applications on a device.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppStatusChangeListener = function(watchId){ return; };

/**
 * An attribute to store the identifier of an application for application management.
 *
 * @type ApplicationId
 */
ApplicationInformation.prototype.id = new ApplicationId();

/**
 * An attribute to store the name of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.iconPath = new String();

/**
 * An attribute to store the version of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.version = new String();

/**
 * An attribute that determines whether the application information should be shown (such as in menus).
 *
 * @type Boolean
 */
ApplicationInformation.prototype.show = new Boolean();

/**
 * An array of attributes to store the categories that the app belongs to.
 *
 * @type array
 */
ApplicationInformation.prototype.categories = new array();

/**
 * An attribute to store the application install/update time.
 *
 * @type Date
 */
ApplicationInformation.prototype.installDate = new Date();

/**
 * An attribute to store the application size (installed space).
 *
 * @type Number
 */
ApplicationInformation.prototype.size = new Number();

/**
 * An attribute to store the package ID of an application.
 *
 * @type PackageId
 */
ApplicationInformation.prototype.packageId = new PackageId();

/**
 * Called when the callee application calls .
 *
 * @param {array} data
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the callee application calls .
 *
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onfailure = function(){ return; };

/**
 * An attribute to store the name of a key.
 *
 * @type String
 */
ApplicationControlData.prototype.key = new String();

/**
 * An attribute to store the value associated with a key.
 *
 * @type array
 */
ApplicationControlData.prototype.value = new array();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf FindAppControlSuccessCallback
 * @returns {void}
 */
FindAppControlSuccessCallback.prototype.onsuccess = function(informationArray, appControl){ return; };

/**
 * Value of the system event data item.
 *
 * @type String
 */
SystemEventData.prototype.value = new String();

/**
 * Type of the system event data item.
 *
 * @type String
 */
SystemEventData.prototype.type = new String();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
ApplicationContext.prototype.id = new ApplicationContextId();

/**
 * An attribute to store the ID of an installed application.
 *
 * @type ApplicationId
 */
ApplicationContext.prototype.appId = new ApplicationId();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} batteryInfoArray
 * @type void
 * @memberOf BatteryUsageInfoArraySuccessCallback
 * @returns {void}
 */
BatteryUsageInfoArraySuccessCallback.prototype.onsuccess = function(batteryInfoArray){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf ApplicationInformationArraySuccessCallback
 * @returns {void}
 */
ApplicationInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Called when the event occurs.
 *
 * @param {EventInfo} event
 * @param {EventData} data
 * @type void
 * @memberOf EventCallback
 * @returns {void}
 */
EventCallback.prototype.onevent = function(event, data){ return; };

/**
 * An attribute to store the key of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.key = new String();

/**
 * An attribute to store the value of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.value = new String();

/**
 * An attribute to store the type of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.type = new String();

/**
 * An attribute to store the value of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.value = new String();

/**
 * An attribute to store the application information for the current application.
 *
 * @type ApplicationInformation
 */
Application.prototype.appInfo = new ApplicationInformation();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
Application.prototype.contextId = new ApplicationContextId();

/**
 * Exits the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.exit = function(){ return; };

/**
 * Hides the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.hide = function(){ return; };

/**
 * Gets the requested application control passed to the current application.
            <p>
Gets the requested application control that contains the application control
passed by the <em>launchAppControl()</em> method from the calling application.
The requested application control contains the reason the application
is launched and what it has to perform. For example, an application
might be launched to display an image on a page by another
application's request. In all of these cases, the application is
responsible for checking the contents of the application control and responding
appropriately when it is launched.
            </p>
           
 *
 * @type RequestedApplicationControl
 * @memberOf Application
 * @returns {RequestedApplicationControl}
 */
Application.prototype.getRequestedAppControl = function(){ var ret = new RequestedApplicationControl(); return ret; };

/**
 * Adds a listener which will invoke a callback function when an event occurs.
            <p>
System events do not require an application identifier to be specified. Therefore, the <var>appId</var> attribute of the <a href="#EventInfo">EventInfo</a> dictionary should not be specified when listening for system events. If it is specified, the event to listen for will be interpreted as an user event.
            </p>
           
 *
 * @param {EventInfo} event
 * @param {EventCallback} callback
 * @type Number
 * @memberOf Application
 * @returns {Number}
 */
Application.prototype.addEventListener = function(event, callback){ var ret = new Number(); return ret; };

/**
 * Removes an event listener with a specified listener identifier.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.removeEventListener = function(watchId){ return; };

/**
 * Broadcasts a user defined event to all the listeners which are listening for this event.
            <p>
An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, the <var>appId</var> attribute of the <a href="#EventInfo">EventInfo</a> dictionary must be the identifier of the application which calls this method.
            </p>
           
 *
 * @param {EventInfo} event
 * @param {UserEventData} data
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.broadcastEvent = function(event, data){ return; };

/**
 * Broadcasts a user defined event to all the trusted listeners which are listening for this event. Applications which have the same certificate as the sending application can receive the event.
            <p>
An application can listen to events from other applications. However, it can only broadcast its own events. Therefore, the <var>appId</var> attribute of the <a href="#EventInfo">EventInfo</a> dictionary must be the identifier of the application which calls this method.
            </p>
           
 *
 * @param {EventInfo} event
 * @param {UserEventData} data
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.broadcastTrustedEvent = function(event, data){ return; };

/**
 * Called when the status event occurs.
            <p>
Example of using can be find at <a href="application.html#ApplicationManager::addAppStatusChangeListener">addAppStatusChangeListener</a> code example.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {Boolean} isActive
 * @type void
 * @memberOf StatusEventCallback
 * @returns {void}
 */
StatusEventCallback.prototype.onchange = function(appId, isActive){ return; };

/**
 * An attribute to store the application control object that describes the caller application's request. It contains the information that the calling application passed to .
 *
 * @type ApplicationControl
 */
RequestedApplicationControl.prototype.appControl = new ApplicationControl();

/**
 * An attribute to store the caller application's ID.
 *
 * @type ApplicationId
 */
RequestedApplicationControl.prototype.callerAppId = new ApplicationId();

/**
 * Sends the results to the caller application.
 *
 * @param {array} data
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyResult = function(data){ return; };

/**
 * Notifies the calling application that the application failed to perform the requested action.
 *
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyFailure = function(){ return; };

/**
 * Object representing a account manager.
 *
 * @type ApplicationManager
 */
Tizen.prototype.application = new ApplicationManager();

/**
 * The ArchiveManagerObject interface defines what is instantiated in the object.
          <p>
The <em>tizen.archive</em> object allows access to the Archive API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ArchiveManagerObject}
 */
function ArchiveManagerObject() {};
ArchiveManagerObject.prototype = new Object();

/**
 * The ArchiveFile interface provides access to member files of the archive file.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFile}
 */
function ArchiveFile() {};
ArchiveFile.prototype = new Object();

/**
 * The ArchiveFileEntryArraySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntries() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntryArraySuccessCallback}
 */
function ArchiveFileEntryArraySuccessCallback() {};
ArchiveFileEntryArraySuccessCallback.prototype = new Object();

/**
 * The ArchiveFileSuccessCallback interface provides a SuccessCallback for the ArchiveManager::open() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileSuccessCallback}
 */
function ArchiveFileSuccessCallback() {};
ArchiveFileSuccessCallback.prototype = new Object();

/**
 * The ArchiveFileEntrySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntryByName() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntrySuccessCallback}
 */
function ArchiveFileEntrySuccessCallback() {};
ArchiveFileEntrySuccessCallback.prototype = new Object();

/**
 * The ArchiveManager interface provides methods for global operations related to ArchiveFile.
 *
 * @super Object
 * @constructor
 * @return {ArchiveManager}
 */
function ArchiveManager() {};
ArchiveManager.prototype = new Object();

/**
 * The ArchiveFileEntry interface provides access to ArchiveFile member information and file data.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntry}
 */
function ArchiveFileEntry() {};
ArchiveFileEntry.prototype = new Object();

/**
 * The ArchiveFileProgressCallback interface provides a ProgressCallback for ArchiveFile and ArchiveFileEntry methods.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileProgressCallback}
 */
function ArchiveFileProgressCallback() {};
ArchiveFileProgressCallback.prototype = new Object();

/**
 * Object representing an archive manager.
 *
 * @type ArchiveManager
 */
ArchiveManagerObject.prototype.archive = new ArchiveManager();

/**
 * Describes the mode the file is opened with.
 *
 * @type FileMode
 */
ArchiveFile.prototype.mode = new FileMode();

/**
 * Size of all the files included in the archive after decompression.
 * <p>
The size is <var>null</var> until the archive is opened.
            </p>
 *
 * @type Number
 */
ArchiveFile.prototype.decompressedSize = new Number();

/**
 * Adds a new member file to .
            <p>
If <em>sourceFile</em> refers to a directory,
the directory and its content will be added to ArchiveFile.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>sourceFile</em> does not exist              </li>
              <li>
IOError: If archiveFile can not be written due the lack of access permission              </li>
              <li>
InvalidModificationError: If the operation results in a name conflict in the archive<br/>i.e. two entries in the archive with the same name (including directory names).              </li>
              <li>
UnknownError: In any case of any other error              </li>
            </ul>
            <p>
Name stored for new entries is constructed from <em>sourceFile</em> according to the
<a href="#ArchiveFileEntryOptions::stripSourceDirectory">stripSourceDirectory</a> and <a href="#ArchiveFileEntryOptions::destination">destination</a> options. Names are constructed as follows:
            </p>
            <table>
              <tr>
                <th>
source file                </th>
                <th>
destination                </th>
                <th>
stripSourceDirectory                </th>
                <th>
resulting entry name                </th>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>false</var>                </td>
                <td>
subdir/second/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>true</var>                </td>
                <td>
justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>false</var>                </td>
                <td>
report3/subdir/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>true</var>                </td>
                <td>
report3/justName.ext                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} sourceFile
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {ArchiveFileEntryOptions} options
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.add = function(sourceFile, onsuccess, onerror, onprogress, options){ var ret = new Number(); return ret; };

/**
 * Extracts every file from this to a given directory.
            <p>
All extracted files will be located in the given directory.
            </p>
            <p>
The <var>overwrite</var> attribute determines whether extracted files can overwrite existing files.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
IOError: If destinationDirectory can not be written to (e.g due to insufficient permissions)              </li>
              <li>
InvalidModificationError: If during extracting it is detected that an existing file would
have to be overwritten and the <em>overwrite</em> argument is <var>false</var>              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.extractAll = function(destinationDirectory, onsuccess, onerror, onprogress, overwrite){ var ret = new Number(); return ret; };

/**
 * Retrieves information about the member files in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {ArchiveFileEntryArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntries = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Retrieves information about with the specified name in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If <em>ArchiveFileEntry</em> with the specific name does not exist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {ArchiveFileEntrySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntryByName = function(name, onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Closes the .
            <p>
Call this method when the archive file is not used any more. Once you call this method, the archive file object will not be available and any further operation attempt results in an <em>InvalidStateError</em>.<br/>Calling <em>close()</em> on an archive file object which is already closed does not raise any exception.
            </p>
           
 *
 * @type void
 * @memberOf ArchiveFile
 * @returns {void}
 */
ArchiveFile.prototype.close = function(){ return; };

/**
 * Called when all file entries in the archive file are retrieved successfully.
 *
 * @param {array} entries
 * @type void
 * @memberOf ArchiveFileEntryArraySuccessCallback
 * @returns {void}
 */
ArchiveFileEntryArraySuccessCallback.prototype.onsuccess = function(entries){ return; };

/**
 * Called when the archive file with the given name is ready to use.
 *
 * @param {ArchiveFile} archive
 * @type void
 * @memberOf ArchiveFileSuccessCallback
 * @returns {void}
 */
ArchiveFileSuccessCallback.prototype.onsuccess = function(archive){ return; };

/**
 * Called when the file with the given name through getEntryByName() is found successfully.
 *
 * @param {ArchiveFileEntry} entry
 * @type void
 * @memberOf ArchiveFileEntrySuccessCallback
 * @returns {void}
 */
ArchiveFileEntrySuccessCallback.prototype.onsuccess = function(entry){ return; };

/**
 * Opens the archive file. After this operation, it is possible to add or get files to and from the archive.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If archiveFile format is not recognized              </li>
              <li>
NotFoundError: If the <em>mode</em> is "r" and the <em>file</em> does not exist, or the <em>mode</em> is not "r" and the <em>file</em> cannot be created because the path of the file after excluding its file name does not exist              </li>
              <li>
IOError: If the access is denied due to insufficient permissions              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
            <p>
Use <em>mode</em> depending on which operation are intended:
            </p>
            <table>
              <tr>
                <th>
Mode                </th>
                <th>
Description                </th>
              </tr>
              <tr>
                <td>
r                </td>
                <td>
Use this mode for extracting or getting information about the contents of an archive file. <br/><em>file</em> must exist. If the <em>file</em> does not exist, <em>onerror</em> will be invoked (<em>NotFoundError</em>).<br/>When an archive file is opened in this mode, <em>add()</em> will not be available. (<em>IOError</em> will be thrown.)                </td>
              </tr>
              <tr>
                <td>
w                </td>
                <td>
Use this mode to create an archive file and add files to the archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, <em>onerror</em> callback will be invoked (<em>InvalidModificationError</em>). <br/>When an archive file is opened in this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
              <tr>
                <td>
rw                </td>
                <td>
Use this mode for archive zipping/unzipping. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with an empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, the existing contents are preserved.
Both adding and extracting will be available. <br/>                </td>
              </tr>
              <tr>
                <td>
a                </td>
                <td>
Use this mode to add new files to an archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists, then the previous contents of the archive file are preserved and new files can be added to the archive file.
In this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} file
 * @param {FileMode} mode
 * @param {ArchiveFileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileOptions} options
 * @type Number
 * @memberOf ArchiveManager
 * @returns {Number}
 */
ArchiveManager.prototype.open = function(file, mode, onsuccess, onerror, options){ var ret = new Number(); return ret; };

/**
 * Cancels an operation with the given identifier.
 *
 * @param {Number} operationIdentifier
 * @type void
 * @memberOf ArchiveManager
 * @returns {void}
 */
ArchiveManager.prototype.abort = function(operationIdentifier){ return; };

/**
 * Path identifying the member file of ArchiveFile. This is a full path with the directory and base name of the entry.
 *
 * @type String
 */
ArchiveFileEntry.prototype.name = new String();

/**
 * Original size of the member file [bytes].
 * <p>
If the ArchiveFileEntry member is a folder, the attribute value will be the sum of sizes of all files in this directory.
            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.size = new Number();

/**
 * Amount of storage space used by the member file, which may be compressed, in ArchiveFile [bytes].
 * <p>
If ArchiveFileEntry member is a folder, the attribute will be sum of the sizes of all files in this directory.
            </p>
 * <p>
Until a new entry is added to the archive, the compressedSize is <var>null</var>            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.compressedSize = new Number();

/**
 * Date and time stored with the member file. This is usually the modification date of the file.
 *
 * @type Date
 */
ArchiveFileEntry.prototype.modified = new Date();

/**
 * Extracts ArchiveFileEntry to the given location.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
InvalidModificationError: If the file already exists and overwriting is not allowed              </li>
              <li>
IOError: If destinationDirectory can not be written to              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} stripName
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFileEntry
 * @returns {Number}
 */
ArchiveFileEntry.prototype.extract = function(destinationDirectory, onsuccess, onerror, onprogress, stripName, overwrite){ var ret = new Number(); return ret; };

/**
 * Called to signal compressing or extracting operation progress.
 *
 * @param {Number} operationIdentifier
 * @param {Number} value
 * @param {String} filename
 * @type void
 * @memberOf ArchiveFileProgressCallback
 * @returns {void}
 */
ArchiveFileProgressCallback.prototype.onprogress = function(operationIdentifier, value, filename){ return; };

/**
 * Object representing an archive manager.
 *
 * @type ArchiveManager
 */
Tizen.prototype.archive = new ArchiveManager();

/**
 * The BadgeManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.badge object that allows accessing the functionality of the Badge API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BadgeManagerObject}
 */
function BadgeManagerObject() {};
BadgeManagerObject.prototype = new Object();

/**
 * The BadgeChangeCallback interface specifies a set of methods that are invoked every time a badge number change occurs.
 *
 * @super Object
 * @constructor
 * @return {BadgeChangeCallback}
 */
function BadgeChangeCallback() {};
BadgeChangeCallback.prototype = new Object();

/**
 * The BadgeManager interface manages Badge functionality. It provides functions for creating and updating a badge, and registering for badge change events.
 *
 * @super Object
 * @constructor
 * @return {BadgeManager}
 */
function BadgeManager() {};
BadgeManager.prototype = new Object();

/**
 * Object representing a badge manager object.
 *
 * @type BadgeManager
 */
BadgeManagerObject.prototype.badge = new BadgeManager();

/**
 * Called when the badge number of a specified application is updated.
 *
 * @param {ApplicationId} appId
 * @param {Number} count
 * @type void
 * @memberOf BadgeChangeCallback
 * @returns {void}
 */
BadgeChangeCallback.prototype.onsuccess = function(appId, count){ return; };

/**
 * Maximum length of a badge number.
 *
 * @type Number
 */
BadgeManager.prototype.maxBadgeCount = new Number();

/**
 * Sets the badge count for the designated application. Only applications with the same author signature can have their badge count modified.
 *
 * @param {ApplicationId} appId
 * @param {Number} count
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.setBadgeCount = function(appId, count){ return; };

/**
 * Gets the badge count for the designated application.
 *
 * @param {ApplicationId} appId
 * @type Number
 * @memberOf BadgeManager
 * @returns {Number}
 */
BadgeManager.prototype.getBadgeCount = function(appId){ var ret = new Number(); return ret; };

/**
 * Adds a listener to receive a notification when the badge number for the designated application changes.
 *
 * @param {array} appIdList
 * @param {BadgeChangeCallback} successCallback
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.addChangeListener = function(appIdList, successCallback){ return; };

/**
 * Unsubscribes from receiving notifications for badge number changes.
            <p>
Nothing will be done for app ids which do not have any registered listeners.
            </p>
           
 *
 * @param {array} appIdList
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.removeChangeListener = function(appIdList){ return; };

/**
 * Object representing a badge manager object.
 *
 * @type BadgeManager
 */
Tizen.prototype.badge = new BadgeManager();

/**
 * The BluetoothClass interface represents Bluetooth Class of Device/Service(CoD).
          <p>
Bluetooth device class describes the characteristics and capabilities of a device.
          </p>
          <p>
Bluetooth CoD is a 24-bit integer created by the union of three components:
          </p>
          <ul>
            <li>
Exactly one <b>Major Device Class</b> (bits 8-12 of CoD) - This is the highest level of granularity for defining a Bluetooth Device.            </li>
            <li>
Exactly one <b>Minor Device Class</b> (bits 2-7 of CoD) - This is to be interpreted only in the context of the Major Device Class. Thus, the meaning of these bits may change, depending on the value of "Major Device Class".            </li>
            <li>
Zero or more <b>Major Service Classes</b> (bits 13-23) - Represents the services supported by the device.            </li>
          </ul>
          <p>
The Major and Minor classes are intended to define a general family of devices with which any particular implementation wishes to be associated.
No assumptions should be made about specific functionality or characteristics of any application, based solely on the assignment of a Major or minor device class.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothClass}
 */
function BluetoothClass() {};
BluetoothClass.prototype = new Object();

/**
 * The BluetoothDeviceSuccessCallback interface implements the success callback and .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceSuccessCallback}
 */
function BluetoothDeviceSuccessCallback() {};
BluetoothDeviceSuccessCallback.prototype = new Object();

/**
 * The BluetoothManager interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {BluetoothManager}
 */
function BluetoothManager() {};
BluetoothManager.prototype = new Object();

/**
 * The BluetoothSocketSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocketSuccessCallback}
 */
function BluetoothSocketSuccessCallback() {};
BluetoothSocketSuccessCallback.prototype = new Object();

/**
 * The BluetoothLEAdapter interface provides access to control the device's Bluetooth Low Energy adapter.
          <p>
This interface offers methods to control local Bluetooth Low Energy behavior, such as:
          </p>
          <ul>
            <li>
Scanning and Advertising for remote devices            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEAdapter}
 */
function BluetoothLEAdapter() {};
BluetoothLEAdapter.prototype = new Object();

/**
 * A subclass representing GATT characteristic used to construct a service of the local Bluetooth GATT server. It extends with permissions and methods implementing interactions of the characteristic with remote clients.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTServerCharacteristic}
 */
function BluetoothGATTServerCharacteristic() {};
BluetoothGATTServerCharacteristic.prototype = new BluetoothGATTCharacteristic();

/**
 * The BluetoothLEAdvertiseData interface is an advertise or scan response data container for Bluetooth advertising.
          <p>
The BluetoothLEAdvertiseData container for Bluetooth LE advertising.
This represents the data to be advertised as well as the scan response data for active scans.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEAdvertiseData}
 */
function BluetoothLEAdvertiseData() {};
BluetoothLEAdvertiseData.prototype = new Object();

/**
 * The class representing a Bluetooth GATT service provided by the local GATT server.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTServerService}
 */
function BluetoothGATTServerService() {};
BluetoothGATTServerService.prototype = new BluetoothGATTService();

/**
 * The BluetoothHealthApplication interface represents the Bluetooth health application.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthApplication}
 */
function BluetoothHealthApplication() {};
BluetoothHealthApplication.prototype = new Object();

/**
 * The BluetoothAdapterChangeCallback interface specifies a set of methods to be invoked when the changes of Bluetooth adapter occur.
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapterChangeCallback}
 */
function BluetoothAdapterChangeCallback() {};
BluetoothAdapterChangeCallback.prototype = new Object();

/**
 * The BluetoothDevice interface represents a remote Bluetooth device.
          <p>
A <em>BluetoothDevice</em> object can be retrieved using one of the following APIs:
          </p>
          <ul>
            <li>
BluetoothAdapter.getDevice()            </li>
            <li>
BluetoothAdapter.getKnownDevices()            </li>
            <li>
BluetoothAdapter.discoverDevices()            </li>
            <li>
BluetoothAdapter.createBonding()            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothDevice}
 */
function BluetoothDevice() {};
BluetoothDevice.prototype = new Object();

/**
 * Bluetooth advertising process interface that defines the success callback for
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEAdvertiseCallback}
 */
function BluetoothLEAdvertiseCallback() {};
BluetoothLEAdvertiseCallback.prototype = new Object();

/**
 * The ConnectionMtuCallback interface implements the callback for .
 *
 * @super Object
 * @constructor
 * @return {ConnectionMtuCallback}
 */
function ConnectionMtuCallback() {};
ConnectionMtuCallback.prototype = new Object();

/**
 * The BluetoothClassDeviceMinor interface holds the identifiers for minor device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMinor}
 */
function BluetoothClassDeviceMinor() {};
BluetoothClassDeviceMinor.prototype = new Object();

/**
 * Representation of the local GATT server's response to request read/write to characteristic/descriptor.
 *
 * @super Object
 * @constructor
 * @return {GATTRequestReply}
 */
function GATTRequestReply() {};
GATTRequestReply.prototype = new Object();

/**
 * The WriteValueRequestCallback interface implements the callback for , , and .
 *
 * @super Object
 * @constructor
 * @return {WriteValueRequestCallback}
 */
function WriteValueRequestCallback() {};
WriteValueRequestCallback.prototype = new Object();

/**
 * Bluetooth Low Energy service. The service can be retrieved with BluetoothLEDevice::getService().
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTService}
 */
function BluetoothGATTService() {};
BluetoothGATTService.prototype = new Object();

/**
 * The BluetoothClassDeviceService interface holds identifiers for the major service classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceService}
 */
function BluetoothClassDeviceService() {};
BluetoothClassDeviceService.prototype = new Object();

/**
 * The BluetoothSocket interface represents the Bluetooth socket.
          <p>
The socket object is created by <em>BluetoothDevice.connectToServiceByUUID()</em> or <em>BluetoothAdapter.registerRFCOMMServiceByUUID()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocket}
 */
function BluetoothSocket() {};
BluetoothSocket.prototype = new Object();

/**
 * A characteristic provided by Bluetooth Low Energy service.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTCharacteristic}
 */
function BluetoothGATTCharacteristic() {};
BluetoothGATTCharacteristic.prototype = new Object();

/**
 * The BluetoothDiscoverDevicesSuccessCallback interface that defines the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDiscoverDevicesSuccessCallback}
 */
function BluetoothDiscoverDevicesSuccessCallback() {};
BluetoothDiscoverDevicesSuccessCallback.prototype = new Object();

/**
 * The BluetoothManagerObject interface defines what is instantiated by the object from the Tizen platform.
          <p>
The <em>tizen.bluetooth</em> object allows access to the Bluetooth API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothManagerObject}
 */
function BluetoothManagerObject() {};
BluetoothManagerObject.prototype = new Object();

/**
 * The BluetoothServiceHandler interface provides methods to handle Bluetooth service.
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceHandler}
 */
function BluetoothServiceHandler() {};
BluetoothServiceHandler.prototype = new Object();

/**
 * The BluetoothLEDevice interface represents a remote Bluetooth LE device.
          <p>
A <em>BluetoothLEDevice</em> object can be retrieved by using one of the following APIs:
          </p>
          <ul>
            <li>
BluetoothLEAdapter.startScan()            </li>
            <li>
BluetoothLEConnectChangeCallback() passed to BluetoothGATTServer.registerClientConnectedCallback()            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEDevice}
 */
function BluetoothLEDevice() {};
BluetoothLEDevice.prototype = new Object();

/**
 * The BluetoothClassDeviceMajor interface holds the identifiers for major device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMajor}
 */
function BluetoothClassDeviceMajor() {};
BluetoothClassDeviceMajor.prototype = new Object();

/**
 * This interface represents the handler of Bluetooth health device profile. The BluetoothHealthProfileHandler object is created by .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthProfileHandler}
 */
function BluetoothHealthProfileHandler() {};
BluetoothHealthProfileHandler.prototype = new BluetoothProfileHandler();

/**
 * The ReadValueRequestCallback interface implements the callback for , , and .
 *
 * @super Object
 * @constructor
 * @return {ReadValueRequestCallback}
 */
function ReadValueRequestCallback() {};
ReadValueRequestCallback.prototype = new Object();

/**
 * A subclass representing GATT descriptors of characteristics registered in services of the local server. It extends with permissions and methods implementing interactions of the descriptor with remote clients.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTServerDescriptor}
 */
function BluetoothGATTServerDescriptor() {};
BluetoothGATTServerDescriptor.prototype = new BluetoothGATTDescriptor();

/**
 * The BluetoothHealthChannel interface represents the Bluetooth health channel.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannel}
 */
function BluetoothHealthChannel() {};
BluetoothHealthChannel.prototype = new Object();

/**
 * The BluetoothDeviceArraySuccessCallback interface that defines the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceArraySuccessCallback}
 */
function BluetoothDeviceArraySuccessCallback() {};
BluetoothDeviceArraySuccessCallback.prototype = new Object();

/**
 * The BluetoothProfileHandler interface represents the Bluetooth profile handler.
 *
 * @super Object
 * @constructor
 * @return {BluetoothProfileHandler}
 */
function BluetoothProfileHandler() {};
BluetoothProfileHandler.prototype = new Object();

/**
 * The BluetoothServiceSuccessCallback interface implements the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceSuccessCallback}
 */
function BluetoothServiceSuccessCallback() {};
BluetoothServiceSuccessCallback.prototype = new Object();

/**
 * The BluetoothGATTServer interface provides access to control the local GATT server: starting and stopping it, registering and unregistering local GATT services, and getting the ATT MTU (Attribute Protocol Maximum Transmission Unit) values.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTServer}
 */
function BluetoothGATTServer() {};
BluetoothGATTServer.prototype = new Object();

/**
 * The BluetoothLEManufacturerData interface is a manufacturer specific data container for an advertise or scan response data.
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEManufacturerData}
 */
function BluetoothLEManufacturerData() {};
BluetoothLEManufacturerData.prototype = new Object();

/**
 * The BluetoothHealthChannelChangeCallback interface specifies a set of methods to be invoked when the changes of heath channel occur.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannelChangeCallback}
 */
function BluetoothHealthChannelChangeCallback() {};
BluetoothHealthChannelChangeCallback.prototype = new Object();

/**
 * Bluetooth Low Energy descriptor.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTDescriptor}
 */
function BluetoothGATTDescriptor() {};
BluetoothGATTDescriptor.prototype = new Object();

/**
 * The BluetoothLEServiceData interface is a service specific data container of Bluetooth LE device.
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEServiceData}
 */
function BluetoothLEServiceData() {};
BluetoothLEServiceData.prototype = new Object();

/**
 * The BluetoothAdapter interface provides access to control the device's Bluetooth adapter.
          <p>
This interface offers methods to control local Bluetooth behavior, such as:
          </p>
          <ul>
            <li>
Scanning for remote devices            </li>
            <li>
Accessing known devices            </li>
            <li>
Registering a service in the device service database            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapter}
 */
function BluetoothAdapter() {};
BluetoothAdapter.prototype = new Object();

/**
 * Bluetooth scanning process interface that defines the success callback for
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEScanCallback}
 */
function BluetoothLEScanCallback() {};
BluetoothLEScanCallback.prototype = new Object();

/**
 * The BluetoothHealthApplicationSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthApplicationSuccessCallback}
 */
function BluetoothHealthApplicationSuccessCallback() {};
BluetoothHealthApplicationSuccessCallback.prototype = new Object();

/**
 * Bluetooth LE connecting process interface that defines callbacks for getting notified about changes of connect to a specific LE based service on a remote Bluetooth LE device.
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEConnectChangeCallback}
 */
function BluetoothLEConnectChangeCallback() {};
BluetoothLEConnectChangeCallback.prototype = new Object();

/**
 * The NotificationCallback interface implements the success callback for .
 *
 * @super Object
 * @constructor
 * @return {NotificationCallback}
 */
function NotificationCallback() {};
NotificationCallback.prototype = new Object();

/**
 * The BluetoothHealthChannelSuccessCallback interface that defines the success method for and the event callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannelSuccessCallback}
 */
function BluetoothHealthChannelSuccessCallback() {};
BluetoothHealthChannelSuccessCallback.prototype = new Object();

/**
 * The ReadValueSuccessCallback interface implements the callback for and methods.
 *
 * @super Object
 * @constructor
 * @return {ReadValueSuccessCallback}
 */
function ReadValueSuccessCallback() {};
ReadValueSuccessCallback.prototype = new Object();

/**
 * The major device class.
 * <p>
The <em>BluetoothClassDeviceMajor</em> interface contains the list of known values.
            </p>
 *
 * @type octet
 */
BluetoothClass.prototype.major = new octet();

/**
 * The minor device class.
 * <p>
The <em>BluetoothClassDeviceMinor</em> interface contains the list of known values.
            </p>
 *
 * @type octet
 */
BluetoothClass.prototype.minor = new octet();

/**
 * The services provided by this device and it refers to the interface for the list of possible values.
 *
 * @type array
 */
BluetoothClass.prototype.services = new array();

/**
 * Checks whether the given service exists in the .
 *
 * @param {Number} service
 * @type Boolean
 * @memberOf BluetoothClass
 * @returns {Boolean}
 */
BluetoothClass.prototype.hasService = function(service){ var ret = new Boolean(); return ret; };

/**
 * Called on success.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDeviceSuccessCallback
 * @returns {void}
 */
BluetoothDeviceSuccessCallback.prototype.onsuccess = function(device){ return; };

/**
 * The base for 128-bit representation of 16-bit and 32-bit UUIDs.
 *
 * @type String
 */
BluetoothManager.BASE_UUID = new Number();

/**
 * The major device class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMajor
 */
BluetoothManager.prototype.deviceMajor = new BluetoothClassDeviceMajor();

/**
 * The minor device class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMinor
 */
BluetoothManager.prototype.deviceMinor = new BluetoothClassDeviceMinor();

/**
 * The major service class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceService
 */
BluetoothManager.prototype.deviceService = new BluetoothClassDeviceService();

/**
 * Gets the default local Bluetooth adapter.
 *
 * @type BluetoothAdapter
 * @memberOf BluetoothManager
 * @returns {BluetoothAdapter}
 */
BluetoothManager.prototype.getDefaultAdapter = function(){ var ret = new BluetoothAdapter(); return ret; };

/**
 * Gets the default Low Energy Bluetooth adapter.
 *
 * @type BluetoothLEAdapter
 * @memberOf BluetoothManager
 * @returns {BluetoothLEAdapter}
 */
BluetoothManager.prototype.getLEAdapter = function(){ var ret = new BluetoothLEAdapter(); return ret; };

/**
 * Gets the BluetoothGATTServer object, which allows starting, stopping the local GATT server, and configuring its services.
 *
 * @type BluetoothGATTServer
 * @memberOf BluetoothManager
 * @returns {BluetoothGATTServer}
 */
BluetoothManager.prototype.getGATTServer = function(){ var ret = new BluetoothGATTServer(); return ret; };

/**
 * Converts given data to byte array.
            <p>
If given parameter is of type <em>DOMSting</em> the string should consist of hexadecimal characters only (A-F, a-f, 0-9). If the string's length is odd, the last character will be omitted. Only exception is string containing single zero, in which case [0] is returned.
The string may start without or with one of below prefixes:
            </p>
            <ul>
              <li>
"0x",              </li>
              <li>
"0X".              </li>
            </ul>
           
 *
 * @param {Bytes} data
 * @type array
 * @memberOf BluetoothManager
 * @returns {array}
 */
BluetoothManager.prototype.toByteArray = function(data){ var ret = new array(); return ret; };

/**
 * Converts given data to DOMString.
 *
 * @param {Bytes} data
 * @type String
 * @memberOf BluetoothManager
 * @returns {String}
 */
BluetoothManager.prototype.toDOMString = function(data){ var ret = new String(); return ret; };

/**
 * Converts given data to Uint8Array.
            <p>
If given parameter is of type <em>DOMSting</em> the string should consist of hexadecimal characters only (A-F, a-f, 0-9). If the string's length is odd, the last character will be omitted. Only exception is string containing single zero, in which case Uint8Array([0]) is returned.
The string may start without or with one of below prefixes:
            </p>
            <ul>
              <li>
"0x",              </li>
              <li>
"0X".              </li>
            </ul>
           
 *
 * @param {Bytes} data
 * @type Uint8Array
 * @memberOf BluetoothManager
 * @returns {Uint8Array}
 */
BluetoothManager.prototype.toUint8Array = function(data){ var ret = [new Uint8()]; return ret; };

/**
 * Converts given UUID to 128 bit representation.
 *
 * @param {BluetoothUUID} uuid
 * @type BluetoothUUID
 * @memberOf BluetoothManager
 * @returns {BluetoothUUID}
 */
BluetoothManager.prototype.uuidTo128bit = function(uuid){ var ret = new BluetoothUUID(); return ret; };

/**
 * Converts given UUID to the shortest format, in which it can be expressed.
            <p>
This function attempts to return the possible shortest UUID with the following priority:
1. 16 bit
2. 32 bit
3. 128 bit
            </p>
           
 *
 * @param {BluetoothUUID} uuid
 * @type BluetoothUUID
 * @memberOf BluetoothManager
 * @returns {BluetoothUUID}
 */
BluetoothManager.prototype.uuidToShortestPossible = function(uuid){ var ret = new BluetoothUUID(); return ret; };

/**
 * Checks if given parameters are representations of the same UUID.
 *
 * @param {BluetoothUUID} uuid1
 * @param {BluetoothUUID} uuid2
 * @type Boolean
 * @memberOf BluetoothManager
 * @returns {Boolean}
 */
BluetoothManager.prototype.uuidsEqual = function(uuid1, uuid2){ var ret = new Boolean(); return ret; };

/**
 * Called when the connection to a service is ready.
 *
 * @param {BluetoothSocket} socket
 * @type void
 * @memberOf BluetoothSocketSuccessCallback
 * @returns {void}
 */
BluetoothSocketSuccessCallback.prototype.onsuccess = function(socket){ return; };

/**
 * Starts scanning for Low Energy advertisement.
            <p>
There is no time limit for the bluetooth Low Energy scanning process. It can be canceled only by calling the <em>stopScan()</em> method in the <em>BluetoothLEAdapter</em> interface.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothLEScanCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.startScan = function(successCallback, errorCallback){ return; };

/**
 * Stops scanning for Low Energy advertisement.
 *
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.stopScan = function(){ return; };

/**
 * Checks if scanning for Bluetooth Low Energy devices is currently in progress.
 *
 * @type Boolean
 * @memberOf BluetoothLEAdapter
 * @returns {Boolean}
 */
BluetoothLEAdapter.prototype.isScanning = function(){ var ret = new Boolean(); return ret; };

/**
 * Starts advertising for Low Energy Devices.
            <p>
A advertising process can be canceled anytime, by calling <em>stopAdvertise()</em> on the <em>BluetoothLEAdapter</em>.
            </p>
           
 *
 * @param {BluetoothLEAdvertiseData} advertiseData
 * @param {BluetoothAdvertisePacketType} packetType
 * @param {BluetoothLEAdvertiseCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {BluetoothAdvertisingMode} mode
 * @param {Boolean} connectable
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.startAdvertise = function(advertiseData, packetType, successCallback, errorCallback, mode, connectable){ return; };

/**
 * Stops advertising for Low Energy Devices.
 *
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.stopAdvertise = function(){ return; };

/**
 * Registers a listener that is called whenever a GATT connection with another device is established or terminated.
            <p>
The <a href="#BluetoothLEConnectChangeCallback">BluetoothLEConnectChangeCallback</a>, registered with this function, is called in the following cases:
            </p>
            <ul>
              <li>
When the connection between a remote client and a local GATT server is established or terminated.              </li>
              <li>
When the connection between a local client and a remote GATT server is established or terminated.              </li>
            </ul>
           
 *
 * @param {BluetoothLEConnectChangeCallback} listener
 * @type Number
 * @memberOf BluetoothLEAdapter
 * @returns {Number}
 */
BluetoothLEAdapter.prototype.addConnectStateChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters a listener called whenever a GATT connection with another device is established or terminated.
            <p>
This function unregisters a <a href="#BluetoothLEConnectChangeCallback">BluetoothLEConnectChangeCallback</a> registered with <a href="#BluetoothLEAdapter::addConnectStateChangeListener">BluetoothLEAdapter.addConnectStateChangeListener()</a> method.
            </p>
           
 *
 * @param {Number} watchID
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.removeConnectStateChangeListener = function(watchID){ return; };

/**
 * Indicates if clients have the permission to read the value of the characteristic.
 *
 * @type Boolean
 */
BluetoothGATTServerCharacteristic.prototype.readPermission = new Boolean();

/**
 * Indicates if clients have the permission to write the value of the characteristic.
 *
 * @type Boolean
 */
BluetoothGATTServerCharacteristic.prototype.writePermission = new Boolean();

/**
 * Indicates if clients have the permission to read the value of the characteristic through encrypted connections.
 *
 * @type Boolean
 */
BluetoothGATTServerCharacteristic.prototype.encryptedReadPermission = new Boolean();

/**
 * Indicates if clients have the permission to write the value of the characteristic through encrypted connections.
 *
 * @type Boolean
 */
BluetoothGATTServerCharacteristic.prototype.encryptedWritePermission = new Boolean();

/**
 * Indicates if clients have the permission to perform signed reads of the characteristic's value.
 *
 * @type Boolean
 */
BluetoothGATTServerCharacteristic.prototype.encryptedSignedReadPermission = new Boolean();

/**
 * Indicates if clients have the permission to perform signed writes of the characteristic's value.
 *
 * @type Boolean
 */
BluetoothGATTServerCharacteristic.prototype.encryptedSignedWritePermission = new Boolean();

/**
 * Notifies the clients of the local GATT server of the changes in the characteristic.
            <p>
This function sends a BLE notification or indication about a change of characteristic's value to clients that registered for it. If a particular client is specified, only he gets the update.
Otherwise it is sent to all clients connected to the local GATT server, who registered for the updates.<br/>            </p>
            <p>
Clients can only register for characteristic's notifications or indications, if the characteristic defines a Client Characteristic Configuration Descriptor (CCCD), as described in the Bluetooth standard.
CCCD has to be defined as any other descriptor, using <a href="#BluetoothGATTServerDescriptorInit">BluetoothGATTServerDescriptorInit</a>.
            </p>
           
 *
 * @param {Bytes} value
 * @param {BluetoothAddress} clientAddress
 * @param {NotificationCallback} notificationCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServerCharacteristic
 * @returns {void}
 */
BluetoothGATTServerCharacteristic.prototype.notifyAboutValueChange = function(value, clientAddress, notificationCallback, errorCallback){ return; };

/**
 * Registers the callback called when a client reads the value of the characteristic from the local GATT server.
            <p>
The callback, registered with this function, is called when a remote client requests to read the value of the characteristic.
The server can respond to such requests by returning a <a href="#GATTRequestReply">GATTRequestReply</a> object from the callback.
If <a href="#ReadValueRequestCallback">ReadValueRequestCallback</a> for the characteristic is not registered, or it does not return a <a href="#GATTRequestReply">GATTRequestReply</a>, clients will not be able to get the value of this characteristic.<br/>            </p>
            <p>
A callback set with this function overwrites any previously set <a href="#ReadValueRequestCallback">ReadValueRequestCallback</a>.
            </p>
            <p>
The <em>errorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
            <p>
The <em>sendResponseErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 InvalidValuesError - If <em>GATTRequestReply::statusCode</em> or <em>GATTRequestReply::data</em> is invalid.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ReadValueRequestCallback} readValueRequestCallback
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SuccessCallback} sendResponseSuccessCallback
 * @param {ErrorCallback} sendResponseErrorCallback
 * @type void
 * @memberOf BluetoothGATTServerCharacteristic
 * @returns {void}
 */
BluetoothGATTServerCharacteristic.prototype.setReadValueRequestCallback = function(readValueRequestCallback, successCallback, errorCallback, sendResponseSuccessCallback, sendResponseErrorCallback){ return; };

/**
 * Registers the callback called when a client writes the value of the characteristic of the local GATT server.
            <p>
The callback, registered with this function, is called when a remote client requests to write the value of the characteristic.
The server can respond to such requests by returning a <a href="#GATTRequestReply">GATTRequestReply</a> object from the callback.
If <a href="#WriteValueRequestCallback">WriteValueRequestCallback</a> for the characteristic is not registered, or it does not return a <a href="#GATTRequestReply">GATTRequestReply</a>, clients will not be able to get the value of this characteristic.<br/>            </p>
            <p>
A callback set with this function overwrites any previously set <a href="#WriteValueRequestCallback">WriteValueRequestCallback</a>.
            </p>
            <p>
The <em>errorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
            <p>
The <em>sendResponseErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 InvalidValuesError - If <em>GATTRequestReply::statusCode</em> or <em>GATTRequestReply::data</em> is invalid.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {WriteValueRequestCallback} writeValueRequestCallback
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SuccessCallback} sendResponseSuccessCallback
 * @param {ErrorCallback} sendResponseErrorCallback
 * @type void
 * @memberOf BluetoothGATTServerCharacteristic
 * @returns {void}
 */
BluetoothGATTServerCharacteristic.prototype.setWriteValueRequestCallback = function(writeValueRequestCallback, successCallback, errorCallback, sendResponseSuccessCallback, sendResponseErrorCallback){ return; };

/**
 * The flag indicating whether the device name should be included in advertise or scan response data. If attribute is set to null, The default value is set to a false.
 *
 * @type Boolean
 */
BluetoothLEAdvertiseData.prototype.includeName = new Boolean();

/**
 * The service UUIDs for advertise or scan response data.
 * <p>
UUIDs may be advertised in another formats than passed in <em>uuids</em>. The following conversions are applied:
            </p>
 * <ul>
 * <li>16-bit values are advertised as 16-bit UUIDs
 * <li>128-bit values, that have 16-bit equivalent UUIDs described in , are advertised as 16-bit UUIDs
 * <li>in any other case, UUIDs are advertised in 128-bit format
 * </ul>
 *
 * @type array
 */
BluetoothLEAdvertiseData.prototype.uuids = new array();

/**
 * The service solicitation UUIDs for advertise or scan response data.
 * <p>
UUIDs may be advertised in another formats than passed in <em>solicitationuuids</em>. The following conversions are applied:
            </p>
 * <ul>
 * <li>16-bit values are advertised as 16-bit UUIDs
 * <li>128-bit values, that have 16-bit equivalent UUIDs described in , are advertised as 16-bit UUIDs
 * <li>in any other case, UUIDs are advertised in 128-bit format
 * </ul>
 *
 * @type array
 */
BluetoothLEAdvertiseData.prototype.solicitationuuids = new array();

/**
 * The external appearance of this device for advertise or scan response data.
 * <p>
See the <a href="https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.gap.appearance.xml">list of appearance codes</a> for sample values.
            </p>
 *
 * @type Number
 */
BluetoothLEAdvertiseData.prototype.appearance = new Number();

/**
 * The transmission power level should be included in advertise or scan response data. If attribute is set to null, The default value is set to a false.
 *
 * @type Boolean
 */
BluetoothLEAdvertiseData.prototype.includeTxPowerLevel = new Boolean();

/**
 * The array of objects representing service data for advertise.
 *
 * @type array
 */
BluetoothLEAdvertiseData.prototype.servicesData = new array();

/**
 * The service data for advertise or scan response data.
 *
 * @type BluetoothLEServiceData
 */
BluetoothLEAdvertiseData.prototype.serviceData = new BluetoothLEServiceData();

/**
 * The manufacturer specific data for advertise or scan response data.
 *
 * @type BluetoothLEManufacturerData
 */
BluetoothLEAdvertiseData.prototype.manufacturerData = new BluetoothLEManufacturerData();

/**
 * Flag indicating whether the service is primary or secondary.
 *
 * @type Boolean
 */
BluetoothGATTServerService.prototype.isPrimary = new Boolean();

/**
 * Unregisters the service and all its characteristics from the local GATT server.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidStateError - If the service cannot be unregistered in the current state of the GATT server.              </li>
              <li>
 AbortError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServerService
 * @returns {void}
 */
BluetoothGATTServerService.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * The MDEP data type used for communication, which is referenced in the ISO/IEEE 11073-20601 spec.
 * <p>
For example, pulse oximeter is 4100 and blood pressure monitor is 4103.  See <a href="#BluetoothHealthApplication::onconnect">example</a>.
            </p>
 *
 * @type Number
 */
BluetoothHealthApplication.prototype.dataType = new Number();

/**
 * The friendly name associated with sink application. See .
 *
 * @type String
 */
BluetoothHealthApplication.prototype.name = new String();

/**
 * Called when a health device is connected successfully through this application.
 * <p>
By default, this attribute is set to null.
            </p>
 *
 * @type BluetoothHealthChannelSuccessCallback
 */
BluetoothHealthApplication.prototype.onconnect = new BluetoothHealthChannelSuccessCallback();

/**
 * Unregisters this application.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthApplication
 * @returns {void}
 */
BluetoothHealthApplication.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * Called when the power state is changed.
 *
 * @param {Boolean} powered
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onstatechanged = function(powered){ return; };

/**
 * Called when the name is changed.
 *
 * @param {String} name
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onnamechanged = function(name){ return; };

/**
 * Called when the visibility is changed.
 *
 * @param {Boolean} visible
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onvisibilitychanged = function(visible){ return; };

/**
 * The readable name of this remote device.
 *
 * @type String
 */
BluetoothDevice.prototype.name = new String();

/**
 * The hardware address of this remote device.
 *
 * @type BluetoothAddress
 */
BluetoothDevice.prototype.address = new BluetoothAddress();

/**
 * The device class, which represents the type of the device and the services it provides.
 *
 * @type BluetoothClass
 */
BluetoothDevice.prototype.deviceClass = new BluetoothClass();

/**
 * The bond state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isBonded = new Boolean();

/**
 * The flag indicating whether the local device recognizes this remote device as a trusted device or not.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isTrusted = new Boolean();

/**
 * The flag indicating whether the connection state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isConnected = new Boolean();

/**
 * The list of 128-bit service UUIDs available on this remote device.
 *
 * @type array
 */
BluetoothDevice.prototype.uuids = new array();

/**
 * Connects to a specified service identified by on this remote device.
            <p>
If opening a connection is successful, then a <em>BluetoothSocket</em> object with open state is sent using <em>successCallback</em>, through which data can be exchanged by both devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If there is no service with the specified <em>uuid</em>              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {BluetoothSocketSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothDevice
 * @returns {void}
 */
BluetoothDevice.prototype.connectToServiceByUUID = function(uuid, successCallback, errorCallback){ return; };

/**
 * Called when the advertising state is changed.
 *
 * @param {BluetoothAdvertisingState} state
 * @type void
 * @memberOf BluetoothLEAdvertiseCallback
 * @returns {void}
 */
BluetoothLEAdvertiseCallback.prototype.onstate = function(state){ return; };

/**
 * Called when the requested ATT MTU size for a connection is ready.
 *
 * @param {Number} mtu
 * @type void
 * @memberOf ConnectionMtuCallback
 * @returns {void}
 */
ConnectionMtuCallback.prototype.onsuccess = function(mtu){ return; };

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_DESKTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_SERVER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_LAPTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_HANDHELD_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_PALM_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CELLULAR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CORDLESS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_SMARTPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_MODEM_OR_GATEWAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_ISDN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_UNRECOGNIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_WEARABLE_HEADSET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HANDSFREE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MICROPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HEADPHONES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_PORTABLE_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAR_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_SETTOP_BOX = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HIFI = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VCR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAMCORDER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_DISPLAY_AND_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CONFERENCING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_GAMING_TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD_AND_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_JOYSTICK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_GAMEPAD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_REMOTE_CONTROL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_SENSING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DEGITIZER_TABLET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_CARD_READER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DIGITAL_PEN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_INPUT_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_PRINTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_WRITST_WATCH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_PAGER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_JACKET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_HELMET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_GLASSES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_ROBOT = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_VEHICLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_DOLL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_CONTROLLER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_GAME = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_UNDEFINED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BLOOD_PRESSURE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_THERMOMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_WEIGHING_SCALE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_GLUCOSE_METER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_OXIMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_RATE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_DATA_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_STEP_COUNTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BODY_COMPOSITION_ANALYZER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PEAK_FLOW_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_MEDICATION_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_KNEE_PROSTHESIS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_ANKLE_PROSTHESIS = new Number();

/**
 * Reply status code.
 *
 * @type Number
 */
GATTRequestReply.prototype.statusCode = new Number();

/**
 * Response data. It is only relevant for read value requests. It will be ignored in replies to write requests and thus can be uninitialized in such replies.
 *
 * @type Bytes
 */
GATTRequestReply.prototype.data = new Bytes();

/**
 * Called when a client connected to the local GATT server requests characteristic's value write.
            <p>
The server should reply to requests by returning a <a href="#GATTRequestReply">GATTRequestReply</a> object with a status code.
If the callback does not return a <a href="#GATTRequestReply">GATTRequestReply</a>, the client will not receive a response.
            </p>
           
 *
 * @param {BluetoothAddress} clientAddress
 * @param {array} value
 * @param {Number} offset
 * @param {Boolean} replyRequired
 * @type GATTRequestReply
 * @memberOf WriteValueRequestCallback
 * @returns {GATTRequestReply}
 */
WriteValueRequestCallback.prototype.onwriterequest = function(clientAddress, value, offset, replyRequired){ var ret = new GATTRequestReply(); return ret; };

/**
 * UUID of the service.
 *
 * @type BluetoothUUID
 */
BluetoothGATTService.prototype.uuid = new BluetoothUUID();

/**
 * UUID of the service.
 *
 * @type BluetoothUUID
 */
BluetoothGATTService.prototype.serviceUuid = new BluetoothUUID();

/**
 * A list of services included in this service.
 *
 * @type array
 */
BluetoothGATTService.prototype.services = new array();

/**
 * A list of characteristics in this service.
 *
 * @type array
 */
BluetoothGATTService.prototype.characteristics = new array();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.LIMITED_DISCOVERABILITY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.POSITIONING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.NETWORKING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.RENDERING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.CAPTURING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.OBJECT_TRANSFER = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.AUDIO = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.TELEPHONY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.INFORMATION = new Number();

/**
 * The service UUID to which this socket is connected.
 *
 * @type BluetoothUUID
 */
BluetoothSocket.prototype.uuid = new BluetoothUUID();

/**
 * The socket state.
 *
 * @type BluetoothSocketState
 */
BluetoothSocket.prototype.state = new BluetoothSocketState();

/**
 * The peer device to which this socket is connected.
 *
 * @type BluetoothDevice
 */
BluetoothSocket.prototype.peer = new BluetoothDevice();

/**
 * Called when an incoming message is received successfully from the peer. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onmessage = new SuccessCallback();

/**
 * Called when the socket is closed successfully. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onclose = new SuccessCallback();

/**
 * Writes data as a sequence of bytes onto the socket and returns the number of bytes actually written.
 *
 * @param {Bytes} data
 * @type Number
 * @memberOf BluetoothSocket
 * @returns {Number}
 */
BluetoothSocket.prototype.writeData = function(data){ var ret = new Number(); return ret; };

/**
 * Reads data from the socket.
            <p>
This method should be called only in the <em>BluetoothSocket.onmessage</em> handler, that is, when data is ready on the socket.
            </p>
           
 *
 * @type array
 * @memberOf BluetoothSocket
 * @returns {array}
 */
BluetoothSocket.prototype.readData = function(){ var ret = new array(); return ret; };

/**
 * Closes the socket.
            <p>
<b>BluetoothSocket.state</b> changes to <var>CLOSED</var>, and <em>BluetoothSocket.onclose()</em> is invoked on success.
            </p>
           
 *
 * @type void
 * @memberOf BluetoothSocket
 * @returns {void}
 */
BluetoothSocket.prototype.close = function(){ return; };

/**
 * A list of descriptors in this characteristic.
 *
 * @type array
 */
BluetoothGATTCharacteristic.prototype.descriptors = new array();

/**
 * Indicates if the characteristic is broadcastable.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isBroadcast = new Boolean();

/**
 * Indicates if the characteristic has extended properties.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.hasExtendedProperties = new Boolean();

/**
 * Indicates if the characteristic supports notification.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isNotify = new Boolean();

/**
 * Indicates if the characteristic supports indication.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isIndication = new Boolean();

/**
 * Indicates if the characteristic is readable.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isReadable = new Boolean();

/**
 * Indicates if the characteristic supports write with the signature.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isSignedWrite = new Boolean();

/**
 * Indicates if the characteristic is writable.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isWritable = new Boolean();

/**
 * Indicates if the characteristic supports writing without response.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isWriteNoResponse = new Boolean();

/**
 * UUID of the characteristic.
 *
 * @type BluetoothUUID
 */
BluetoothGATTCharacteristic.prototype.uuid = new BluetoothUUID();

/**
 * Reads the characteristic value from the remote device. Updates characteristic value attribute.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {ReadValueSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTCharacteristic
 * @returns {void}
 */
BluetoothGATTCharacteristic.prototype.readValue = function(successCallback, errorCallback){ return; };

/**
 * Writes the characteristic value to the remote device.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Bytes} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTCharacteristic
 * @returns {void}
 */
BluetoothGATTCharacteristic.prototype.writeValue = function(value, successCallback, errorCallback){ return; };

/**
 * Registers a callback to be called when characteristic value of the characteristic changes.
 *
 * @param {ReadValueSuccessCallback} callback
 * @type Number
 * @memberOf BluetoothGATTCharacteristic
 * @returns {Number}
 */
BluetoothGATTCharacteristic.prototype.addValueChangeListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Unregisters a characteristic value change listener.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchID
 * @type void
 * @memberOf BluetoothGATTCharacteristic
 * @returns {void}
 */
BluetoothGATTCharacteristic.prototype.removeValueChangeListener = function(watchID){ return; };

/**
 * Called at the beginning of a device discovery process for finding the nearby Bluetooth device.
 *
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onstarted = function(){ return; };

/**
 * Called when a new device is discovered in the process of inquiry/discovery.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicefound = function(device){ return; };

/**
 * Called when a device is lost from proximity. After that, this device is no longer visible.
 *
 * @param {BluetoothAddress} address
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicedisappeared = function(address){ return; };

/**
 * Called when the device discovery process has finished.
 *
 * @param {array} foundDevices
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onfinished = function(foundDevices){ return; };

/**
 * Object representing a bluetooth manager.
 *
 * @type BluetoothManager
 */
BluetoothManagerObject.prototype.bluetooth = new BluetoothManager();

/**
 * The UUID of the service. See .
 *
 * @type BluetoothUUID
 */
BluetoothServiceHandler.prototype.uuid = new BluetoothUUID();

/**
 * The name of the service. See .
 *
 * @type String
 */
BluetoothServiceHandler.prototype.name = new String();

/**
 * The flag indicating whether any remote devices is using this service. See .
 *
 * @type Boolean
 */
BluetoothServiceHandler.prototype.isConnected = new Boolean();

/**
 * Called when a remote device is connected successfully to this service. By default, this attribute is set to null.
 *
 * @type BluetoothSocketSuccessCallback
 */
BluetoothServiceHandler.prototype.onconnect = new BluetoothSocketSuccessCallback();

/**
 * Unregisters a service record from the Bluetooth services record database and stops listening for new connections to this service.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothServiceHandler
 * @returns {void}
 */
BluetoothServiceHandler.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * The address of the Bluetooth LE device from the scan result information.
 *
 * @type BluetoothAddress
 */
BluetoothLEDevice.prototype.address = new BluetoothAddress();

/**
 * The name of the Bluetooth LE device from the scan result information.
 *
 * @type String
 */
BluetoothLEDevice.prototype.name = new String();

/**
 * The transmission power level of the Bluetooth LE device from the scan result information.
 * <p>
It represents the current transmit power level in dBm, and the level ranges from -100 dBm to +20 dBm to a resolution of 1 dBm.
            </p>
 *
 * @type Number
 */
BluetoothLEDevice.prototype.txpowerlevel = new Number();

/**
 * The appearance of the Bluetooth LE device from the scan result information.
 *
 * @type Number
 */
BluetoothLEDevice.prototype.appearance = new Number();

/**
 * The list of service UUIDs from scan result.
 *
 * @type array
 */
BluetoothLEDevice.prototype.uuids = new array();

/**
 * The list of service solicitation UUIDs available on Bluetooth LE device from the scan result information.
 *
 * @type array
 */
BluetoothLEDevice.prototype.solicitationuuids = new array();

/**
 * The list of service data available on Bluetooth LE device from the scan result information.
 *
 * @type array
 */
BluetoothLEDevice.prototype.serviceData = new array();

/**
 * The manufacturer data from the scan result information.
 *
 * @type BluetoothLEManufacturerData
 */
BluetoothLEDevice.prototype.manufacturerData = new BluetoothLEManufacturerData();

/**
 * The received signal strength indicator in dBm (decibel-milliwatts) units.
 * <p>
The signal strength depends on distance (between the device and the beacon) and broadcasting power value.
            </p>
 *
 * @type Number
 */
BluetoothLEDevice.prototype.rssi = new Number();

/**
 * Establishes Low Energy connection to the device.
            <p>
Connection is required to <em>readValue()</em> and <em>writeValue()</em> from the remote device.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.connect = function(successCallback, errorCallback){ return; };

/**
 * Disconnects from the device.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.disconnect = function(successCallback, errorCallback){ return; };

/**
 * Checks if Bluetooth Low Energy device is currently connected.
 *
 * @type Boolean
 * @memberOf BluetoothLEDevice
 * @returns {Boolean}
 */
BluetoothLEDevice.prototype.isConnected = function(){ var ret = new Boolean(); return ret; };

/**
 * Retrieves a service from the device for the given UUID.
 *
 * @param {BluetoothUUID} uuid
 * @type BluetoothGATTService
 * @memberOf BluetoothLEDevice
 * @returns {BluetoothGATTService}
 */
BluetoothLEDevice.prototype.getService = function(uuid){ var ret = new BluetoothGATTService(); return ret; };

/**
 * Retrieves list of all service UUIDs from connected GATT server.
 *
 * @type array
 * @memberOf BluetoothLEDevice
 * @returns {array}
 */
BluetoothLEDevice.prototype.getServiceAllUuids = function(){ var ret = new array(); return ret; };

/**
 * Registers a listener to be called when the device connects or disconnects.
 *
 * @param {BluetoothLEConnectChangeCallback} listener
 * @type Number
 * @memberOf BluetoothLEDevice
 * @returns {Number}
 */
BluetoothLEDevice.prototype.addConnectStateChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters a Bluetooth device connection listener.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchID
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.removeConnectStateChangeListener = function(watchID){ return; };

/**
 * Gets the current value of Attribute Protocol(ATT) Maximum Transmission Unit(MTU) from the connected device.
 *
 * @type Number
 * @memberOf BluetoothLEDevice
 * @returns {Number}
 */
BluetoothLEDevice.prototype.getAttMtu = function(){ var ret = new Number(); return ret; };

/**
 * Requests the GATT server to change the Attribute Protocol (ATT) Maximum Transmission Unit (MTU) value.
 *
 * @param {Number} newAttMtu
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.requestAttMtuChange = function(newAttMtu){ return; };

/**
 * Registers a listener to be called when ATT MTU value is changed.
 *
 * @param {ConnectionMtuCallback} callback
 * @type Number
 * @memberOf BluetoothLEDevice
 * @returns {Number}
 */
BluetoothLEDevice.prototype.addAttMtuChangeListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Unregisters the ATT MTU value change listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.removeAttMtuChangeListener = function(watchId){ return; };

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.MISC = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.COMPUTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.NETWORK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.AUDIO_VIDEO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PERIPHERAL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.IMAGING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.HEALTH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.UNCATEGORIZED = new Number();

/**
 * Registers an application for the Sink role.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Number} dataType
 * @param {String} name
 * @param {BluetoothHealthApplicationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthProfileHandler
 * @returns {void}
 */
BluetoothHealthProfileHandler.prototype.registerSinkApplication = function(dataType, name, successCallback, errorCallback){ return; };

/**
 * Connects to the health device which acts as the Source role.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDevice} peer
 * @param {BluetoothHealthApplication} application
 * @param {BluetoothHealthChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthProfileHandler
 * @returns {void}
 */
BluetoothHealthProfileHandler.prototype.connectToSource = function(peer, application, successCallback, errorCallback){ return; };

/**
 * Called when a client makes a read request for GATT characteristic to the connected local GATT server.
            <p>
The server should reply to requests by returning a <a href="#GATTRequestReply">GATTRequestReply</a> object with requested data and a proper status code.
If the callback does not return a <a href="#GATTRequestReply">GATTRequestReply</a>, the client will not receive a response.
            </p>
           
 *
 * @param {BluetoothAddress} clientAddress
 * @param {Number} offset
 * @type GATTRequestReply
 * @memberOf ReadValueRequestCallback
 * @returns {GATTRequestReply}
 */
ReadValueRequestCallback.prototype.onreadrequest = function(clientAddress, offset){ var ret = new GATTRequestReply(); return ret; };

/**
 * Indicates if clients have the permission to read the value of the descriptor.
 *
 * @type Boolean
 */
BluetoothGATTServerDescriptor.prototype.readPermission = new Boolean();

/**
 * Indicates if clients have the permission to write the value of the descriptor.
 *
 * @type Boolean
 */
BluetoothGATTServerDescriptor.prototype.writePermission = new Boolean();

/**
 * Indicates if clients have the permission to read the value of the descriptor through encrypted connections.
 *
 * @type Boolean
 */
BluetoothGATTServerDescriptor.prototype.encryptedReadPermission = new Boolean();

/**
 * Indicates if clients have the permission to write the value of the descriptor through encrypted connections.
 *
 * @type Boolean
 */
BluetoothGATTServerDescriptor.prototype.encryptedWritePermission = new Boolean();

/**
 * Indicates if clients have the permission to perform signed reads of the charactersitic's value.
 *
 * @type Boolean
 */
BluetoothGATTServerDescriptor.prototype.encryptedSignedReadPermission = new Boolean();

/**
 * Indicates if clients have the permission to perform signed writes of the charactersitic's value.
 *
 * @type Boolean
 */
BluetoothGATTServerDescriptor.prototype.encryptedSignedWritePermission = new Boolean();

/**
 * Registers the callback called when a client reads the value of the descriptor from the local GATT server.
            <p>
The callback, registered with this function, is called when a remote client requests to read the value of the descriptor.
The server can respond to such requests by returning a <a href="#GATTRequestReply">GATTRequestReply</a> object from the callback.
If <a href="#ReadValueRequestCallback">ReadValueRequestCallback</a> for the descriptor is not registered, or it does not return a <a href="#GATTRequestReply">GATTRequestReply</a>, clients will not be able to get the value of this descriptor.<br/>            </p>
            <p>
A callback set with this function overwrites any previously set <a href="#ReadValueRequestCallback">ReadValueRequestCallback</a>.
            </p>
            <p>
The <em>errorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
            <p>
The <em>sendResponseErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 InvalidValuesError - If <em>GATTRequestReply::statusCode</em> or <em>GATTRequestReply::data</em> is invalid.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ReadValueRequestCallback} readValueRequestCallback
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SuccessCallback} sendResponseSuccessCallback
 * @param {ErrorCallback} sendResponseErrorCallback
 * @type void
 * @memberOf BluetoothGATTServerDescriptor
 * @returns {void}
 */
BluetoothGATTServerDescriptor.prototype.setReadValueRequestCallback = function(readValueRequestCallback, successCallback, errorCallback, sendResponseSuccessCallback, sendResponseErrorCallback){ return; };

/**
 * Registers the callback called when a remote client writes the value of the descriptor from the local GATT server.
            <p>
The callback, registered with this function, is called when a remote client requests to write the value of the descriptor.
The server can respond to such requests by returning a <a href="#GATTRequestReply">GATTRequestReply</a> object from the callback.
If <a href="#WriteValueRequestCallback">WriteValueRequestCallback</a> for the descriptor is not registered, or it does not return a <a href="#GATTRequestReply">GATTRequestReply</a>, clients will not be able to get the value of this descriptor.<br/>            </p>
            <p>
A callback set with this function overwrites any previously set <a href="#WriteValueRequestCallback">WriteValueRequestCallback</a>.
            </p>
            <p>
The <em>errorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
            <p>
The <em>sendResponseErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 InvalidValuesError - If <em>GATTRequestReply::statusCode</em> or <em>GATTRequestReply::data</em> is invalid.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {WriteValueRequestCallback} writeValueRequestCallback
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SuccessCallback} sendResponseSuccessCallback
 * @param {ErrorCallback} sendResponseErrorCallback
 * @type void
 * @memberOf BluetoothGATTServerDescriptor
 * @returns {void}
 */
BluetoothGATTServerDescriptor.prototype.setWriteValueRequestCallback = function(writeValueRequestCallback, successCallback, errorCallback, sendResponseSuccessCallback, sendResponseErrorCallback){ return; };

/**
 * The remote device to which this channel is connected. See .
 *
 * @type BluetoothDevice
 */
BluetoothHealthChannel.prototype.peer = new BluetoothDevice();

/**
 * The type of this channel. See .
 *
 * @type BluetoothHealthChannelType
 */
BluetoothHealthChannel.prototype.channelType = new BluetoothHealthChannelType();

/**
 * The health application which is used to communicate with the remote device. See .
 *
 * @type BluetoothHealthApplication
 */
BluetoothHealthChannel.prototype.application = new BluetoothHealthApplication();

/**
 * The flag indicating whether any remote device is connected.
 *
 * @type Boolean
 */
BluetoothHealthChannel.prototype.isConnected = new Boolean();

/**
 * Closes the connected channel. is changed to and is invoked when this channel is closed successfully.
 *
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.close = function(){ return; };

/**
 * Sends data and returns the number of bytes actually written.
 *
 * @param {array} data
 * @type Number
 * @memberOf BluetoothHealthChannel
 * @returns {Number}
 */
BluetoothHealthChannel.prototype.sendData = function(data){ var ret = new Number(); return ret; };

/**
 * Sets the listener to receive notifications.
 *
 * @param {BluetoothHealthChannelChangeCallback} listener
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.setListener = function(listener){ return; };

/**
 * Unsets the listener. This stops receiving notifications.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.unsetListener = function(){ return; };

/**
 * Called when device information is ready.
 *
 * @param {array} devices
 * @type void
 * @memberOf BluetoothDeviceArraySuccessCallback
 * @returns {void}
 */
BluetoothDeviceArraySuccessCallback.prototype.onsuccess = function(devices){ return; };

/**
 * The Bluetooth profile type.
 *
 * @type BluetoothProfileType
 */
BluetoothProfileHandler.prototype.profileType = new BluetoothProfileType();

/**
 * Called when registering a service with the local device is successful.
 *
 * @param {BluetoothServiceHandler} handler
 * @type void
 * @memberOf BluetoothServiceSuccessCallback
 * @returns {void}
 */
BluetoothServiceSuccessCallback.prototype.onsuccess = function(handler){ return; };

/**
 * The flag indicating if remote GATT clients can currently connect to the server, exposing services defined in . It is toggled on and calls.
 *
 * @type Boolean
 */
BluetoothGATTServer.prototype.isRunning = new Boolean();

/**
 * The list of GATT services hosted on this server.
 *
 * @type array
 */
BluetoothGATTServer.prototype.services = new array();

/**
 * Starts the local GATT server. After it starts, it can conduct GATT server operations. Also, the remote clients can discover and use the services provided by the local Bluetooth GATT Server.
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 InvalidStateError - If the server is already running.              </li>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServer
 * @returns {void}
 */
BluetoothGATTServer.prototype.start = function(successCallback, errorCallback){ return; };

/**
 * Stops GATT server operation.
            <p>
After the stop, remote clients will not be able to discover the local GATT server's services.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 InvalidStateError - If the server is not running.              </li>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServer
 * @returns {void}
 */
BluetoothGATTServer.prototype.stop = function(successCallback, errorCallback){ return; };

/**
 * Registers a primary service in the local GATT server.
            <p>
The service is available for clients after <a href="#BluetoothGATTServer::start">BluetoothGATTServer::start()</a> call.
            </p>
           
 *
 * @param {BluetoothGATTServerServiceInit} service
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServer
 * @returns {void}
 */
BluetoothGATTServer.prototype.registerService = function(service, successCallback, errorCallback){ return; };

/**
 * Unregisters all services from the local GATT server.
            <p>
This method unregisters all services and all their characteristics from the local GATT server.
            </p>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServer
 * @returns {void}
 */
BluetoothGATTServer.prototype.unregisterAllServices = function(successCallback, errorCallback){ return; };

/**
 * Gets the ATT MTU for the connection with a client.
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidStateError - If the server is not running.              </li>
              <li>
 NotSupportedError - If the feature is not supported.              </li>
              <li>
 AbortError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} clientAddress
 * @param {ConnectionMtuCallback} callback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTServer
 * @returns {void}
 */
BluetoothGATTServer.prototype.getConnectionMtu = function(clientAddress, callback, errorCallback){ return; };

/**
 * The manufacturer assigned ID
 *
 * @type String
 */
BluetoothLEManufacturerData.prototype.id = new String();

/**
 * The manufacturer data content
 * <p>
The string should consist of hexadecimal characters only (A-F, a-f, 0-9). If the string's length is odd, the last character will be omitted.
The string may start without or with one of below prefixes:
            </p>
 * <ul>
 * <li>"0x",
 * <li>"0X".
 * </ul>
 * <p>
See also, <a href="#BluetoothLEDevice::manufacturerData">usage of BluetoothLEManufacturerData</a>.
            </p>
 *
 * @type String
 */
BluetoothLEManufacturerData.prototype.data = new String();

/**
 * Called when the message is received.
 *
 * @param {array} data
 * @type void
 * @memberOf BluetoothHealthChannelChangeCallback
 * @returns {void}
 */
BluetoothHealthChannelChangeCallback.prototype.onmessage = function(data){ return; };

/**
 * Called when the health channel is closed.
 *
 * @type void
 * @memberOf BluetoothHealthChannelChangeCallback
 * @returns {void}
 */
BluetoothHealthChannelChangeCallback.prototype.onclose = function(){ return; };

/**
 * UUID of the descriptor.
 *
 * @type BluetoothUUID
 */
BluetoothGATTDescriptor.prototype.uuid = new BluetoothUUID();

/**
 * Reads descriptor value from remote device. Updates descriptor value attribute.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {ReadValueSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTDescriptor
 * @returns {void}
 */
BluetoothGATTDescriptor.prototype.readValue = function(successCallback, errorCallback){ return; };

/**
 * Writes the descriptor value to the remote device.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Bytes} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTDescriptor
 * @returns {void}
 */
BluetoothGATTDescriptor.prototype.writeValue = function(value, successCallback, errorCallback){ return; };

/**
 * The UUID of service data.
 *
 * @type BluetoothUUID
 */
BluetoothLEServiceData.prototype.uuid = new BluetoothUUID();

/**
 * The service data of the Bluetooth LE device.
 *
 * @type String
 */
BluetoothLEServiceData.prototype.data = new String();

/**
 * The readable name of the Bluetooth adapter.
 *
 * @type String
 */
BluetoothAdapter.prototype.name = new String();

/**
 * The unique hardware address of the Bluetooth adapter, also known as the MAC address.
 *
 * @type BluetoothAddress
 */
BluetoothAdapter.prototype.address = new BluetoothAddress();

/**
 * The current state of the Bluetooth adapter.
 * <p>
This attribute holds one of the following 2 values:
            </p>
 * <ul>
 * <li>- If Bluetooth adapter is currently on
 * <li>- If Bluetooth adapter is currently off
 * </ul>
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.powered = new Boolean();

/**
 * The current visibility state of the Bluetooth adapter, that is, whether the local device is discoverable by remote devices.
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.visible = new Boolean();

/**
 * Sets the local Bluetooth adapter name.
            <p>
Sends a request to Bluetooth hardware to change the name of the local Bluetooth adapter to <em>name</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
ServiceNotAvailableError: If a Bluetooth device is turned off.              </li>
              <li>
UnknownError: In any other error case.              </li>
              <li>
NotSupportedError: If a device doesn't allow a Tizen Web application to change the name of the local Bluetooth adapter.              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setName = function(name, successCallback, errorCallback){ return; };

/**
 * Sets the listener to receive notifications about changes of Bluetooth adapter.
 *
 * @param {BluetoothAdapterChangeCallback} listener
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setChangeListener = function(listener){ return; };

/**
 * Unsets the listener, so stop receiving notifications about changes of Bluetooth adapter.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.unsetChangeListener = function(){ return; };

/**
 * Discovers nearby Bluetooth devices if any, that is, devices within proximity to the local device.
            <p>
This method initiates the device discovery process. Depending on the progress of this process the following methods are invoked:
            </p>
            <ul>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onstarted()</em> - when a discovery process starts successfully.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicefound()</em> - when any device is found in the process and this method is invoked with the device information. If no device is found, this method will never be invoked.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicedisappeared()</em> - when a device goes out of proximity and this method is invoked with the address of the device.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onfinished()</em> - when a discovery process is completed.              </li>
            </ul>
            <p>
A discovery process can be canceled anytime, by calling <em>stopDiscovery()</em> on the <em>BluetoothAdapter</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDiscoverDevicesSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.discoverDevices = function(successCallback, errorCallback){ return; };

/**
 * Stops an active device discovery session.
            <p>
Device discovery is a heavyweight procedure, hence we recommend stopping discovery as soon as the required device is found. This method cancels an active discovery session.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.stopDiscovery = function(successCallback, errorCallback){ return; };

/**
 * Gets all the known devices that have information stored in the local Bluetooth adapter.
            <p>
A known device is one of the following:
            </p>
            <ul>
              <li>
a bonded device              </li>
              <li>
a device found in last inquiry process              </li>
            </ul>
            <p>
On success, it returns the list of currently known devices through <em>BluetoothDeviceArraySuccessCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDeviceArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getKnownDevices = function(successCallback, errorCallback){ return; };

/**
 * Gets the object for a given device hardware address.
            <p>
This method returns device information stored in the local Bluetooth adapter for the specified device <em>address</em> through
BluetoothDeviceSuccessCallback.
A valid hardware address must be passed, such as "35:F4:59:D1:7A:03".
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If there is no device with the given address              </li>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getDevice = function(address, successCallback, errorCallback){ return; };

/**
 * Creates a bond with a remote device by initiating the bonding process with peer device, using the given MAC address. The remote device must be bonded with the local device in order to connect to services of the remote device and then exchange data with each other.
            <p>
If the bonding process is successful, the device information is sent in <em>successCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If there is no device with the given address              </li>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.createBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Destroys the bond with a remote device.
            <p>
This method initiates the process of removing the specified <em>address</em> from the list of bonded devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If there is no device with the given address              </li>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.destroyBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Registers a service record in the device service record database with the specified , .
            <p>
On success of the service registration, it returns a <em>BluetoothServiceHandler</em> object as the first parameter of <em>successCallback</em>, and listens for client connections.
The service handler can be used to be notified on client connections or to unregister the service.
User interaction is mandatory to connect to a registered service.
            </p>
            <p>
If any client(remote device) connects to this service, then <em>BluetoothServiceHandler.onconnect()</em> is invoked with <em>BluetoothSocket</em> object.
            </p>
            <p>
<em>BluetoothServiceHandler.unregister()</em> can be used to unregister the service record from the device service database and stop listening for client connections.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {String} name
 * @param {BluetoothServiceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.registerRFCOMMServiceByUUID = function(uuid, name, successCallback, errorCallback){ return; };

/**
 * Gets the profile handler for the given type.
 *
 * @param {BluetoothProfileType} profileType
 * @type BluetoothProfileHandler
 * @memberOf BluetoothAdapter
 * @returns {BluetoothProfileHandler}
 */
BluetoothAdapter.prototype.getBluetoothProfileHandler = function(profileType){ var ret = new BluetoothProfileHandler(); return ret; };

/**
 * Called when a new device is successfully discovered in the process of scanning.
 *
 * @param {BluetoothLEDevice} device
 * @type void
 * @memberOf BluetoothLEScanCallback
 * @returns {void}
 */
BluetoothLEScanCallback.prototype.onsuccess = function(device){ return; };

/**
 * Called when the application is registered successfully.
 *
 * @param {BluetoothHealthApplication} application
 * @type void
 * @memberOf BluetoothHealthApplicationSuccessCallback
 * @returns {void}
 */
BluetoothHealthApplicationSuccessCallback.prototype.onsuccess = function(application){ return; };

/**
 * Called at the beginning of connect to a specific LE based service on a remote Bluetooth LE device.
 *
 * @param {BluetoothLEDevice} device
 * @type void
 * @memberOf BluetoothLEConnectChangeCallback
 * @returns {void}
 */
BluetoothLEConnectChangeCallback.prototype.onconnected = function(device){ return; };

/**
 * Called at the beginning of disconnect to a specific LE based service on a remote Bluetooth LE device.
 *
 * @param {BluetoothLEDevice} device
 * @type void
 * @memberOf BluetoothLEConnectChangeCallback
 * @returns {void}
 */
BluetoothLEConnectChangeCallback.prototype.ondisconnected = function(device){ return; };

/**
 * Called when the local GATT server successfully notifies a client of a characteristic's value change.
 *
 * @param {BluetoothAddress} clientAddress
 * @type void
 * @memberOf NotificationCallback
 * @returns {void}
 */
NotificationCallback.prototype.onnotificationsuccess = function(clientAddress){ return; };

/**
 * Called when the local GATT server fails to notify a client of a characteristic's value change.
 *
 * @param {BluetoothAddress} clientAddress
 * @param {WebAPIException} error
 * @type void
 * @memberOf NotificationCallback
 * @returns {void}
 */
NotificationCallback.prototype.onnotificationfail = function(clientAddress, error){ return; };

/**
 * Called when the last of all client notifications was sent.
 *
 * @param {BluetoothAddress} clientAddress
 * @type void
 * @memberOf NotificationCallback
 * @returns {void}
 */
NotificationCallback.prototype.onnotificationfinish = function(clientAddress){ return; };

/**
 * Called when a connection is established.
 *
 * @param {BluetoothHealthChannel} channel
 * @type void
 * @memberOf BluetoothHealthChannelSuccessCallback
 * @returns {void}
 */
BluetoothHealthChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * Called when a characteristic value has been read.
 *
 * @param {array} value
 * @type void
 * @memberOf ReadValueSuccessCallback
 * @returns {void}
 */
ReadValueSuccessCallback.prototype.onread = function(value){ return; };

/**
 * Object representing a bluetooth manager.
 *
 * @type BluetoothManager
 */
Tizen.prototype.bluetooth = new BluetoothManager();

/**
 * The Calendar interface provides methods to manage events or tasks in a calendar. A Calendar object contains a set of events or tasks, depending on the calendar type.
          <p>
This interface offers the following methods to manage events in a calendar:
          </p>
          <ul>
            <li>
Finding items using a key-value filter.            </li>
            <li>
Adding items to a specific calendar using <em>add()</em> / <em>addBatch()</em> methods.            </li>
            <li>
Updating existing items using <em>update()</em> / <em>updateBatch()</em> methods.            </li>
            <li>
Deleting existing items using <em>remove()</em> / <em>removeBatch()</em> methods.            </li>
            <li>
Tracking calendar changes using <em>addChangeListener()</em> / <em>removeChangeListener()</em> methods.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {Calendar}
 */
function Calendar() {};
Calendar.prototype = new Object();

/**
 * The CalendarItemArraySuccessCallback interface implements the success callback used in the asynchronous operation for retrieving a list of calendar items.
 *
 * @super Object
 * @constructor
 * @return {CalendarItemArraySuccessCallback}
 */
function CalendarItemArraySuccessCallback() {};
CalendarItemArraySuccessCallback.prototype = new Object();

/**
 * The CalendarItem interface is a parent interface that is used to create Calendar events and tasks. These attributes are shared by both events and tasks.
 *
 * @super Object
 * @constructor
 * @return {CalendarItem}
 */
function CalendarItem() {};
CalendarItem.prototype = new Object();

/**
 * The CalendarEventId interface contains a UID and an optional recurrence id attribute to identify calendar events.
          <p>
The recurrence identifier (<em>rid</em> attribute) is used to identify a particular instance of a recurring event. All instances of the same recurring event have the same UID but different recurrence IDs.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {CalendarEventId}
 */
function CalendarEventId() {};
CalendarEventId.prototype = new Object();

/**
 * This interface implements the object.
 *
 * @super Object
 * @constructor
 * @return {CalendarTask}
 */
function CalendarTask() {};
CalendarTask.prototype = new CalendarItem();

/**
 * The CalendarArraySuccessCallback interface implements the success callback used in the asynchronous operation to get a list of calendars using the method.
 *
 * @super Object
 * @constructor
 * @return {CalendarArraySuccessCallback}
 */
function CalendarArraySuccessCallback() {};
CalendarArraySuccessCallback.prototype = new Object();

/**
 * The CalendarAttendee interface implements the object that contains information about an event attendee.
          <p>
By default, each of the attributes of this interface are undefined.
          </p>
          <p>
(For more details, see RFC 5545, Section 3.8.4.1.)
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {CalendarAttendee}
 */
function CalendarAttendee() {};
CalendarAttendee.prototype = new Object();

/**
 * The CalendarEventArraySuccessCallback interface that implements the success callback used in the asynchronous operation for retrieving a list of calendar events.
 *
 * @super Object
 * @constructor
 * @return {CalendarEventArraySuccessCallback}
 */
function CalendarEventArraySuccessCallback() {};
CalendarEventArraySuccessCallback.prototype = new Object();

/**
 * The CalendarManager interface provides methods to access calendars and attributes for calendars. Once a calendar object is obtained, it is possible to add, remove, or update the information it contains through the Calendar interface methods.
 *
 * @super Object
 * @constructor
 * @return {CalendarManager}
 */
function CalendarManager() {};
CalendarManager.prototype = new Object();

/**
 * The CalendarManagerObject interface gives access to the Calendar API from the object.
 *
 * @super Object
 * @constructor
 * @return {CalendarManagerObject}
 */
function CalendarManagerObject() {};
CalendarManagerObject.prototype = new Object();

/**
 * The information related to an event alarm or reminder.
 *
 * @super Object
 * @constructor
 * @return {CalendarAlarm}
 */
function CalendarAlarm() {};
CalendarAlarm.prototype = new Object();

/**
 * This interface implements the object.
 *
 * @super Object
 * @constructor
 * @return {CalendarEvent}
 */
function CalendarEvent() {};
CalendarEvent.prototype = new CalendarItem();

/**
 * The CalendarChangeCallback interface specifies a set of methods that will be invoked every time a calendar change occurs (calendar item addition/update/removal).
 *
 * @super Object
 * @constructor
 * @return {CalendarChangeCallback}
 */
function CalendarChangeCallback() {};
CalendarChangeCallback.prototype = new Object();

/**
 * The CalendarRecurrenceRule interface implements the object, which contains information about the recurrence of an event. (See RFC 5545, Section 3.3.10.)
 *
 * @super Object
 * @constructor
 * @return {CalendarRecurrenceRule}
 */
function CalendarRecurrenceRule() {};
CalendarRecurrenceRule.prototype = new Object();

/**
 * Calendar identifier.
 *
 * @type CalendarId
 */
Calendar.prototype.id = new CalendarId();

/**
 * Readable (descriptive) name for a calendar, such as work or personal.
 *
 * @type String
 */
Calendar.prototype.name = new String();

/**
 * Account identifier.
 *
 * @type AccountId
 */
Calendar.prototype.accountId = new AccountId();

/**
 * Gets the calendar item with the specified identifier.
 *
 * @param {CalendarItemId} id
 * @type CalendarItem
 * @memberOf Calendar
 * @returns {CalendarItem}
 */
Calendar.prototype.get = function(id){ var ret = new CalendarItem(); return ret; };

/**
 * Adds an item to the calendar synchronously.
            <p>
If the item is successfully inserted in the calendar, the <em>CalendarItem</em> will have its identifier (id attribute) set when the method returns.
            </p>
            <p>
To update an existing item, call the <em>update()</em> method instead. If you wish to add a copy of an existing <em>CalendarItem</em> object, call <em>CalendarItem.clone()</em> method first and pass the clone to the <em>add()</em> method.
            </p>
           
 *
 * @param {CalendarItem} item
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.add = function(item){ return; };

/**
 * Adds an array of items to the calendar asynchronously.
            <p>
If all the items are successfully added to the calendar, the success callback will be invoked, passing the list of <em>CalendarItem</em> objects that were added, with their identifier set (id attribute).
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value, the item has any invalid value or the calendar has some restrictions that cause the attempted insertion of the calendar items to fail (for example, limitations in the size of text attributes).              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
            <p>
If you wish to update an existing item, call the <em>update()</em> method instead. If you wish to add a copy of an existing <em>CalendarItem</em> object, call CalendarItem.clone() method first and pass the clone to the add() method.
            </p>
           
 *
 * @param {array} items
 * @param {CalendarItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.addBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Updates an existing item in the calendar synchronously with the one specified in the argument.
            <p>
In case of recurring events, the default behavior is to update all their instances (including their detached ones), as well. If you do not want that, the <em>updateAllInstances</em> flag should be set to <var>false</var>.
            </p>
           
 *
 * @param {CalendarItem} item
 * @param {Boolean} updateAllInstances
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.update = function(item, updateAllInstances){ return; };

/**
 * Updates an array of existing items in the calendar asynchronously with the specified values in the argument.
            <p>
In case of recurring events, the default behavior is to update all their instances (including their detached ones) as well. The <em>updateAllInstances</em> flag should be set to <var>false</var> to change the default behavior.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if parameters such as the calendar item has any invalid value or the calendar has some restrictions that cause the attempted insertion of the calendar items to fail (for example, limitations in the size of text attributes).              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Boolean} updateAllInstances
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.updateBatch = function(items, successCallback, errorCallback, updateAllInstances){ return; };

/**
 * Removes an item from the calendar that corresponds to the specified identifier. This method will throw an exception if it fails to remove the specified calendar item.
 *
 * @param {CalendarItemId} id
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.remove = function(id){ return; };

/**
 * Removes several items from the calendar asynchronously depending on the specified identifiers.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - if an identifier in the <em>ids</em> parameter does not correspond to the id attribute of an item in the calendar.              </li>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} ids
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.removeBatch = function(ids, successCallback, errorCallback){ return; };

/**
 * Finds and fetches an array of objects for items stored in the calendar according to the supplied filter if it is valid else it will return all the items stored.
            <p>
If the filter is passed and contains valid values, only those values in the calendar that match the filter criteria as specified in the <em>AbstractFilter</em> interface will be returned in the <em>successCallback()</em>.
If no filter is passed, or the filter contains any invalid value which is <var>null</var> or undefined, then the implementation must return the full list of items in the <em>successCallback()</em>.
If no items are available in the calendar (it is empty) or no item matches the filter criteria, the <em>successCallback()</em> will be invoked with an empty array.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
            <p>
<b>Filter specific remarks:</b>            </p>
            <ul>
              <li>
For event filtering based on start or end dates, items that recur during the given time interval will be found, even if the parent item itself is outside the interval.              </li>
              <li>
For event filtering based on the identifier, the identifier type should be CalendarEventID (<em>uid</em> and <em>rid</em>).
If no recurrence ID is given, the filter will match both the parent event and all its detached instances.              </li>
            </ul>
           
 *
 * @param {CalendarItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.find = function(successCallback, errorCallback, filter, sortMode){ return; };

/**
 * Adds a listener to receive notifications about calendar changes.
            <p>
When executed, the implementation must immediately return a subscription identifier that identifies the watch operation. After returning the identifier, the watcher methods are invoked asynchronously.
            </p>
           
 *
 * @param {CalendarChangeCallback} successCallback
 * @type Number
 * @memberOf Calendar
 * @returns {Number}
 */
Calendar.prototype.addChangeListener = function(successCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification for a calendar item change.
            <p>
If the <em>watchId</em> argument is valid and corresponds to a subscription already in place, the watch process must immediately stop and no further callbacks must be invoked.
If the <em>watchId</em> argument is not valid or does not correspond to a valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Calendar
 * @returns {void}
 */
Calendar.prototype.removeChangeListener = function(watchId){ return; };

/**
 * Called when the list of calendar items is retrieved successfully.
 *
 * @param {array} items
 * @type void
 * @memberOf CalendarItemArraySuccessCallback
 * @returns {void}
 */
CalendarItemArraySuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * Calendar item identifier.
 * <p>
Includes a UID and a possible recurrence ID that is needed to identify a particular instance of a recurring event.
            </p>
 * <p>
By default, this attribute is set to null.
            </p>
 *
 * @type CalendarItemId
 */
CalendarItem.prototype.id = new CalendarItemId();

/**
 * Identifier of the calendar in which this item is saved.
 * <p>
By default, this attribute is set to null.
            </p>
 *
 * @type CalendarId
 */
CalendarItem.prototype.calendarId = new CalendarId();

/**
 * The last modified date and time of an item.
 * <p>
This attribute is automatically populated and cannot be edited by the client.
(See RFC 5545 - Section 3.8.7.3).
            </p>
 *
 * @type TZDate
 */
CalendarItem.prototype.lastModificationDate = new TZDate();

/**
 * The textual descriptions of an item.
 * <p>
It is usually used to provide a more complete description of the item and any supporting information than what is provided in the summary attribute.
(See RFC 5545 - Section 3.8.1.5).
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
CalendarItem.prototype.description = new String();

/**
 * The short summary or subject for an item. (See RFC 5545 - Section 3.8.1.12)
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
CalendarItem.prototype.summary = new String();

/**
 * Flag to indicate whether an event is an all-day event.
 * <p>
If set to <var>true</var>, then the time and time zone of the <em>startDate</em> are to be ignored and are not guaranteed to be stored in the database. An all-day event always covers the whole day, regardless of which time zone it was defined in and what the current time zone is. The duration must be <var>n*60*24</var> minutes for an event lasting <var>n</var> days.
            </p>
 * <p>
The default value for this attribute is <var>false</var>.
            </p>
 *
 * @type Boolean
 */
CalendarItem.prototype.isAllDay = new Boolean();

/**
 * The start date or time for an item. (see RFC 5545 - Section 3.8.2.4).
 * <p>
The default value for this attribute is <var>null</var>.
            </p>
 * <p>
<em>startDate</em> must be specified in the same time zone as <em>endDate / dueDate</em> if provided.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TZDate
 */
CalendarItem.prototype.startDate = new TZDate();

/**
 * The duration of the calendar component. (See RFC 5545 - Section 3.8.2.5).
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 * <p>
<em>duration</em> and <em>endDate / dueDate</em> are mutually exclusive, hence, only one of them can be non-null.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TimeDuration
 */
CalendarItem.prototype.duration = new TimeDuration();

/**
 * The location or the intended venue for the activity defined by the calendar item. (See RFC 5545 - Section 3.8.1.7)
 * <p>
The default value for this attribute is an empty string.
            </p>
 *
 * @type String
 */
CalendarItem.prototype.location = new String();

/**
 * The global position latitude and longitude of the location where the event is planned to take place. (See RFC 5545 - Section 3.8.1.6).
 *
 * @type SimpleCoordinates
 */
CalendarItem.prototype.geolocation = new SimpleCoordinates();

/**
 * The name of the person who organized this event. (See RFC 5545 - Section 3.8.4.3).
 * <p>
By default, this attribute is initialized to an empty string.
            </p>
 *
 * @type String
 */
CalendarItem.prototype.organizer = new String();

/**
 * The visibility (secrecy) level of the item. (See RFC 5545 - Section 3.8.1.3).
 * <p>
The default value is <var>PUBLIC</var>.
            </p>
 *
 * @type CalendarItemVisibility
 */
CalendarItem.prototype.visibility = new CalendarItemVisibility();

/**
 * The overall confirmation status for a calendar component. (See RFC 5545 - Section 3.8.1.11).
 * <p>
The default value for this attribute is <var>NONE</var>.
            </p>
 *
 * @type CalendarItemStatus
 */
CalendarItem.prototype.status = new CalendarItemStatus();

/**
 * The priority level of an item and may be used to relatively prioritize multiple items during a given period of time. (See RFC 5545 - Section 3.8.1.9).
 * <p>
The default value for this attribute is <var>NONE</var> priority.
            </p>
 * <p>
If the native item database supports another priority schema (such as a range from 1 to 9), the implementation must convert those values to the supported values. For instance, RFC 5545 suggests the following mapping for a range from 1 to 9:
            </p>
 * <ul>
 * <li>1-4 to HIGH,
 * <li>5 to MEDIUM,
 * <li>6-9 to LOW.
 * </ul>
 *
 * @type CalendarItemPriority
 */
CalendarItem.prototype.priority = new CalendarItemPriority();

/**
 * The array of the alarms (or reminders) associated to an item.
 *
 * @type array
 */
CalendarItem.prototype.alarms = new array();

/**
 * The flag that indicates the item categories or subtypes of a calendar component. The categories are useful in searching for a calendar component of a particular type and category. (See RFC 5545 - Section 3.8.1.2).
 * <p>
Examples of categories are personal, work, vacation, travel, and so on.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarItem.prototype.categories = new array();

/**
 * The array that lists the people attending an event. (See RFC 5545 - Section 3.8.4.3).
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarItem.prototype.attendees = new array();

/**
 * Converts the calendar item to a string format that will be generated and returned synchronously. The export format is set using the format parameter.
 *
 * @param {CalendarTextFormat} format
 * @type String
 * @memberOf CalendarItem
 * @returns {String}
 */
CalendarItem.prototype.convertToString = function(format){ var ret = new String(); return ret; };

/**
 * Clones the object, detached from any calendar.
            <p>
The <em>CalendarItem</em> object returned by the <em>clone()</em> method will have its identifier set to <var>null</var> and will be detached from any calendar.
            </p>
           
 *
 * @type CalendarItem
 * @memberOf CalendarItem
 * @returns {CalendarItem}
 */
CalendarItem.prototype.clone = function(){ var ret = new CalendarItem(); return ret; };

/**
 * The calendar event identifier.
 * <p>
This value is assigned by the platform when the event is added to the calendar, it is locally unique and persistent for the life time of the event and it cannot be modified by the developers.
            </p>
 * <p>
See RFC 5545 (section 3.8.4.7) for more details about this parameter and algorithms to guarantee assignment of unique values.
This value is assigned by the platform when the <em>add()</em> method is successfully invoked.
            </p>
 *
 * @type String
 */
CalendarEventId.prototype.uid = new String();

/**
 * The recurrence ID of a instance.
 * <p>
This attribute is used in conjunction with the <em>uid</em> property to identify a specific instance of a recurring event.
            </p>
 * <p>
The parent of a recurrence instance has its <em>rid</em> set to <var>null</var>.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
(See RFC 5545 (section 3.8.4.4) for more details about this parameter.)
            </p>
 *
 * @type String
 */
CalendarEventId.prototype.rid = new String();

/**
 * The due date and time for completing a task. (See RFC 5545 - Section 3.8.2.3).
 * <p>
This <em>dueDate</em> must be in the same time zone as the <em>startDate</em>. The <em>duration</em> and <em>dueDate</em> are mutually exclusive, so only one of them can be non-null.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
The default value is <var>null</var>. If no value is provided, the task does not have a due date.
            </p>
 *
 * @type TZDate
 */
CalendarTask.prototype.dueDate = new TZDate();

/**
 * The date and time when an task is completed. (See RFC 5545 - Section 3.8.2.1).
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
The default value is <var>null</var>. If no value is provided, the task is not completed yet.
            </p>
 *
 * @type TZDate
 */
CalendarTask.prototype.completedDate = new TZDate();

/**
 * The percent of completion of a task.
 * <p>
The value is a positive integer between <var>0</var> and <var>100</var>. A value of <var>0</var> indicates the task has not been started yet. A value of <var>100</var> indicates that the task has been completed.
            </p>
 * <p>
Integer values in between indicate the percent partially complete.
(See RFC 5545 - Section 3.8.1.8).
            </p>
 * <p>
The default value is <var>0</var>, implies that the task has not been started.
            </p>
 *
 * @type Number
 */
CalendarTask.prototype.progress = new Number();

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} calendars
 * @type void
 * @memberOf CalendarArraySuccessCallback
 * @returns {void}
 */
CalendarArraySuccessCallback.prototype.onsuccess = function(calendars){ return; };

/**
 * The URI for the attendee.
 * <p>
This is often an email in the form "mailto:name@domain.com".
            </p>
 *
 * @type String
 */
CalendarAttendee.prototype.uri = new String();

/**
 * The name of an attendee.
 *
 * @type String
 */
CalendarAttendee.prototype.name = new String();

/**
 * The role of the attendee.
 * <p>
(See RFC 5545, Section 3.2.16.)
            </p>
 * <p>
The default value is <var>REQ_PARTICIPANT</var>.
            </p>
 *
 * @type AttendeeRole
 */
CalendarAttendee.prototype.role = new AttendeeRole();

/**
 * The participant's attendance status. (See RFC 5545, Section 3.2.12.)
 * <p>
The default value is <var>PENDING</var>.
            </p>
 *
 * @type AttendeeStatus
 */
CalendarAttendee.prototype.status = new AttendeeStatus();

/**
 * The attendee's participation status reply (RSVP). (See RFC 5545, Section 3.2.17.)
 * <p>
By default, this attribute is set to <var>FALSE</var>.
            </p>
 *
 * @type Boolean
 */
CalendarAttendee.prototype.RSVP = new Boolean();

/**
 * The type of a participant. (See RFC 5545, Section 3.2.3.)
 * <p>
The default value is <var>INDIVIDUAL</var>.
            </p>
 *
 * @type AttendeeType
 */
CalendarAttendee.prototype.type = new AttendeeType();

/**
 * The participant's group or list membership. (See RFC 5545, Section 3.2.11.)
 *
 * @type String
 */
CalendarAttendee.prototype.group = new String();

/**
 * The URI of the person who has delegated their participation to this attendee. (See RFC 5545, Section 3.2.4.)
 *
 * @type String
 */
CalendarAttendee.prototype.delegatorURI = new String();

/**
 * The URI of the attendee to whom the person has delegated his participation. (See RFC 5545, Section 3.2.5.)
 *
 * @type String
 */
CalendarAttendee.prototype.delegateURI = new String();

/**
 * The participant's reference in the Contact API.
 * <p>
If the contact is not resolved, this attribute will be set to <var>null</var>.
For more information, see the <a href="contact.html">Contact API</a>.
            </p>
 *
 * @type ContactRef
 */
CalendarAttendee.prototype.contactRef = new ContactRef();

/**
 * Called when the list of calendar events is retrieved successfully.
 *
 * @param {array} events
 * @type void
 * @memberOf CalendarEventArraySuccessCallback
 * @returns {void}
 */
CalendarEventArraySuccessCallback.prototype.onsuccess = function(events){ return; };

/**
 * Gets an array of Calendar objects.
            <p>
If the operation completes successfully, the <em>successCallback()</em> must be invoked with all the calendars found and available. The first calendar in the list is always the default calendar.
            </p>
            <p>
If no Calendar object is available, the <em>successCallback()</em> is invoked with an empty array.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {CalendarType} type
 * @param {CalendarArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf CalendarManager
 * @returns {void}
 */
CalendarManager.prototype.getCalendars = function(type, successCallback, errorCallback){ return; };

/**
 * The unified calendar is the aggregation of all calendars that are obtained from and contains all events or tasks. It does not have the calendar ID nor name which are set to .
            <p>
If an item is added to the unified calendar, it will be saved in the default calendar.
            </p>
           
 *
 * @param {CalendarType} type
 * @type Calendar
 * @memberOf CalendarManager
 * @returns {Calendar}
 */
CalendarManager.prototype.getUnifiedCalendar = function(type){ var ret = new Calendar(); return ret; };

/**
 * Gets the default calendar, which is used for new items.
 *
 * @param {CalendarType} type
 * @type Calendar
 * @memberOf CalendarManager
 * @returns {Calendar}
 */
CalendarManager.prototype.getDefaultCalendar = function(type){ var ret = new Calendar(); return ret; };

/**
 * Adds a calendar to the calendar database synchronously.
            <p>
If the calendar is successfully inserted in the database, the Calendar object
will have its identifier (id attribute) set when the function returns.
            </p>
           
 *
 * @param {Calendar} calendar
 * @type void
 * @memberOf CalendarManager
 * @returns {void}
 */
CalendarManager.prototype.addCalendar = function(calendar){ return; };

/**
 * Removes a calendar from the calendar database synchronously.
            <p>
Removes the calendar that corresponds to the specified identifier from the database.
The function will throw an exception if it failed to remove the specified calendar.
            </p>
           
 *
 * @param {CalendarType} type
 * @param {CalendarId} id
 * @type void
 * @memberOf CalendarManager
 * @returns {void}
 */
CalendarManager.prototype.removeCalendar = function(type, id){ return; };

/**
 * Gets the calendar with the specified identifier and type.
 *
 * @param {CalendarType} type
 * @param {CalendarId} id
 * @type Calendar
 * @memberOf CalendarManager
 * @returns {Calendar}
 */
CalendarManager.prototype.getCalendar = function(type, id){ var ret = new Calendar(); return ret; };

/**
 * Object representing a calendar manager.
 *
 * @type CalendarManager
 */
CalendarManagerObject.prototype.calendar = new CalendarManager();

/**
 * The absolute date and time when an alarm should be triggered.
 * <p>
<em>absoluteDate</em> and <em>before</em> are mutually exclusive.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TZDate
 */
CalendarAlarm.prototype.absoluteDate = new TZDate();

/**
 * The duration before an event starts on which the alarm should be triggered.
 * <p>
The duration should be positive.
            </p>
 * <p>
<em>absoluteDate</em> and <em>before</em> are mutually exclusive.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 *
 * @type TimeDuration
 */
CalendarAlarm.prototype.before = new TimeDuration();

/**
 * The notification method used by an alarm.
 *
 * @type AlarmMethod
 */
CalendarAlarm.prototype.method = new AlarmMethod();

/**
 * The description of an alarm.
 * <p>
When the method is <var>DISPLAY</var>, the alarm must also include a description attribute, which contains the text to be displayed when the alarm is triggered.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
CalendarAlarm.prototype.description = new String();

/**
 * The flag that indicates whether an instance of a recurring event is detached and if it has been modified and saved to the calendar.
 *
 * @type Boolean
 */
CalendarEvent.prototype.isDetached = new Boolean();

/**
 * The end date/time of an event.
 * <p>
(see RFC 5545 - Section 3.8.2.2).
            </p>
 * <p>
This <em>endDate</em> must be in the same time zone as the <em>startDate</em>.
Note that <em>duration</em> and <em>endDate</em> are mutually exclusive, only one of them can be non-null.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
The default value for this attribute is <var>null</var>.
            </p>
 *
 * @type TZDate
 */
CalendarEvent.prototype.endDate = new TZDate();

/**
 * The availability of a person for an event. (See RFC 5545 - Section 3.2.9).
 * <p>
The default value is <var>BUSY</var>.
            </p>
 *
 * @type EventAvailability
 */
CalendarEvent.prototype.availability = new EventAvailability();

/**
 * The recurrence rule for the event.
 * <p>
The generated instances of a recurring event will have the same recurrence rule as their parent. This is useful when editing a particular event instance and choosing to update <b>all</b> instances from it.
            </p>
 * <p>
The detached instances (specific instances that have been modified as saved to the calendar) of a recurring event will not have any recurrence rule. No recurrence rule can be set on detached instances either. If one tries to set a recurrence rule on a detached event, a NotSupportedError should be thrown. Detached instances can be distinguished by checking their <em>isDetached</em> attribute.
(See RFC 5545, Section 3.3.10.)
            </p>
 *
 * @type CalendarRecurrenceRule
 */
CalendarEvent.prototype.recurrenceRule = new CalendarRecurrenceRule();

/**
 * Expands a recurring event and returns asynchronously the list of instances occurring in a given time interval (inclusive).
            <p>
This method takes into consideration all the parameters of the event recurrence rule to generate the instances occurring in a given time interval.
            </p>
            <p>
The call involves retrieving from the database detached instances of an event to replace their corresponding virtual instances in the returned list. The client can then use <em>CalendarEvent.isDetached</em> attribute to identify detached instances. If the event is not saved to a calendar yet, only virtual instances will be returned.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if the event in operation is not recurring.              </li>
              <li>
UnknownError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {TZDate} startDate
 * @param {TZDate} endDate
 * @param {CalendarEventArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf CalendarEvent
 * @returns {void}
 */
CalendarEvent.prototype.expandRecurrence = function(startDate, endDate, successCallback, errorCallback){ return; };

/**
 * Called when items are added to the calendar.
 *
 * @param {array} items
 * @type void
 * @memberOf CalendarChangeCallback
 * @returns {void}
 */
CalendarChangeCallback.prototype.onitemsadded = function(items){ return; };

/**
 * Called when items are updated in the calendar.
 *
 * @param {array} items
 * @type void
 * @memberOf CalendarChangeCallback
 * @returns {void}
 */
CalendarChangeCallback.prototype.onitemsupdated = function(items){ return; };

/**
 * Called when item are removed from the calendar.
 *
 * @param {array} ids
 * @type void
 * @memberOf CalendarChangeCallback
 * @returns {void}
 */
CalendarChangeCallback.prototype.onitemsremoved = function(ids){ return; };

/**
 * The frequency of a recurrence rule.
 * <p>
This property corresponds to <em>FREQ</em> in RFC 5545.
            </p>
 *
 * @type RecurrenceRuleFrequency
 */
CalendarRecurrenceRule.prototype.frequency = new RecurrenceRuleFrequency();

/**
 * The interval for the recurrence rule to repeat over the unit of time indicated by its frequency.
 * <p>
This attribute is linked to the <em>frequency</em> attribute and for an interval of <var>n</var>, the event will recur every <var>n</var> of recurrence attribute.
            </p>
 * <p>
For example, if the interval attribute is set to <var>2</var> and <em>frequency</em> attribute is set to <var>WEEKLY</var>, then the event will recur every 2 weeks.
            </p>
 * <p>
The default interval value is <var>1</var>, that is, every day if the <em>CalendarRecurrenceRule frequency</em> attribute is DAILY, every week if frequency is <var>WEEKLY</var>, every month if frequency is <var>MONTHLY</var> or every year if frequency is <var>YEARLY</var>.
            </p>
 * <p>
This property corresponds to <em>INTERVAL</em> in RFC 5545.
            </p>
 *
 * @type Number
 */
CalendarRecurrenceRule.prototype.interval = new Number();

/**
 * The end date of a recurrence duration of an event using either an end date ( attribute) or a number of occurrences ( attribute).
 * <p>
By default, this attribute is set to <var>null</var>, meaning that the event recurs infinitely, unless <em>occurrenceCount</em> is set.
            </p>
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
This property corresponds to <em>UNTIL</em> in RFC 5545.
            </p>
 *
 * @type TZDate
 */
CalendarRecurrenceRule.prototype.untilDate = new TZDate();

/**
 * The number of occurrences of a recurring event.
 * <p>
The recurrence duration of an event can be defined using either an end date (<em>untilDate</em> attribute) or a number of occurrences (<em>occurrenceCount</em> attribute).
            </p>
 * <p>
By default, this attribute is set to <var>-1</var>, meaning that the event recurs infinitely, unless <em>untilDate</em> is set.
            </p>
 * <p>
This property corresponds to <em>COUNT</em> in RFC 5545.
            </p>
 *
 * @type Number
 */
CalendarRecurrenceRule.prototype.occurrenceCount = new Number();

/**
 * The days of the week associated with the recurrence rule.
 * <p>
This property value is valid only for recurrence rules with a frequency type of <em>WEEKLY</em>, <em>MONTHLY</em>, and <em>YEARLY</em>.
            </p>
 * <p>
This property corresponds to <em>BYDAY</em> in RFC 5545.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarRecurrenceRule.prototype.daysOfTheWeek = new array();

/**
 * The list of ordinal numbers that filters which recurrences to include in the recurrence rule's frequency.
 * <p>
For example, a yearly recurrence rule that has a <em>daysOfTheWeek</em> value that specifies Monday through Friday, and a <em>setPositions</em> array containing <var>2</var> and <var>-1</var>, occurs only on the second weekday and last weekday of every year.
            </p>
 * <p>
Values can be from 1 to 366 or -366 to -1.
Negative values indicate counting backwards from the end of the recurrence rule's frequency (week, month, or year).
            </p>
 * <p>
This attribute must only be used in conjunction with another BYxxx rule part (such as <em>daysOfTheWeek</em>).
            </p>
 * <p>
This property corresponds to <em>BYSETPOS</em> in RFC 5545.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarRecurrenceRule.prototype.setPositions = new array();

/**
 * Array to list date/time exceptions for the recurring event. (See RFC 5545, Section 3.8.5.1.)
 * <p>
This attribute is precise to the second. Milliseconds are ignored.
            </p>
 * <p>
This property corresponds to <em>EXDATE</em> in RFC 5545.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
CalendarRecurrenceRule.prototype.exceptions = new array();

/**
 * Object representing a calendar manager.
 *
 * @type CalendarManager
 */
Tizen.prototype.calendar = new CalendarManager();

/**
 * The person object.
 *
 * @super Object
 * @constructor
 * @return {Person}
 */
function Person() {};
Person.prototype = new Object();

/**
 * The fully-defined contact reference.
          <p>
It contains both the identifier of the address book which the contact is in, and
the contact identifier within this address book.
          </p>
          <p>
This interface is used by other APIs to uniquely and globally identify contacts.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactRef}
 */
function ContactRef() {};
ContactRef.prototype = new Object();

/**
 * The AddressBook interface provides methods to manage an address book.
          <p>
An address book is a collection of contacts and groups. This interface offers the following methods to manage the address book and to manipulate contacts within the address book:
          </p>
          <ul>
            <li>
<em>get()</em> - To get contacts that have a specific ID            </li>
            <li>
<em>find()</em> - To find contacts using filters            </li>
            <li>
<em>add()</em> or <em>addBatch()</em> - To add contacts to a specific address book            </li>
            <li>
<em>update()</em> or <em>updateBatch()</em> - To update contacts in a specific address book            </li>
            <li>
<em>remove()</em> or <em>removeBatch()</em> - To remove existing contacts            </li>
            <li>
<em>addChangeListener()</em> or <em>removeChangeListener()</em> - To watch for address book changes            </li>
          </ul>
          <p>
This interface also offers the following methods to manipulate groups within the address book:
          </p>
          <ul>
            <li>
<em>getGroup()</em> - To get a group having a specific ID            </li>
            <li>
<em>getGroups()</em> - To get groups in a specific address book            </li>
            <li>
<em>addGroup()</em> - To add groups to a specific address book            </li>
            <li>
<em>updateGroup()</em> - To update groups in a specific address book            </li>
            <li>
<em>removeGroup()</em> - To remove existing groups            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {AddressBook}
 */
function AddressBook() {};
AddressBook.prototype = new Object();

/**
 * The ContactName interface contains all information related to a contact name.
 *
 * @super Object
 * @constructor
 * @return {ContactName}
 */
function ContactName() {};
ContactName.prototype = new Object();

/**
 * The Contact interface is used to create a object.
 *
 * @super Object
 * @constructor
 * @return {Contact}
 */
function Contact() {};
Contact.prototype = new Object();

/**
 * The ContactPhoneNumber interface contains the number and the type of phone number.
          <p>
This interface provides the phone number and the type of number such as work, home and car or the device subtype such as fax, fixed and mobile.
When searching by phoneNumber, matchflag "CONTAINS" provides a result set which is retrieved from normalized phoneNumber as searching value.
          </p>
          <p>
For more details, see RFC 2426, Section 3.3.1
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactPhoneNumber}
 */
function ContactPhoneNumber() {};
ContactPhoneNumber.prototype = new Object();

/**
 * The ContactAddress interface contains a set of attributes that represent a particular point on the Earth's surface.
          <p>
Except isDefault and types attributes, each of the attributes of this interface are set to <var>null</var> by default.
          </p>
          <p>
For more details, see RFC 2426, Section 3.2.1.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactAddress}
 */
function ContactAddress() {};
ContactAddress.prototype = new Object();

/**
 * The AddressBookArraySuccessCallback interface defines the success callback that is called when retrieving a list of AddressBooks.
          <p>
The success callback takes an array of AddressBooks as an input
argument. It is used in the asynchronous operation to
get address books.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AddressBookArraySuccessCallback}
 */
function AddressBookArraySuccessCallback() {};
AddressBookArraySuccessCallback.prototype = new Object();

/**
 * The ContactOrganization interface contains the information about the organization or company that a contact belongs to.
          <p>
By default, each of the attributes of this interface are <var>null</var>.
          </p>
          <p>
For more details, see RFC 2426, Section 3.5.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactOrganization}
 */
function ContactOrganization() {};
ContactOrganization.prototype = new Object();

/**
 * The ContactRelationship interface contains the relationship of the contact.
          <p>
The direction of relationship is: contact (owner of relationship) is a relationship type to relative name.
See code example below.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactRelationship}
 */
function ContactRelationship() {};
ContactRelationship.prototype = new Object();

/**
 * The AddressBookChangeCallback interface provides the methods to be called for address book change notifications.
          <p>
This interface specifies a set of functions that will be invoked every time an address
book change occurs (contact addition/update/deletion).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AddressBookChangeCallback}
 */
function AddressBookChangeCallback() {};
AddressBookChangeCallback.prototype = new Object();

/**
 * The ContactManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.contact</em> object allows access to the Contact API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactManagerObject}
 */
function ContactManagerObject() {};
ContactManagerObject.prototype = new Object();

/**
 * The ContactWebSite interface contains the URL and the type of web site.
          <p>
For more details, see RFC 2426, Section 3.6.8.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactWebSite}
 */
function ContactWebSite() {};
ContactWebSite.prototype = new Object();

/**
 * The interface contains the date and description of an anniversary.
 *
 * @super Object
 * @constructor
 * @return {ContactAnniversary}
 */
function ContactAnniversary() {};
ContactAnniversary.prototype = new Object();

/**
 * The ContactEmailAddress interface contains the email address and the type of email address.
          <p>
For more details, see RFC 2426, Section 3.3.2.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactEmailAddress}
 */
function ContactEmailAddress() {};
ContactEmailAddress.prototype = new Object();

/**
 * The ContactInstantMessenger interface contains the instant messenger (IM) address and the type of IM provider.
 *
 * @super Object
 * @constructor
 * @return {ContactInstantMessenger}
 */
function ContactInstantMessenger() {};
ContactInstantMessenger.prototype = new Object();

/**
 * The ContactGroup interface that defines a group.
 *
 * @super Object
 * @constructor
 * @return {ContactGroup}
 */
function ContactGroup() {};
ContactGroup.prototype = new Object();

/**
 * The ContactManager interface provides access to the Contact API functionality.
          <p>
This interface offers a method to retrieve the address books objects.
The address book objects can be manipulated with the provided functionalities to add, remove, and update the contained information.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactManager}
 */
function ContactManager() {};
ContactManager.prototype = new Object();

/**
 * The ContactExtension interface contains the extended data of the contact.
          <p>
See code example below.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactExtension}
 */
function ContactExtension() {};
ContactExtension.prototype = new Object();

/**
 * The PersonsChangeCallback interface provides the methods to be called for change notifications.
          <p>
This interface specifies a set of functions that will be invoked every time person
list change occurs (person addition/update/deletion).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PersonsChangeCallback}
 */
function PersonsChangeCallback() {};
PersonsChangeCallback.prototype = new Object();

/**
 * The ContactArraySuccessCallback interface defines the success callback that is used for saving and retrieving a list of contacts.
          <p>
The success callback that takes an array of contacts as an input
argument. It is used in the asynchronous operation to
get or save a list of contacts.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContactArraySuccessCallback}
 */
function ContactArraySuccessCallback() {};
ContactArraySuccessCallback.prototype = new Object();

/**
 * The PersonArraySuccessCallback interface defines the success callback that is used for retrieving a list of persons.
          <p>
The success callback that takes an array of persons as an input
argument. It is used in the asynchronous operation to
get or save a list of persons.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PersonArraySuccessCallback}
 */
function PersonArraySuccessCallback() {};
PersonArraySuccessCallback.prototype = new Object();

/**
 * The identifier of the person.
 *
 * @type PersonId
 */
Person.prototype.id = new PersonId();

/**
 * The person display name as a string. It is selected from the contacts' display names.
 *
 * @type String
 */
Person.prototype.displayName = new String();

/**
 * The count of the contacts of a person.
 *
 * @type Number
 */
Person.prototype.contactCount = new Number();

/**
 * Indicates whether a person has a phone number.
 *
 * @type Boolean
 */
Person.prototype.hasPhoneNumber = new Boolean();

/**
 * Indicates whether the person has an email addresses.
 *
 * @type Boolean
 */
Person.prototype.hasEmail = new Boolean();

/**
 * Indicates whether the contact is a favorite.
 * <p>
Indicates whether the person was marked as <em>Favorite</em>.
            </p>
 * <p>
By default, this attribute is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
Person.prototype.isFavorite = new Boolean();

/**
 * The URI of a picture of a person.
 * <p>
This attribute is used to store a URI that points to an image that can represent the
person object. This attribute only contains a local file URI.
Person's photoURI is bounded to linked contacts' valid photoURI.
It means that if photoURI exists, it cannot become <var>null</var> and except the linked contact's photoURI,
any other file cannot be set as photoURI.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
Person.prototype.photoURI = new String();

/**
 * The URI of a custom ringtone for a contact.
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains a local file URI.
            </p>
 *
 * @type String
 */
Person.prototype.ringtoneURI = new String();

/**
 * The ID of a contact that represents information of the person.
 * <p>
The contact, this value is indicating, is used to show detailed information of the person.
            </p>
 *
 * @type ContactId
 */
Person.prototype.displayContactId = new ContactId();

/**
 * Aggregates another person to this person.
            <p>
Person is a meta object which aggregates contacts and to make a person, user should combine related contacts.
For this operation, link method is provided.
If "Person A" is linked to "Person B", contacts related to "Person A" are aggregated to "Person B".
After this function returns, the target "Person A" is removed from DB.
            </p>
           
 *
 * @param {PersonId} personId
 * @type void
 * @memberOf Person
 * @returns {void}
 */
Person.prototype.link = function(personId){ return; };

/**
 * Separates a contact from this person.
            <p>
Person is aggregated contacts and if a user wants to detach one contact from person, unlink method is provided.
Unlink is basically detaching a contact object from linked contacts so only a contact ID linked to the person can be used as the input parameter.
This function returns a newly created Person object that indicates the separated contact.
            </p>
           
 *
 * @param {ContactId} contactId
 * @type Person
 * @memberOf Person
 * @returns {Person}
 */
Person.prototype.unlink = function(contactId){ var ret = new Person(); return ret; };

/**
 * Gets person's usage count.
 *
 * @param {ContactUsageType} type
 * @type Number
 * @memberOf Person
 * @returns {Number}
 */
Person.prototype.getUsageCount = function(type){ var ret = new Number(); return ret; };

/**
 * Resets a person's usage count.
            <p>
If this method is successful, the person is no longer in the most frequently contacted person list.
            </p>
           
 *
 * @param {ContactUsageType} type
 * @type void
 * @memberOf Person
 * @returns {void}
 */
Person.prototype.resetUsageCount = function(type){ return; };

/**
 * The address book identifier.
 *
 * @type AddressBookId
 */
ContactRef.prototype.addressBookId = new AddressBookId();

/**
 * The contact identifier inside the address book.
 *
 * @type ContactId
 */
ContactRef.prototype.contactId = new ContactId();

/**
 * Unique identifier of the address book.
 * <p>
The value of this attribute is <var>null</var> if the address book
is the unified address book.
            </p>
 *
 * @type AddressBookId
 */
AddressBook.prototype.id = new AddressBookId();

/**
 * The address book descriptive name.
 *
 * @type String
 */
AddressBook.prototype.name = new String();

/**
 * Indicates whether the address book is read-only.
 * <p>
Some on line address books cannot be edited and will have this
flag set to <var>true</var>.
            </p>
 *
 * @type Boolean
 */
AddressBook.prototype.readOnly = new Boolean();

/**
 * Account identifier.
 *
 * @type AccountId
 */
AddressBook.prototype.accountId = new AccountId();

/**
 * Gets the contact with the specified identifier.
 *
 * @param {ContactId} id
 * @type Contact
 * @memberOf AddressBook
 * @returns {Contact}
 */
AddressBook.prototype.get = function(id){ var ret = new Contact(); return ret; };

/**
 * Adds a contact to the address book synchronously.
            <p>
If the contact is successfully inserted in the addressbook, the Contact object
will have its identifier (id attribute) set when the function returns.
This operation is done successfully, a new person object is also generated automatically.
            </p>
            <p>
If you wish to update an existing contact, call the update() method
instead. If you wish to add a copy of an existing Contact object,
call the Contact.clone() method first and pass the clone to the add() method.
            </p>
            <p>
The contact shall be added to default address book if the address book
is the unified address book.
            </p>
           
 *
 * @param {Contact} contact
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.add = function(contact){ return; };

/**
 * Adds several contacts to the address book asynchronously.
            <p>
If all the contacts are successfully added to the address book,
the success callback will be invoked, passing the list of Contact objects
that were added, with their identifier set (id attribute).
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value, the contact has any invalid value or the address book has some restrictions (such as, limitations in the size of text attributes) because of which the contact items were not added.              </li>
              <li>
UnknownError - If any other error occurs, while trying to add the contacts.              </li>
            </ul>
            <p>
If you wish to update an existing contact, call the update() method instead.
If you wish to add a copy of an existing Contact object, call Contact.clone()
method first and pass the clone to the add() method.
            </p>
            <p>
If any of the contacts cannot be added, the error callback
function that was passed in the invocation will be called.
            </p>
            <p>
The contacts shall be added to local phone address book if the address book
is the default address book.
            </p>
           
 *
 * @param {array} contacts
 * @param {ContactArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.addBatch = function(contacts, successCallback, errorCallback){ return; };

/**
 * Updates a contact in the address book synchronously.
 *
 * @param {Contact} contact
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.update = function(contact){ return; };

/**
 * Updates several existing contacts in the address book asynchronously.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the IDs parameter does not correspond to the <em>id</em> attribute of any contact in the address book.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs, while trying to add the contacts.              </li>
            </ul>
            <p>
If any of the contacts could not be updated, the error callback
function that was passed in the invocation will be called.
            </p>
           
 *
 * @param {array} contacts
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.updateBatch = function(contacts, successCallback, errorCallback){ return; };

/**
 * Removes a contact from the address book synchronously.
            <p>
Removes the contact in the address book that corresponds to the specified
identifier. This function will throw an exception if it failed to
remove the specified contact.
            </p>
           
 *
 * @param {ContactId} id
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.remove = function(id){ return; };

/**
 * Removes several contacts from the address book asynchronously.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the IDs parameter does not correspond to the <em>id</em> attribute of any contact in the address book (Otherwise, the implementation will attempt to remove the contacts that correspond to these identifiers).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to remove the contacts.              </li>
            </ul>
           
 *
 * @param {array} ids
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.removeBatch = function(ids, successCallback, errorCallback){ return; };

/**
 * Finds an array of all Contact objects from the specified address book or an array of Contact objects that match the optionally supplied filter.
            <p>
If the filter is passed and contains valid values, only those values in the
address book that match the filter criteria as specified in the AbstractFilter
interface will be returned in the successCallback. If no filter is passed, the filter
contains any invalid values, the filter is <var>null</var> or undefined, then
the implementation MUST return the full list of contact items
in the successCallback. If no contacts are available in the address book or no
contact matches the filter criteria, the successCallback will be invoked
with an empty array.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to retrieve the contacts.              </li>
            </ul>
           
 *
 * @param {ContactArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.find = function(successCallback, errorCallback, filter, sortMode){ return; };

/**
 * Subscribes to receive notifications about address book changes.
            <p>
When executed, the implementation must immediately return a subscription identifier that identifies
the watch operation. After returning the identifier, the watch operation is started
asynchronously.
            </p>
           
 *
 * @param {AddressBookChangeCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf AddressBook
 * @returns {Number}
 */
AddressBook.prototype.addChangeListener = function(successCallback, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes an address book change watch operation.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process MUST immediately stop and no further callbacks MUST be
invoked. If the watchId argument is not valid or does not correspond to a
valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.removeChangeListener = function(watchId){ return; };

/**
 * Gets the group with the specified identifier.
 *
 * @param {ContactGroupId} groupId
 * @type ContactGroup
 * @memberOf AddressBook
 * @returns {ContactGroup}
 */
AddressBook.prototype.getGroup = function(groupId){ var ret = new ContactGroup(); return ret; };

/**
 * Adds a group to the address book.
            <p>
If the group is successfully inserted in the addressbook, the Group object
will have its identifier (id attribute) set when the function returns.
            </p>
            <p>
The group shall be added to local phone address book if the address book
is the default address book.
            </p>
           
 *
 * @param {ContactGroup} group
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.addGroup = function(group){ return; };

/**
 * Updates a group in the address book.
 *
 * @param {ContactGroup} group
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.updateGroup = function(group){ return; };

/**
 * Removes a group from the address book.
            <p>
Removes the group in the address book that corresponds to the specified identifier. This method will throw an exception if it failed to remove the specified group.
            </p>
           
 *
 * @param {ContactGroupId} groupId
 * @type void
 * @memberOf AddressBook
 * @returns {void}
 */
AddressBook.prototype.removeGroup = function(groupId){ return; };

/**
 * Gets an array of all ContactGroup objects from the specified address book.
 *
 * @type array
 * @memberOf AddressBook
 * @returns {array}
 */
AddressBook.prototype.getGroups = function(){ var ret = new array(); return ret; };

/**
 * The name prefix of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.prefix = new String();

/**
 * The name suffix of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.suffix = new String();

/**
 * The first (given) name of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.firstName = new String();

/**
 * The middle name of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.middleName = new String();

/**
 * The last (family) name of a contact.
 * <p>
By default, this attribute is initialized to
<var>null</var>. See also RFC 2426, Section 3.1.1.
            </p>
 *
 * @type String
 */
ContactName.prototype.lastName = new String();

/**
 * The nicknames of a contact.
 * <p>
The nickname is a name used instead of, or in addition to, the given name of a contact,
place, or thing. It can also be used to specify a familiar form of a proper name.
            </p>
 * <p>
By default, this attribute is initialized to an empty array.
            </p>
 * <p>
In case multiple nicknames are available the first one is the default.
See RFC 2426, Section 3.1.3.
            </p>
 *
 * @type array
 */
ContactName.prototype.nicknames = new array();

/**
 * The phonetic first name of a contact.
 * <p>
Describes how the first name should be
pronounced. This is very important in
some languages, such as Japanese, because the
same "Kanji" may have several pronunciations.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactName.prototype.phoneticFirstName = new String();

/**
 * The phonetic middle name of a contact.
 * <p>
Describes how the middle name should be
pronounced. This is very important in
some languages, such as Japanese, because the
same "Kanji" may have several pronunciations.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactName.prototype.phoneticMiddleName = new String();

/**
 * The phonetic last name of a contact.
 * <p>
Describes how the last name should be
pronounced. This is very important in
some languages, such as Japanese, because the
same "Kanji" may have several pronunciations.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactName.prototype.phoneticLastName = new String();

/**
 * The display name of a contact.
 * <p>
The string which can be displayed to identify the contact. It is composed of the first
and last names if available, otherwise, it will fall back to the most adequate
field available to identify the contact (such as nickname).
            </p>
 * <p>
By default, this attribute is set to <var>null</var>. Initially, once a contact is added to an address book, this value is composed.
            </p>
 *
 * @type String
 */
ContactName.prototype.displayName = new String();

/**
 * The identifier of a Raw contact.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type ContactId
 */
Contact.prototype.id = new ContactId();

/**
 * The identifier of the person corresponding to the raw contact.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type PersonId
 */
Contact.prototype.personId = new PersonId();

/**
 * The identifier of the address book that corresponds to the raw contact. By default, this attribute is set to .
 *
 * @type AddressBookId
 */
Contact.prototype.addressBookId = new AddressBookId();

/**
 * The timestamp for the last update of a contact.
 * <p>
Specifies revision information about the contact.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>. Initially, once a contact is added to an address book, this value is the same as the creation date.
For more details, see RFC 2426, Section 3.6.4.
            </p>
 *
 * @type Date
 */
Contact.prototype.lastUpdated = new Date();

/**
 * Indicates whether a contact is favorite.
 * <p>
This value is associated with the <em>isFavorite</em> attribute of Person that this contact indicates.
            </p>
 * <p>
By default, this attribute is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
Contact.prototype.isFavorite = new Boolean();

/**
 * The name of a contact.
 *
 * @type ContactName
 */
Contact.prototype.name = new ContactName();

/**
 * The contact addresses.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.addresses = new array();

/**
 * The URI to the picture of the contact.
 * <p>
This attribute is used to store a URI that points to an image that can represent the
contact object. This attribute only contains a local file URI.
See RFC 2426, Section 3.1.4.
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
Contact.prototype.photoURI = new String();

/**
 * The telephone numbers of the contact.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.phoneNumbers = new array();

/**
 * The email addresses of the contact.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.emails = new array();

/**
 * The instant messenger addresses of the contact.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.messengers = new array();

/**
 * The relationships of the contact.
 * <p>
The direction of relationship is: contact (owner of relationship) is a relationship type to relative name.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.relationships = new array();

/**
 * The extended data of the contact.
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.extensions = new array();

/**
 * The birthday of the contact.
 * <p>
Date specification of the birthday of the contact (see RFC 2426 Section 3.1.5).
            </p>
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type Date
 */
Contact.prototype.birthday = new Date();

/**
 * The list of anniversaries for the contact.
 * <p>
Defines arbitrary anniversaries for the contact (in addition to the birthday).
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
Contact.prototype.anniversaries = new array();

/**
 * The organizations the contact belongs to.
 * <p>
Contains information related to the contact's company or organization.
            </p>
 * <p>
For more details, see RFC 2426, Section 3.5.
            </p>
 *
 * @type array
 */
Contact.prototype.organizations = new array();

/**
 * The notes associated to the contact.
 * <p>
To specify supplemental information or a comment related to the contact.
            </p>
 * <p>
For more details, see RFC 2426, Section 3.6.2.
            </p>
 *
 * @type array
 */
Contact.prototype.notes = new array();

/**
 * The URLs associated to the contact.
 * <p>
By default, this attribute is initialized to an empty array.
            </p>
 * <p>
In case multiple URLs are available, the first one is the default one.
For more details, see RFC 2426, Section 3.6.8.
            </p>
 *
 * @type array
 */
Contact.prototype.urls = new array();

/**
 * The URI to the custom ringtone for the contact.
 * <p>
To specify a custom ringtone for the contact.
            </p>
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains a local file URI scheme;
For more details, see RFC 2426, Section 3.6.6.
            </p>
 *
 * @type String
 */
Contact.prototype.ringtoneURI = new String();

/**
 * The URI of a custom message alert for a contact.
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains a local file URI.
            </p>
 *
 * @type String
 */
Contact.prototype.messageAlertURI = new String();

/**
 * The URI of a custom vibration alert for a contact.
 * <p>
Vibration patterns in .ivt files are accepted. If an invalid file is set the default vibration alert will be used.
            </p>
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains a local file URI.
            </p>
 *
 * @type String
 */
Contact.prototype.vibrationURI = new String();

/**
 * The groups the contact belongs to.
 * <p>
To associate groups to the contact.
            </p>
 * <p>
By default, this attribute is initialized to an empty array.
            </p>
 * <p>
In case multiple categories are available, the first one is the default one.
See RFC 2426, Section 3.6.1.
            </p>
 *
 * @type array
 */
Contact.prototype.groupIds = new array();

/**
 * Converts the Contact item to a string format.
            <p>
A textual representation for the contact will be generated and returned synchronously.
The export format is set via the format parameter.
            </p>
           
 *
 * @param {ContactTextFormat} format
 * @type String
 * @memberOf Contact
 * @returns {String}
 */
Contact.prototype.convertToString = function(format){ var ret = new String(); return ret; };

/**
 * Creates a clone of the Contact object, detached from any address book.
            <p>
The Contact object returned by the <var>clone()</var> method will have its identifier
set to <var>null</var> and will be detached from any address book.
            </p>
           
 *
 * @type Contact
 * @memberOf Contact
 * @returns {Contact}
 */
Contact.prototype.clone = function(){ var ret = new Contact(); return ret; };

/**
 * The full phone number.
 *
 * @type String
 */
ContactPhoneNumber.prototype.number = new String();

/**
 * The default state of the phone number.
 * <p>
Indicates whether the phone number was marked as <em>default</em> for the contact.
Only one phone number for a person can have the default property,
so that this attribute might be changed without explicit modification
according to the policy of platform.
            </p>
 * <p>
It deals with the "pref" TYPE on RFC 2426, Section 3.3.1
            </p>
 * <p>
By default, this attribute is set to false.
            </p>
 *
 * @type Boolean
 */
ContactPhoneNumber.prototype.isDefault = new Boolean();

/**
 * The case insensitive list of phone types, as defined in RFC 2426.
 * <p>
Specifies the intended use of the phone number.
            </p>
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>- Indicates a work number
 * <li>- Indicates a home number
 * <li>- Indicates a voice number (Default)
 * <li>- Indicates a facsimile number
 * <li>- Indicates a messaging service on the number
 * <li>- Indicates a cellular number
 * <li>- Indicates a pager number
 * <li>- Indicates a bulletin board service number
 * <li>- Indicates a MODEM number
 * <li>- Indicates a car-phone number
 * <li>- Indicates an ISDN number
 * <li>- Indicates a video-phone number
 * <li>- Personal Communication Standard
 * <li>- Indicates assistant number
 * <li>- Indicates other type of number
 * <li>- Indicates custom type of number. The actual type can be set in the label.
 * </ul>
 *
 * @type array
 */
ContactPhoneNumber.prototype.types = new array();

/**
 * The phone number label, can hold a custom phone number type.
 * <p>
By default, this attribute is initialized to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactPhoneNumber.prototype.label = new String();

/**
 * The country of the address.
 * <p>
It is recommended that the country is specified
using the two-letter [ISO 3166-1] code.
            </p>
 *
 * @type String
 */
ContactAddress.prototype.country = new String();

/**
 * The name of a country subdivision.
 * <p>
For example, State (United States) or Province (Spain).
            </p>
 *
 * @type String
 */
ContactAddress.prototype.region = new String();

/**
 * The name of the locality. For example, the city, county, town, or village.
 *
 * @type String
 */
ContactAddress.prototype.city = new String();

/**
 * The street address, for example, building number and street name/number.
 *
 * @type String
 */
ContactAddress.prototype.streetAddress = new String();

/**
 * Additional address details that are required for an accurate address. For example, floor number, apartment number, suite name, the name of an office occupant, and so on.
 *
 * @type String
 */
ContactAddress.prototype.additionalInformation = new String();

/**
 * The postal code of the location (also known as the zip code in the US).
 *
 * @type String
 */
ContactAddress.prototype.postalCode = new String();

/**
 * The default state of an address.
 * <p>
Indicates whether the address was marked as <em>default</em> for the contact.
The only one among addresses for a person can have default property,
so that this attribute might be changed without explicit modification
according to the policy of platform.
            </p>
 * <p>
It deals with the "pref" TYPE on RFC 2426, Section 3.2.1.
            </p>
 * <p>
By default, this attribute is set to <var>false</var>.
            </p>
 *
 * @type Boolean
 */
ContactAddress.prototype.isDefault = new Boolean();

/**
 * The case insensitive list of address types.
 * <p>
For more details, see RFC 2426, Section 3.2.1.
            </p>
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>WORK - Indicates a work address
 * <li>HOME - Indicates a home address
 * <li>OTHER - Indicates other type of address
 * <li>CUSTOM - Indicates custom type of address. The actual type can be set in the label.
 * </ul>
 * <p>
By default, this attribute is set to HOME.
            </p>
 *
 * @type array
 */
ContactAddress.prototype.types = new array();

/**
 * The address label, can hold a custom address type.
 * <p>
By default, this attribute is initialized to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactAddress.prototype.label = new String();

/**
 * Called when a list of address books is retrieved successfully.
 *
 * @param {array} addressbooks
 * @type void
 * @memberOf AddressBookArraySuccessCallback
 * @returns {void}
 */
AddressBookArraySuccessCallback.prototype.onsuccess = function(addressbooks){ return; };

/**
 * The name of an organization.
 * <p>
For more details, see RFC 2426, Section 3.5.5.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.name = new String();

/**
 * The organizational unit name.
 * <p>
For more details, see RFC 2426, Section 3.5.5.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.department = new String();

/**
 * The job title.
 * <p>
To specify the job title, functional position or function (such as "Director,
Research and Development").
            </p>
 * <p>
For more details, see RFC 2426, Section 3.5.1.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.title = new String();

/**
 * An attribute to store the role, occupation, or business category (such as "Programmer").
 * <p>
For more details, see RFC 2426, Section 3.5.2.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.role = new String();

/**
 * The URI to the logo of a company.
 * <p>
To specify a graphic image of a logo associated with an organization.
This attribute only contains file URI Scheme;
remote pictures could be loaded to local with Download API.
For more details, see RFC 2426, Section 3.5.3.
            </p>
 *
 * @type String
 */
ContactOrganization.prototype.logoURI = new String();

/**
 * The name of the person in a particular relationship.
 *
 * @type String
 */
ContactRelationship.prototype.relativeName = new String();

/**
 * The relationship type.
 * <p>
By default, this attribute is set to "OTHER".
            </p>
 *
 * @type ContactRelationshipType
 */
ContactRelationship.prototype.type = new ContactRelationshipType();

/**
 * The relationship label, can hold a custom relationship type.
 * <p>
By default, this attribute is initialized to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactRelationship.prototype.label = new String();

/**
 * Called when contacts are added to the address book.
 *
 * @param {array} contacts
 * @type void
 * @memberOf AddressBookChangeCallback
 * @returns {void}
 */
AddressBookChangeCallback.prototype.oncontactsadded = function(contacts){ return; };

/**
 * Called when contacts are updated in the address book.
 *
 * @param {array} contacts
 * @type void
 * @memberOf AddressBookChangeCallback
 * @returns {void}
 */
AddressBookChangeCallback.prototype.oncontactsupdated = function(contacts){ return; };

/**
 * Called when contacts are deleted from the address book.
 *
 * @param {array} contactIds
 * @type void
 * @memberOf AddressBookChangeCallback
 * @returns {void}
 */
AddressBookChangeCallback.prototype.oncontactsremoved = function(contactIds){ return; };

/**
 * Object representing a contact manager.
 *
 * @type ContactManager
 */
ContactManagerObject.prototype.contact = new ContactManager();

/**
 * The URL for the contact's web site.
 *
 * @type String
 */
ContactWebSite.prototype.url = new String();

/**
 * The type of web site.
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>HOMEPAGE - Indicates a home page.
 * <li>BLOG - Indicates a blog.
 * </ul>
 * <p>
By default, this attribute is set to HOMEPAGE.
            </p>
 *
 * @type String
 */
ContactWebSite.prototype.type = new String();

/**
 * The date of an anniversary.
 *
 * @type Date
 */
ContactAnniversary.prototype.date = new Date();

/**
 * The text describing an anniversary.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactAnniversary.prototype.label = new String();

/**
 * The full email address.
 *
 * @type String
 */
ContactEmailAddress.prototype.email = new String();

/**
 * The default state of an email address.
 * <p>
Indicates whether the email address was marked as <em>default</em> for the contact.
Only one email address for a person can have the default property,
so that this attribute might be changed without explicit modification
according to the policy of platform.
            </p>
 * <p>
It deals with the "pref" TYPE on RFC 2426, Section 3.3.2
            </p>
 * <p>
By default, this attribute is set to false.
            </p>
 *
 * @type Boolean
 */
ContactEmailAddress.prototype.isDefault = new Boolean();

/**
 * The case insensitive list of email types.
 * <p>
Specifies the intended use of the email address.
            </p>
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>WORK - Indicates a work email
 * <li>HOME - Indicates a home email
 * <li>MOBILE - Indicates a mobile email
 * <li>OTHER - Indicates other type of email
 * <li>CUSTOM - Indicates custom type of email. The actual type can be set in the label.
 * </ul>
 * <p>
By default, this attribute is set to WORK.
            </p>
 *
 * @type array
 */
ContactEmailAddress.prototype.types = new array();

/**
 * The email label, can hold a custom email type.
 * <p>
By default, this attribute is initialized to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactEmailAddress.prototype.label = new String();

/**
 * The full instant messenger address.
 *
 * @type String
 */
ContactInstantMessenger.prototype.imAddress = new String();

/**
 * The instant messenger provider type.
 * <p>
By default, this attribute is set to "OTHER".
            </p>
 *
 * @type ContactInstantMessengerType
 */
ContactInstantMessenger.prototype.type = new ContactInstantMessengerType();

/**
 * The instant messenger label, can hold a custom messenger type.
 * <p>
By default, this attribute is initialized to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactInstantMessenger.prototype.label = new String();

/**
 * The identifier of a group.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type ContactGroupId
 */
ContactGroup.prototype.id = new ContactGroupId();

/**
 * The identifier of the address book that the group belongs to.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type AddressBookId
 */
ContactGroup.prototype.addressBookId = new AddressBookId();

/**
 * The name of a group.
 *
 * @type String
 */
ContactGroup.prototype.name = new String();

/**
 * The URI to the custom ringtone for a group.
 * <p>
To specify a custom ringtone for a group.
            </p>
 * <p>
By default, this attribute is initialized to <var>null</var>.
This attribute only contains a local file URI.
            </p>
 *
 * @type String
 */
ContactGroup.prototype.ringtoneURI = new String();

/**
 * The URI that points to an image that can represent the object. This attribute only contains a local file URI.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
ContactGroup.prototype.photoURI = new String();

/**
 * The flag indicating whether the group can be modified or removed. Some groups cannot be edited if this flag is set to .
 * <p>
By default, this attribute is set to false.
            </p>
 *
 * @type String
 */
ContactGroup.prototype.readOnly = new String();

/**
 * Gets the available address books.
            <p>
If the operation completes successfully, the successCallback must
be invoked with the phone address book and the SIM address book (if any).
Other address books present in the device should also be returned.
            </p>
            <p>
If no address book is present, the <em>successCallback</em> will be invoked with an empty array.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any error occurs while trying to get the address books              </li>
            </ul>
           
 *
 * @param {AddressBookArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.getAddressBooks = function(successCallback, errorCallback){ return; };

/**
 * Gets the aggregation of all address books.
            <p>
The unified address book is a logical address book that represents an aggregation of all address books
that are obtained by getAddressBooks() and contains all contacts in the address books.
Note that the unified address book does not have an address book ID
and it is set to <var>null</var>.
            </p>
           
 *
 * @type AddressBook
 * @memberOf ContactManager
 * @returns {AddressBook}
 */
ContactManager.prototype.getUnifiedAddressBook = function(){ var ret = new AddressBook(); return ret; };

/**
 * Gets the default address book.
            <p>
The default address book is one of the addressBooks that is the appointed addressbook from platform or operator.
            </p>
           
 *
 * @type AddressBook
 * @memberOf ContactManager
 * @returns {AddressBook}
 */
ContactManager.prototype.getDefaultAddressBook = function(){ var ret = new AddressBook(); return ret; };

/**
 * Adds an addressbook to the contact database synchronously.
            <p>
If the addressbook is successfully inserted in the database, the AddressBook object
will have its identifier (id attribute) set when the function returns.
            </p>
           
 *
 * @param {AddressBook} addressBook
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.addAddressBook = function(addressBook){ return; };

/**
 * Removes an address book from the contact database synchronously.
            <p>
Removes the address book in the database that corresponds to the specified
identifier. The function will throw an exception if it failed to remove
the specified addressbook.
            </p>
           
 *
 * @param {AddressBookId} addressBookId
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.removeAddressBook = function(addressBookId){ return; };

/**
 * Gets the address book with the specified identifier.
 *
 * @param {AddressBookId} addressBookId
 * @type AddressBook
 * @memberOf ContactManager
 * @returns {AddressBook}
 */
ContactManager.prototype.getAddressBook = function(addressBookId){ var ret = new AddressBook(); return ret; };

/**
 * Gets the person with the specified identifier.
            <p>
If the operation completes successfully, it must return the
person with the specified identifier.
            </p>
           
 *
 * @param {PersonId} personId
 * @type Person
 * @memberOf ContactManager
 * @returns {Person}
 */
ContactManager.prototype.get = function(personId){ var ret = new Person(); return ret; };

/**
 * Updates a person in the address book synchronously.
 *
 * @param {Person} person
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.update = function(person){ return; };

/**
 * Updates several existing persons in the contact DB asynchronously.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the IDs parameter does not correspond to the <em>id</em> attribute of any person in the contact DB.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs, while trying to add the persons.              </li>
            </ul>
            <p>
If the details of any persons cannot be updated, the error callback function that was passed in the invocation will be called.
            </p>
           
 *
 * @param {array} persons
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.updateBatch = function(persons, successCallback, errorCallback){ return; };

/**
 * Removes a person from the contact DB synchronously.
            <p>
Removes the person that corresponds to the specified identifier and the contacts related to the person as well. This function will throw an exception if it fails to remove the specified person.
            </p>
           
 *
 * @param {PersonId} personId
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.remove = function(personId){ return; };

/**
 * Removes persons from contact DB asynchronously.
            <p>
Removes the persons that correspond to the specified identifiers as well as the contacts related to them.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If an identifier in the <em>personIds</em> parameter does not correspond to the ID of any person in the contact DB. (Otherwise, the implementation will attempt to remove the contacts corresponding to these identifiers).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to remove the persons.              </li>
            </ul>
           
 *
 * @param {array} personIds
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.removeBatch = function(personIds, successCallback, errorCallback){ return; };

/**
 * Gets an array of all objects from the contact DB or the ones that match the optionally supplied filter.
            <p>
If the filter is passed and contains valid values, only those values in the
address book that match the filter criteria as specified in the AbstractFilter
interface will be returned in the successCallback. If no filter is passed, the filter
contains any invalid values, the filter is <var>null</var> or undefined, then
the implementation must return the full list of contact items
in the successCallback. If no persons are available in the contact DB or no
person matches the filter criteria, the successCallback will be invoked
with an empty array.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs while trying to retrieve the persons.              </li>
            </ul>
           
 *
 * @param {PersonArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.find = function(successCallback, errorCallback, filter, sortMode){ return; };

/**
 * Gets an array of objects from the contact DB which match the supplied filter. This method is for filtering usageCount property of Person objects.
            <p>
If the filter is passed and contains valid value, only this value in the
address book that match the filter criteria as specified in the ContactUsageCountFilter
interface will be returned in the successCallback. If no persons are available in the contact DB or no
person matches the filter criteria, the successCallback will be invoked
with an empty array. The attributeName in filter must be one of <a href="#ContactUsageType">ContactUsageType</a> value.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
            </ul>
           
 *
 * @param {ContactUsageCountFilter} filter
 * @param {PersonArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {SortModeOrder} sortModeOrder
 * @param {Number} limit
 * @param {Number} offset
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.findByUsageCount = function(filter, successCallback, errorCallback, sortModeOrder, limit, offset){ return; };

/**
 * Subscribes to receive notifications about person changes.
            <p>
When executed, the implementation must immediately return a subscription identifier that identifies
the watch operation. After returning the identifier, the watch operation is started
asynchronously.
            </p>
           
 *
 * @param {PersonsChangeCallback} successCallback
 * @type Number
 * @memberOf ContactManager
 * @returns {Number}
 */
ContactManager.prototype.addChangeListener = function(successCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes to person changes watch operation.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process must immediately stop and no further callbacks MUST be
invoked. If the watchId argument is not valid or does not correspond to a
valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ContactManager
 * @returns {void}
 */
ContactManager.prototype.removeChangeListener = function(watchId){ return; };

/**
 * The extended data of a contact.
 *
 * @type Number
 */
ContactExtension.prototype.data1 = new Number();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data2 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data3 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data4 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data5 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data6 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data7 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data8 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data9 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data10 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data11 = new String();

/**
 * The extended data of a contact.
 *
 * @type String
 */
ContactExtension.prototype.data12 = new String();

/**
 * Called when persons are added to the person list.
 *
 * @param {array} persons
 * @type void
 * @memberOf PersonsChangeCallback
 * @returns {void}
 */
PersonsChangeCallback.prototype.onpersonsadded = function(persons){ return; };

/**
 * Called when persons are updated in the person list.
 *
 * @param {array} persons
 * @type void
 * @memberOf PersonsChangeCallback
 * @returns {void}
 */
PersonsChangeCallback.prototype.onpersonsupdated = function(persons){ return; };

/**
 * Called when persons are deleted from the person list.
 *
 * @param {array} personIds
 * @type void
 * @memberOf PersonsChangeCallback
 * @returns {void}
 */
PersonsChangeCallback.prototype.onpersonsremoved = function(personIds){ return; };

/**
 * Called when a list of contacts is retrieved successfully.
 *
 * @param {array} contacts
 * @type void
 * @memberOf ContactArraySuccessCallback
 * @returns {void}
 */
ContactArraySuccessCallback.prototype.onsuccess = function(contacts){ return; };

/**
 * Called when a list of persons is retrieved successfully.
 *
 * @param {array} persons
 * @type void
 * @memberOf PersonArraySuccessCallback
 * @returns {void}
 */
PersonArraySuccessCallback.prototype.onsuccess = function(persons){ return; };

/**
 * Object representing a contact manager.
 *
 * @type ContactManager
 */
Tizen.prototype.contact = new ContactManager();

/**
 * The ThumbnailSuccessCallback interface specifies a success callback that is invoked when a content's thumbnail is successfully created.
 *
 * @super Object
 * @constructor
 * @return {ThumbnailSuccessCallback}
 */
function ThumbnailSuccessCallback() {};
ThumbnailSuccessCallback.prototype = new Object();

/**
 * This interface specifies a set of methods that are invoked every time a content change occurs.
 *
 * @super Object
 * @constructor
 * @return {ContentChangeCallback}
 */
function ContentChangeCallback() {};
ContentChangeCallback.prototype = new Object();

/**
 * The ImageContent interface extends a basic object with image-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {ImageContent}
 */
function ImageContent() {};
ImageContent.prototype = new Content();

/**
 * The callback function used to return a list of content objects.
 *
 * @super Object
 * @constructor
 * @return {ContentArraySuccessCallback}
 */
function ContentArraySuccessCallback() {};
ContentArraySuccessCallback.prototype = new Object();

/**
 * The ContentDirectory interface provides access to properties of a content directory.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectory}
 */
function ContentDirectory() {};
ContentDirectory.prototype = new Object();

/**
 * The callback function used to return a list of ContentDirectory objects.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectoryArraySuccessCallback}
 */
function ContentDirectoryArraySuccessCallback() {};
ContentDirectoryArraySuccessCallback.prototype = new Object();

/**
 * The Content interface provides access to the properties of a content item.
 *
 * @super Object
 * @constructor
 * @return {Content}
 */
function Content() {};
Content.prototype = new Object();

/**
 * Defines what is instantiated by the Tizen object.
          <p>
The <em>tizen.content</em> object allows accessing the functionality of the Content module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContentManagerObject}
 */
function ContentManagerObject() {};
ContentManagerObject.prototype = new Object();

/**
 * The PlaylistSuccessCallback interface specifies a success callback that is invoked when a new playlist is successfully created.
          <p>
It is used in <em>tizen.content.createPlaylist()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistSuccessCallback}
 */
function PlaylistSuccessCallback() {};
PlaylistSuccessCallback.prototype = new Object();

/**
 * The ContentManager interface provides operations to retrieve and manipulate content.
 *
 * @super Object
 * @constructor
 * @return {ContentManager}
 */
function ContentManager() {};
ContentManager.prototype = new Object();

/**
 * The PlaylistItemArraySuccessCallback interface specifies a success callback that is invoked when a list of playlist items are successfully retrieved.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItemArraySuccessCallback}
 */
function PlaylistItemArraySuccessCallback() {};
PlaylistItemArraySuccessCallback.prototype = new Object();

/**
 * The VideoContent interface extends a basic object with video-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {VideoContent}
 */
function VideoContent() {};
VideoContent.prototype = new Content();

/**
 * The PlaylistArraySuccessCallback interface specifies a success callback that is invoked when all existing playlists are retrieved successfully.
          <p>
It is used in <em>tizen.content.getPlaylists()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistArraySuccessCallback}
 */
function PlaylistArraySuccessCallback() {};
PlaylistArraySuccessCallback.prototype = new Object();

/**
 * The callback function used to return content or content directory to scan.
 *
 * @super Object
 * @constructor
 * @return {ContentScanSuccessCallback}
 */
function ContentScanSuccessCallback() {};
ContentScanSuccessCallback.prototype = new Object();

/**
 * The AudioContentLyrics interface provides lyrics for music.
 *
 * @super Object
 * @constructor
 * @return {AudioContentLyrics}
 */
function AudioContentLyrics() {};
AudioContentLyrics.prototype = new Object();

/**
 * The Playlist interface represents a playlist.
 *
 * @super Object
 * @constructor
 * @return {Playlist}
 */
function Playlist() {};
Playlist.prototype = new Object();

/**
 * The AudioContent interface extends a basic object with audio-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {AudioContent}
 */
function AudioContent() {};
AudioContent.prototype = new Content();

/**
 * The PlaylistItem interface represents a playlist item.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItem}
 */
function PlaylistItem() {};
PlaylistItem.prototype = new Object();

/**
 * Called when the method completes successfully.
 *
 * @param {String} path
 * @type void
 * @memberOf ThumbnailSuccessCallback
 * @returns {void}
 */
ThumbnailSuccessCallback.prototype.onsuccess = function(path){ return; };

/**
 * Called when content is added.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentadded = function(content){ return; };

/**
 * Called when content is updated.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentupdated = function(content){ return; };

/**
 * Called when content is removed.
 *
 * @param {ContentId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentremoved = function(id){ return; };

/**
 * Called when a content directory is added.
 *
 * @param {ContentDirectory} contentDir
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentdiradded = function(contentDir){ return; };

/**
 * Called when a content directory is updated.
 *
 * @param {ContentDirectory} contentDir
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentdirupdated = function(contentDir){ return; };

/**
 * Called when a content directory is removed.
 *
 * @param {ContentDirectoryId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentdirremoved = function(id){ return; };

/**
 * The geographical location where the image has been made.
 * <p>
The attribute is marked as read-only since Tizen 5.5. Modifying it or its attributes has no effect.
            </p>
 *
 * @type SimpleCoordinates
 */
ImageContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The width of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.width = new Number();

/**
 * The height of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.height = new Number();

/**
 * The image orientation.
 * <p>
The attribute is marked as read-only since Tizen 5.5.
            </p>
 *
 * @type ImageContentOrientation
 */
ImageContent.prototype.orientation = new ImageContentOrientation();

/**
 * Called when the list of content is retrieved successfully.
 *
 * @param {array} contents
 * @type void
 * @memberOf ContentArraySuccessCallback
 * @returns {void}
 */
ContentArraySuccessCallback.prototype.onsuccess = function(contents){ return; };

/**
 * The opaque content directory identifier.
 *
 * @type ContentDirectoryId
 */
ContentDirectory.prototype.id = new ContentDirectoryId();

/**
 * The directory path on the device.
 *
 * @type String
 */
ContentDirectory.prototype.directoryURI = new String();

/**
 * The directory name.
 *
 * @type String
 */
ContentDirectory.prototype.title = new String();

/**
 * The type of device storage.
 *
 * @type ContentDirectoryStorageType
 */
ContentDirectory.prototype.storageType = new ContentDirectoryStorageType();

/**
 * The last modified date for a directory.
 *
 * @type Date
 */
ContentDirectory.prototype.modifiedDate = new Date();

/**
 * Called when the directory list is retrieved successfully.
 *
 * @param {array} directories
 * @type void
 * @memberOf ContentDirectoryArraySuccessCallback
 * @returns {void}
 */
ContentDirectoryArraySuccessCallback.prototype.onsuccess = function(directories){ return; };

/**
 * The list of attributes that are editable to the local backend using the update() or updateBatch() method.
 *
 * @type array
 */
Content.prototype.editableAttributes = new array();

/**
 * The opaque content identifier.
 *
 * @type ContentId
 */
Content.prototype.id = new ContentId();

/**
 * The content name. The initial value is the file name of the content.
 * <p>
The attribute is marked as read-only since Tizen 5.5.
            </p>
 *
 * @type String
 */
Content.prototype.name = new String();

/**
 * The content type.
 *
 * @type ContentType
 */
Content.prototype.type = new ContentType();

/**
 * The content MIME type.
 *
 * @type String
 */
Content.prototype.mimeType = new String();

/**
 * The content title.
 *
 * @type String
 */
Content.prototype.title = new String();

/**
 * The URI to access the content.
 *
 * @type String
 */
Content.prototype.contentURI = new String();

/**
 * The array of content thumbnail URIs.
 *
 * @type array
 */
Content.prototype.thumbnailURIs = new array();

/**
 * The date when content has been released publicly. If only the release year is known, then the month and date are set to January and 1st respectively.
 *
 * @type Date
 */
Content.prototype.releaseDate = new Date();

/**
 * The last modified date for a content item.
 *
 * @type Date
 */
Content.prototype.modifiedDate = new Date();

/**
 * The file size of the content in bytes.
 *
 * @type Number
 */
Content.prototype.size = new Number();

/**
 * The content description.
 * <p>
The attribute is marked as read-only since Tizen 5.5.
            </p>
 *
 * @type String
 */
Content.prototype.description = new String();

/**
 * The content rating. This value can range from to .
 * <p>
The attribute is marked as read-only since Tizen 5.5.
            </p>
 *
 * @type Number
 */
Content.prototype.rating = new Number();

/**
 * Boolean value that indicates whether a content item is marked as a favorite.
 *
 * @type Boolean
 */
Content.prototype.isFavorite = new Boolean();

/**
 * Object representing a content manager.
 *
 * @type ContentManager
 */
ContentManagerObject.prototype.content = new ContentManager();

/**
 * Called when the method completes successfully.
 *
 * @param {Playlist} playlist
 * @type void
 * @memberOf PlaylistSuccessCallback
 * @returns {void}
 */
PlaylistSuccessCallback.prototype.onsuccess = function(playlist){ return; };

/**
 * Updates attributes of content in the content database synchronously.
            <p>
When an application has changed some attributes of the content, this method allows
writing it back to the content database.
            </p>
           
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.update = function(content){ return; };

/**
 * Updates a batch of content attributes in the content database asynchronously.
            <p>
When an application has changed any attributes in the array of content, this method allows writing them
back to the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {array} contents
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.updateBatch = function(contents, successCallback, errorCallback){ return; };

/**
 * Gets a list of content directories.
            <p>
This method returns (via callback) a list of content directory objects. To obtain a list of contents
in a specific directory, use the find() method with the directory ID.
            </p>
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentDirectoryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getDirectories = function(successCallback, errorCallback){ return; };

/**
 * Finds contents that satisfy the conditions set by a filter.
            <p>
This method allows searching based on a supplied filter. For more details on AbstractFilter, see the
<a href="tizen.html#::Tizen::AbstractFilter">Tizen</a> module. The filter allows precise searching such
as "return all songs by artist U2, ordered by name".
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ContentDirectoryId} directoryId
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.find = function(successCallback, errorCallback, directoryId, filter, sortMode, count, offset){ return; };

/**
 * Scans a file to create or update content in the content database.
            <p>
When an application creates or updates content, this method allows to scan it
and then insert or update the content in the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error detected asynchronously              </li>
              <li>
NotSupportedError: In case of trying to scan content of not supported type (since 4.0)              </li>
            </ul>
           
 *
 * @param {String} contentURI
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanFile = function(contentURI, successCallback, errorCallback){ return; };

/**
 * Scans a content directory to create or update content in the content database.
            <p>
When an application creates or updates content in a directory, this method allows
to scan it and then insert or update the content in the content database.
If a directory must not be scanned, the file <em>.scan_ignore</em> has to be created in it.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error detected asynchronously              </li>
            </ul>
           
 *
 * @param {String} contentDirURI
 * @param {Boolean} recursive
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanDirectory = function(contentDirURI, recursive, successCallback, errorCallback){ return; };

/**
 * Cancels a scan process of a content directory.
            <p>
When a scan of a given directory is running it may be canceled by this function.
            </p>
           
 *
 * @param {String} contentDirURI
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.cancelScanDirectory = function(contentDirURI){ return; };

/**
 * Adds a listener which receives notifications when content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type Number
 * @memberOf ContentManager
 * @returns {Number}
 */
ContentManager.prototype.addChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Removes a listener which receives notifications about content changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.removeChangeListener = function(listenerId){ return; };

/**
 * Sets a listener to receive notifications of content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.setChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to unsubscribe from receiving notifications for content changes.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.unsetChangeListener = function(){ return; };

/**
 * Gets all playlists.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Creates a new playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If <var>name</var> is empty or is same as the name of an existing playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {PlaylistSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Playlist} sourcePlaylist
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.createPlaylist = function(name, successCallback, errorCallback, sourcePlaylist){ return; };

/**
 * Removes a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.removePlaylist = function(id, successCallback, errorCallback){ return; };

/**
 * Creates a content's thumbnail.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case of invalid content object.              </li>
              <li>
AbortError: In case of any error.              </li>
            </ul>
           
 *
 * @param {Content} content
 * @param {ThumbnailSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.createThumbnail = function(content, successCallback, errorCallback){ return; };

/**
 * Called when the method completes successfully.
 *
 * @param {array} items
 * @type void
 * @memberOf PlaylistItemArraySuccessCallback
 * @returns {void}
 */
PlaylistItemArraySuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * The geographical location where the video has been made.
 * <p>
The attribute is marked as read-only since Tizen 5.5. Modifying it or its attributes has no effect.
            </p>
 *
 * @type SimpleCoordinates
 */
VideoContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The album name to which the video belongs.
 *
 * @type String
 */
VideoContent.prototype.album = new String();

/**
 * The list of artists who created the video.
 *
 * @type array
 */
VideoContent.prototype.artists = new array();

/**
 * The video duration in milliseconds.
 *
 * @type Number
 */
VideoContent.prototype.duration = new Number();

/**
 * The width of a video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.width = new Number();

/**
 * The height of the video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.height = new Number();

/**
 * Called when the method completes successfully.
 *
 * @param {array} playlists
 * @type void
 * @memberOf PlaylistArraySuccessCallback
 * @returns {void}
 */
PlaylistArraySuccessCallback.prototype.onsuccess = function(playlists){ return; };

/**
 * Called when the scanning has been completed.
 *
 * @param {String} uri
 * @type void
 * @memberOf ContentScanSuccessCallback
 * @returns {void}
 */
ContentScanSuccessCallback.prototype.onsuccess = function(uri){ return; };

/**
 * The type of lyrics, that is, whether they are synchronized with the music.
 *
 * @type AudioContentLyricsType
 */
AudioContentLyrics.prototype.type = new AudioContentLyricsType();

/**
 * The array of timestamps in milliseconds for lyrics.
 * <p>
If the lyrics are not synchronized (if there is no time information for the lyrics) the array is undefined.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.timestamps = new array();

/**
 * The array of lyrics snippets.
 * <p>
If the lyrics are not synchronized, the array has only one member with full lyrics.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.texts = new array();

/**
 * Identifier of a playlist.
 *
 * @type PlaylistId
 */
Playlist.prototype.id = new PlaylistId();

/**
 * Name of a playlist (case sensitive and unique).
 * <p>
When <var>name</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.name = new String();

/**
 * Number of playlist items in the playlist.
 *
 * @type Number
 */
Playlist.prototype.numberOfTracks = new Number();

/**
 * Thumbnail URI of a playlist.
 * <p>
By default, this attribute is set to <var>null</var>. <br/>When <var>thumbnailURI</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.thumbnailURI = new String();

/**
 * Adds a content item to a playlist.
            <p>
See code example for the <em>createPlaylist()</em> method.
            </p>
           
 *
 * @param {Content} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.add = function(item){ return; };

/**
 * Adds tracks to a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.addBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Removes a track from a playlist.
 *
 * @param {PlaylistItem} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.remove = function(item){ return; };

/**
 * Removes tracks from a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.removeBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Gets playlist items from a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value (e.g <em>count</em> or <em>offset</em> is a negative number)              </li>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.get = function(successCallback, errorCallback, count, offset){ return; };

/**
 * Changes the play order of all playlist items in the playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist, or the <em>items</em> array does not contain all items from the playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.setOrder = function(items, successCallback, errorCallback){ return; };

/**
 * Moves the specified item up or down a specified amount in the play order.
            <p>
If <var>current index + delta</var> is:
            </p>
            <ul>
              <li>
<var>&lt; 0</var> then the item is moved to the first position in the playlist              </li>
              <li>
<var>≥ number of tracks</var> then the item is moved to the last position in the playlist              </li>
            </ul>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist or some item of this playlist is not included in <em>items</em>              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {PlaylistItem} item
 * @param {Number} delta
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.move = function(item, delta, successCallback, errorCallback){ return; };

/**
 * The album name to which the audio belongs.
 *
 * @type String
 */
AudioContent.prototype.album = new String();

/**
 * The list of genres to which the audio belongs.
 *
 * @type array
 */
AudioContent.prototype.genres = new array();

/**
 * The list of artists who created the audio.
 *
 * @type array
 */
AudioContent.prototype.artists = new array();

/**
 * The list of composers for the music.
 *
 * @type array
 */
AudioContent.prototype.composers = new array();

/**
 * The lyrics of a song in an audio file.
 *
 * @type AudioContentLyrics
 */
AudioContent.prototype.lyrics = new AudioContentLyrics();

/**
 * The copyright information.
 *
 * @type String
 */
AudioContent.prototype.copyright = new String();

/**
 * The audio bitrate in bits per second. By default, this value is .
 *
 * @type Number
 */
AudioContent.prototype.bitrate = new Number();

/**
 * The track number if the audio belongs to an album.
 *
 * @type Number
 */
AudioContent.prototype.trackNumber = new Number();

/**
 * The audio duration in milliseconds.
 *
 * @type Number
 */
AudioContent.prototype.duration = new Number();

/**
 * Content contained in this playlist item.
 *
 * @type Content
 */
PlaylistItem.prototype.content = new Content();

/**
 * Object representing a content manager.
 *
 * @type ContentManager
 */
Tizen.prototype.content = new ContentManager();

/**
 * The ConsoleManager interface embodies Console module methods.
 *
 * @super Object
 * @constructor
 * @return {ConsoleManager}
 */
function ConsoleManager() {};
ConsoleManager.prototype = new Object();

/**
 * 
          <p>
The ConsoleManagerObject interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ConsoleManagerObject}
 */
function ConsoleManagerObject() {};
ConsoleManagerObject.prototype = new Object();

/**
 * Prints a line of text to a standard output. The text will be logged as a standard message.
 *
 * @param {String} text
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.log = function(text){ return; };

/**
 * Prints a line of text to a standard output. The text will be logged as an error message.
 *
 * @param {String} text
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.error = function(text){ return; };

/**
 * Prints a line of text to a standard output. The text will be logged as a warning message.
 *
 * @param {String} text
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.warn = function(text){ return; };

/**
 * Prints a line of text to a standard output. The text will be logged as an info message.
 *
 * @param {String} text
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.info = function(text){ return; };

/**
 * Prints a line of text to a standard output. The text will be logged as a debug message.
 *
 * @param {String} text
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.debug = function(text){ return; };

/**
 * If the specified expression is false, the message is written to the console.
 *
 * @param {Boolean} expression
 * @param {String} message
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.assert = function(expression, message){ return; };

/**
 * Prints a JavaScript representation of the specified object. If the object being logged is an HTML element, the JavaScript Object view is forced.
 *
 * @param {Object} obj
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.dir = function(obj){ return; };

/**
 * Prints an XML/HTML Element representation of the specified object if possible or the JavaScript Object if it is not.
 *
 * @param {Object} obj
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.dirxml = function(obj){ return; };

/**
 * Starts a new timer with an associated label. When is called with the same label, the timer is stopped and the elapsed time is displayed in the console. Timer values are accurate to the sub-millisecond.
 *
 * @param {String} label
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.time = function(label){ return; };

/**
 * Stops the timer with the specified label and prints the elapsed time.
 *
 * @param {String} label
 * @type void
 * @memberOf ConsoleManager
 * @returns {void}
 */
ConsoleManager.prototype.timeEnd = function(label){ return; };

/**
 * The Console module provides function to access the console. Original documentation: .
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type ConsoleManager
 */
ConsoleManagerObject.prototype.console = new ConsoleManager();

/**
 * The Console module provides function to access the console. Original documentation: .
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type ConsoleManager
 */
Window.prototype.console = new ConsoleManager();

/**
 * See .
 *
 * @super Object
 * @constructor
 * @return {DOMException}
 */
function DOMException() {};
DOMException.prototype = new Object();

/**
 * The Cordova interface defines what is instantiated by the cordova object
 *
 * @super Object
 * @constructor
 * @return {Cordova}
 */
function Cordova() {};
Cordova.prototype = new Object();

/**
 * Basic error callback.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Basic success callback, no parameters.
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * CordovaManagerObject implemented in Window
 *
 * @super Object
 * @constructor
 * @return {CordovaManagerObject}
 */
function CordovaManagerObject() {};
CordovaManagerObject.prototype = new Object();

/**
 * The number representing the type of the error.
 *
 * @type Number
 */
DOMException.prototype.code = new Number();

/**
 * The short text representing the type of the error.
 *
 * @type String
 */
DOMException.prototype.name = new String();

/**
 * A text containing information about the error.
 *
 * @type String
 */
DOMException.prototype.message = new String();

/**
 * Success
 *
 * @param {DOMException} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * Success
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This API provides common Cordova functionality.
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type Cordova
 */
CordovaManagerObject.prototype.cordova = new Cordova();

/**
 * This API provides common Cordova functionality.
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type Cordova
 */
Window.prototype.cordova = new Cordova();

/**
 * The Accelerometer object captures device motion in the x, y, and z direction.
 *
 * @super Object
 * @constructor
 * @return {Accelerometer}
 */
function Accelerometer() {};
Accelerometer.prototype = new Object();

/**
 * Basic error callback.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * The AccelerometerSuccessCallback interface provides a SuccessCallback for the getCurrentAcceleration and watchAcceleration methods.
 *
 * @super Object
 * @constructor
 * @return {AccelerometerSuccessCallback}
 */
function AccelerometerSuccessCallback() {};
AccelerometerSuccessCallback.prototype = new Object();

/**
 * Contains Accelerometer data captured at a specific point in time. Acceleration values include the effect of gravity (9.81 m/s^2), so that when a device lies flat and facing up, x, y, and z values returned should be 0, 0, and 9.81.
 *
 * @super Object
 * @constructor
 * @return {Acceleration}
 */
function Acceleration() {};
Acceleration.prototype = new Object();

/**
 * The object allows access to the functionality of the DeviceMotion API.
 *
 * @super Object
 * @constructor
 * @return {AccelerometerManagerObject}
 */
function AccelerometerManagerObject() {};
AccelerometerManagerObject.prototype = new Object();

/**
 * Gets the current acceleration along the x, y, and z axes.
 *
 * @param {AccelerometerSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf Accelerometer
 * @returns {void}
 */
Accelerometer.prototype.getCurrentAcceleration = function(onsuccess, onerror){ return; };

/**
 * Gets the acceleration along the x, y, and z axes at a regular interval.
 *
 * @param {AccelerometerSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {AccelerationOptions} options
 * @type String
 * @memberOf Accelerometer
 * @returns {String}
 */
Accelerometer.prototype.watchAcceleration = function(onsuccess, onerror, options){ var ret = new String(); return ret; };

/**
 * Stop watching the Acceleration referenced by the watchID parameter.
 *
 * @param {String} watchID
 * @type void
 * @memberOf Accelerometer
 * @returns {void}
 */
Accelerometer.prototype.clearWatch = function(watchID){ return; };

/**
 * Success
 *
 * @param {DOMException} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * 
 *
 * @param {Acceleration} acceleration
 * @type void
 * @memberOf AccelerometerSuccessCallback
 * @returns {void}
 */
AccelerometerSuccessCallback.prototype.onsuccess = function(acceleration){ return; };

/**
 * Amount of acceleration on the x-axis. (in m/s^2)
 *
 * @type Number
 */
Acceleration.prototype.x = new Number();

/**
 * Amount of acceleration on the y-axis. (in m/s^2)
 *
 * @type Number
 */
Acceleration.prototype.y = new Number();

/**
 * Amount of acceleration on the z-axis. (in m/s^2)
 *
 * @type Number
 */
Acceleration.prototype.z = new Number();

/**
 * Creation timestamp in milliseconds.
 *
 * @type Number
 */
Acceleration.prototype.timestamp = new Number();

/**
 * This plugin provides access to the device's accelerometer. The accelerometer is a motion sensor that detects the change (delta) in movement relative to the current device orientation, in three dimensions along the x, y, and z axis.
 * <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/3.0.0/cordova/accelerometer/accelerometer.html">Cordova Accelerometer</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @feature http://tizen.org/feature/sensor.accelerometer
 * @type Accelerometer
 */
AccelerometerManagerObject.prototype.accelerometer = new Accelerometer();

/**
 * This plugin provides access to the device's accelerometer. The accelerometer is a motion sensor that detects the change (delta) in movement relative to the current device orientation, in three dimensions along the x, y, and z axis.
 * <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/3.0.0/cordova/accelerometer/accelerometer.html">Cordova Accelerometer</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @feature http://tizen.org/feature/sensor.accelerometer
 * @type Accelerometer
 */
Navigator.prototype.accelerometer = new Accelerometer();

/**
 * The object allows access to the functionality of the Device API.
 *
 * @super Object
 * @constructor
 * @return {DeviceManagerObject}
 */
function DeviceManagerObject() {};
DeviceManagerObject.prototype = new Object();

/**
 * The device object describes the device's hardware and software.
 *
 * @super Object
 * @constructor
 * @return {Device}
 */
function Device() {};
Device.prototype = new Object();

/**
 * This plugin defines a global device object, which describes the device's hardware and software. Although the object is in the global scope, it is not available until the deviceready event.
 * <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/3.0.0/cordova/device/device.html">Cordova Device</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type Device
 */
DeviceManagerObject.prototype.device = new Device();

/**
 * Returns the version of Cordova running on the device.
 *
 * @type String
 */
Device.prototype.cordova = new String();

/**
 * Get the the name of the device's model or product. The value is set by the device manufacturer and may be different across versions of the same product.
 *
 * @type String
 */
Device.prototype.model = new String();

/**
 * Get the device's operating system name.
 *
 * @type String
 */
Device.prototype.platform = new String();

/**
 * Get the device's Universally Unique Identifier (UUID). The details of how a UUID is generated are determined by the device manufacturer and are specific to the device's platform or model.
 *
 * @type String
 */
Device.prototype.uuid = new String();

/**
 * Get the operating system version.
 *
 * @type String
 */
Device.prototype.version = new String();

/**
 * This plugin defines a global device object, which describes the device's hardware and software. Although the object is in the global scope, it is not available until the deviceready event.
 * <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/3.0.0/cordova/device/device.html">Cordova Device</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type Device
 */
Window.prototype.device = new Device();

/**
 * The callback function used to return data from prompt dialog.
 *
 * @super Object
 * @constructor
 * @return {PromptCallback}
 */
function PromptCallback() {};
PromptCallback.prototype = new Object();

/**
 * The callback function used to return index of pressed button of confirm dialog.
 *
 * @super Object
 * @constructor
 * @return {ConfirmCallback}
 */
function ConfirmCallback() {};
ConfirmCallback.prototype = new Object();

/**
 * The interface provides methods for global operations related to notifications to the user.
 *
 * @super Object
 * @constructor
 * @return {DialogsManager}
 */
function DialogsManager() {};
DialogsManager.prototype = new Object();

/**
 * The interface defines what is instantiated in the object.
          <p>
The <em>navigator.notification</em> object allows access to the Dialogs API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DialogsManagerObject}
 */
function DialogsManagerObject() {};
DialogsManagerObject.prototype = new Object();

/**
 * The object returned from prompt dialog.
 *
 * @super Object
 * @constructor
 * @return {PromptData}
 */
function PromptData() {};
PromptData.prototype = new Object();

/**
 * Called when the user perform action on prompt dialog.
 *
 * @param {PromptData} data
 * @type void
 * @memberOf PromptCallback
 * @returns {void}
 */
PromptCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the user perform action on confirm dialog.
 *
 * @param {Number} buttonIndex
 * @type void
 * @memberOf ConfirmCallback
 * @returns {void}
 */
ConfirmCallback.prototype.onsuccess = function(buttonIndex){ return; };

/**
 * Shows a custom alert with one button.
 *
 * @param {String} message
 * @param {SuccessCallback} alertCallback
 * @param {String} title
 * @param {String} buttonName
 * @type void
 * @memberOf DialogsManager
 * @returns {void}
 */
DialogsManager.prototype.alert = function(message, alertCallback, title, buttonName){ return; };

/**
 * Shows a custom confirm box with set of buttons.
 *
 * @param {String} message
 * @param {ConfirmCallback} confirmCallback
 * @param {String} title
 * @param {array} buttonNames
 * @type void
 * @memberOf DialogsManager
 * @returns {void}
 */
DialogsManager.prototype.confirm = function(message, confirmCallback, title, buttonNames){ return; };

/**
 * Shows a custom confirm box with set of buttons.
 *
 * @param {String} message
 * @param {PromptCallback} promptCallback
 * @param {String} title
 * @param {array} buttonNames
 * @param {String} defaultText
 * @type void
 * @memberOf DialogsManager
 * @returns {void}
 */
DialogsManager.prototype.prompt = function(message, promptCallback, title, buttonNames, defaultText){ return; };

/**
 * Method allows to make custom number of beeps by device.
 *
 * @param {Number} times
 * @type void
 * @memberOf DialogsManager
 * @returns {void}
 */
DialogsManager.prototype.beep = function(times){ return; };

/**
 * This plugin provides the ability to make different types of notifications to the user.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-dialogs">Cordova Dialogs</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type DialogsManager
 */
DialogsManagerObject.prototype.notification = new DialogsManager();

/**
 * The index of button, which was pressed by user. the index uses one-based indexing, so the values could be 1, 2, 3, etc.
 *
 * @type Number
 */
PromptData.prototype.buttonIndex = new Number();

/**
 * The text entered by user in the prompt of dialog box.
 *
 * @type String
 */
PromptData.prototype.input1 = new String();

/**
 * This plugin provides the ability to make different types of notifications to the user.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-dialogs">Cordova Dialogs</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type DialogsManager
 */
Navigator.prototype.notification = new DialogsManager();

/**
 * Callback for the event which fires when an application is put into the background
          <p>
The <var>pause</var> event fires when the native platform puts the application into the background, typically when the user switches to a different application.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#pause">Cordova pause event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PauseEventCallback}
 */
function PauseEventCallback() {};
PauseEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when Cordova is fully loaded
          <p>
The <var>domready</var> event is essential to any application. It signals that Cordova's device APIs have loaded and are ready to access.
          </p>
          <p>
Cordova consists of two code bases: native and JavaScript. While the native code loads, a custom loading image displays. However, JavaScript only loads once the DOM loads. This means the web app may potentially call a Cordova JavaScript function before the corresponding native code becomes available.
          </p>
          <p>
The deviceready event fires once Cordova has fully loaded. Once the event fires, you can safely make calls to Cordova APIs. Applications typically attach an event listener with document.addEventListener once the HTML document's DOM has loaded.
          </p>
          <p>
The deviceready event behaves somewhat differently from others. Any event handler registered after the deviceready event fires has its callback function called immediately.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#deviceready">Cordova deviceready event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DeviceReadyEventCallback}
 */
function DeviceReadyEventCallback() {};
DeviceReadyEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the volume down button
          <p>
If you need to override the default volume down behavior you can register an event listener for the <var>volumedownbutton</var> event.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#volumedownbutton">Cordova volumedownbutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {VolumeDownButtonEventCallback}
 */
function VolumeDownButtonEventCallback() {};
VolumeDownButtonEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when an application is retrieved from the background
          <p>
The <var>resume</var> event fires when the native platform pulls the application out from the background.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#resume">Cordova resume event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ResumeEventCallback}
 */
function ResumeEventCallback() {};
ResumeEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the end call button
          <p>
The <var>endcallbutton</var> event overrides the default end call behavior.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#endcallbutton">Cordova endcallbutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {EndCallButtonEventCallback}
 */
function EndCallButtonEventCallback() {};
EndCallButtonEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the start call button
          <p>
If you need to override the default start call behavior you can register an event listener for the <var>startcallbutton</var> event.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#startcallbutton">Cordova startcallbutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {StartCallEventCallback}
 */
function StartCallEventCallback() {};
StartCallEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the search button
          <p>
If you need to override the default search button behavior on Android you can register an event listener for the <var>searchbutton</var> event.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#searchbutton">Cordova searchbutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SearchButtonEventCallback}
 */
function SearchButtonEventCallback() {};
SearchButtonEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the volume up button
          <p>
If you need to override the default volume up behavior you can register an event listener for the <var>volumeupbutton</var> event.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#volumeupbutton">Cordova volumeupbutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {VolumeUpButtonEventCallback}
 */
function VolumeUpButtonEventCallback() {};
VolumeUpButtonEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the back button
          <p>
To override the default back-button behavior, register an event listener for the backbutton event, typically by calling document.addEventListener() once you receive the <a href="#DeviceReadyEventCallback">deviceready</a> event.
It is no longer necessary to call any other method to override the back-button behavior.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#backbutton">Cordova backbutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BackButtonEventCallback}
 */
function BackButtonEventCallback() {};
BackButtonEventCallback.prototype = new Object();

/**
 * Callback for the event which fires when the user presses the menu button
          <p>
Applying an event handler for the <var>menubutton</var> event overrides the default menu button behavior.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://cordova.apache.org/dohttp://127.0.0.1:63492/help/topic/latest/cordova/events/events.html#menubutton">Cordova menubutton event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MenuButtonEventCallback}
 */
function MenuButtonEventCallback() {};
MenuButtonEventCallback.prototype = new Object();

/**
 * Called when an application is put into the background.
 *
 * @type void
 * @memberOf PauseEventCallback
 * @returns {void}
 */
PauseEventCallback.prototype.onpause = function(){ return; };

/**
 * Called when Cordova is fully loaded.
 *
 * @type void
 * @memberOf DeviceReadyEventCallback
 * @returns {void}
 */
DeviceReadyEventCallback.prototype.ondeviceready = function(){ return; };

/**
 * Called when user presses the volume down button.
 *
 * @type void
 * @memberOf VolumeDownButtonEventCallback
 * @returns {void}
 */
VolumeDownButtonEventCallback.prototype.onvolumedownbutton = function(){ return; };

/**
 * Called when an application is retrieved from the background.
 *
 * @type void
 * @memberOf ResumeEventCallback
 * @returns {void}
 */
ResumeEventCallback.prototype.onresume = function(){ return; };

/**
 * Called when user presses the end call button.
 *
 * @type void
 * @memberOf EndCallButtonEventCallback
 * @returns {void}
 */
EndCallButtonEventCallback.prototype.onendcallbutton = function(){ return; };

/**
 * Called when user presses the start call button.
 *
 * @type void
 * @memberOf StartCallEventCallback
 * @returns {void}
 */
StartCallEventCallback.prototype.onstartcallbutton = function(){ return; };

/**
 * Called when user presses the search button.
 *
 * @type void
 * @memberOf SearchButtonEventCallback
 * @returns {void}
 */
SearchButtonEventCallback.prototype.onsearchbutton = function(){ return; };

/**
 * Called when user presses the volume up button.
 *
 * @type void
 * @memberOf VolumeUpButtonEventCallback
 * @returns {void}
 */
VolumeUpButtonEventCallback.prototype.onvolumeupbutton = function(){ return; };

/**
 * Called when user presses the back button.
 *
 * @type void
 * @memberOf BackButtonEventCallback
 * @returns {void}
 */
BackButtonEventCallback.prototype.onbackbutton = function(){ return; };

/**
 * Called when user presses the menu button.
 *
 * @type void
 * @memberOf MenuButtonEventCallback
 * @returns {void}
 */
MenuButtonEventCallback.prototype.onmenubutton = function(){ return; };

/**
 * The FileTransfer object provides a way to upload files using an HTTP multi-part POST or PUT request, and to download files as well.
 *
 * @super Object
 * @constructor
 * @return {FileTransfer}
 */
function FileTransfer() {};
FileTransfer.prototype = new Object();

/**
 * The interface that defines a callback function which is called when an upload is successfully finished.
 *
 * @super Object
 * @constructor
 * @return {FileUploadSuccessCallback}
 */
function FileUploadSuccessCallback() {};
FileUploadSuccessCallback.prototype = new Object();

/**
 * A FileUploadResult object is passed to the success callback of the FileTransfer object's upload() method.
 *
 * @super Object
 * @constructor
 * @return {FileUploadResult}
 */
function FileUploadResult() {};
FileUploadResult.prototype = new Object();

/**
 * A FileUploadOptions object can be passed to the FileTransfer objects upload method in order to specify additional parameters to the upload script
 *
 * @super Object
 * @constructor
 * @return {FileUploadOptions}
 */
function FileUploadOptions() {};
FileUploadOptions.prototype = new Object();

/**
 * The interface that defines an error callback function which is called when an error occur.
 *
 * @super Object
 * @constructor
 * @return {FileTransferErrorCallback}
 */
function FileTransferErrorCallback() {};
FileTransferErrorCallback.prototype = new Object();

/**
 * The interface that defines a callback function which is called when download is successfully finished.
 *
 * @super Object
 * @constructor
 * @return {FileDownloadSuccessCallback}
 */
function FileDownloadSuccessCallback() {};
FileDownloadSuccessCallback.prototype = new Object();

/**
 * A FileTransferError object is passed to an error callback when an error occurs.
 *
 * @super Object
 * @constructor
 * @return {FileTransferError}
 */
function FileTransferError() {};
FileTransferError.prototype = new Object();

/**
 * Called with a ProgressEvent whenever a new chunk of data is transferred.
 *
 * @type ProgressCallback
 */
FileTransfer.prototype.onprogress = new ProgressCallback();

/**
 * Sends a file to a server.
 *
 * @param {String} fileURL
 * @param {String} server
 * @param {FileUploadSuccessCallback} successCallback
 * @param {FileTransferErrorCallback} errorCallback
 * @param {FileUploadOptions} options
 * @param {Boolean} trustAllHosts
 * @type void
 * @memberOf FileTransfer
 * @returns {void}
 */
FileTransfer.prototype.upload = function(fileURL, server, successCallback, errorCallback, options, trustAllHosts){ return; };

/**
 * Downloads a file from a server.
 *
 * @param {String} source
 * @param {String} target
 * @param {FileDownloadSuccessCallback} successCallback
 * @param {FileTransferErrorCallback} errorCallback
 * @param {Boolean} trustAllHosts
 * @param {FileDownloadOptions} options
 * @type void
 * @memberOf FileTransfer
 * @returns {void}
 */
FileTransfer.prototype.download = function(source, target, successCallback, errorCallback, trustAllHosts, options){ return; };

/**
 * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError object which has an error code of FileTransferError.ABORT_ERR.
 *
 * @type void
 * @memberOf FileTransfer
 * @returns {void}
 */
FileTransfer.prototype.abort = function(){ return; };

/**
 * Called when upload is successfully finished.
 *
 * @param {FileUploadResult} result
 * @type void
 * @memberOf FileUploadSuccessCallback
 * @returns {void}
 */
FileUploadSuccessCallback.prototype.onsuccess = function(result){ return; };

/**
 * The number of bytes sent to the server as part of the upload.
 *
 * @type Number
 */
FileUploadResult.prototype.bytesSent = new Number();

/**
 * The HTTP response code returned by the server.
 *
 * @type Number
 */
FileUploadResult.prototype.responseCode = new Number();

/**
 * The HTTP response returned by the server.
 *
 * @type String
 */
FileUploadResult.prototype.response = new String();

/**
 * The HTTP response headers by the server.
 *
 * @type HeaderFields
 */
FileUploadResult.prototype.headers = new HeaderFields();

/**
 * The name of the form element. Defaults to file
 *
 * @type String
 */
FileUploadOptions.prototype.fileKey = new String();

/**
 * The file name to use when saving the file on the server. Defaults to image.jpg.
 *
 * @type String
 */
FileUploadOptions.prototype.fileName = new String();

/**
 * The HTTP method to use - either PUT or POST. Defaults to POST.
 *
 * @type String
 */
FileUploadOptions.prototype.httpMethod = new String();

/**
 * The mime type of the data to upload. Defaults to image/jpeg.
 *
 * @type String
 */
FileUploadOptions.prototype.mimeType = new String();

/**
 * A set of optional key/value pairs to pass in the HTTP request.
 *
 * @type FileUploadParams
 */
FileUploadOptions.prototype.params = new FileUploadParams();

/**
 * Whether to upload the data in chunked streaming mode. Defaults to true.
 *
 * @type Boolean
 */
FileUploadOptions.prototype.chunkedMode = new Boolean();

/**
 * A map of header name/header values. Use an array to specify more than one value.
 *
 * @type HeaderFields
 */
FileUploadOptions.prototype.headers = new HeaderFields();

/**
 * Called when file transfer is finished with an error
 *
 * @param {FileTransferError} error
 * @type void
 * @memberOf FileTransferErrorCallback
 * @returns {void}
 */
FileTransferErrorCallback.prototype.onerror = function(error){ return; };

/**
 * Called when download is successfully finished.
 *
 * @param {FileEntry} file
 * @type void
 * @memberOf FileDownloadSuccessCallback
 * @returns {void}
 */
FileDownloadSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * File Not Found error.
 *
 * @type Number
 */
FileTransferError.FILE_NOT_FOUND_ERR = new Number();

/**
 * Invalid URL error.
 *
 * @type Number
 */
FileTransferError.INVALID_URL_ERR = new Number();

/**
 * Connection error.
 *
 * @type Number
 */
FileTransferError.CONNECTION_ERR = new Number();

/**
 * Abort error.
 *
 * @type Number
 */
FileTransferError.ABORT_ERR = new Number();

/**
 * Not Modified error.
 *
 * @type Number
 */
FileTransferError.NOT_MODIFIED_ERR = new Number();

/**
 * One of the predefined error codes listed above.
 *
 * @type Number
 */
FileTransferError.prototype.code = new Number();

/**
 * URL to the source.
 *
 * @type String
 */
FileTransferError.prototype.source = new String();

/**
 * URL to the target.
 *
 * @type String
 */
FileTransferError.prototype.target = new String();

/**
 * HTTP status code. This attribute is only available when a response code is received from the HTTP connection.
 *
 * @type Number
 */
FileTransferError.prototype.http_status = new Number();

/**
 * Response body. This attribute is only available when a response is received from the HTTP connection.
 *
 * @type String
 */
FileTransferError.prototype.body = new String();

/**
 * Either e.getMessage or e.toString
 *
 * @type String
 */
FileTransferError.prototype._exception = new String();

/**
 * The MetadataCallback interface.
 *
 * @super Object
 * @constructor
 * @return {MetadataCallback}
 */
function MetadataCallback() {};
MetadataCallback.prototype = new Object();

/**
 * The FileReader interface provides access to capabilities of reading objects.
 *
 * @super Object
 * @constructor
 * @return {FileReader}
 */
function FileReader() {};
FileReader.prototype = new Object();

/**
 * The File interface provides access to file's properties. File object could be created with using of method.
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * This interface provides object that represents a file system.
 *
 * @super Object
 * @constructor
 * @return {FileSystem}
 */
function FileSystem() {};
FileSystem.prototype = new Object();

/**
 * The interface that indicates progression event.
 *
 * @super Object
 * @constructor
 * @return {ProgressEvent}
 */
function ProgressEvent() {};
ProgressEvent.prototype = new Object();

/**
 * The FileSystemCallback interface.
 *
 * @super Object
 * @constructor
 * @return {FileSystemCallback}
 */
function FileSystemCallback() {};
FileSystemCallback.prototype = new Object();

/**
 * The DirectoryReader interface provides access to the Filesystem API.
 *
 * @super Object
 * @constructor
 * @return {DirectoryReader}
 */
function DirectoryReader() {};
DirectoryReader.prototype = new Object();

/**
 * This interface provides a way to obtain and objects.
 *
 * @super Object
 * @constructor
 * @return {LocalFileSystem}
 */
function LocalFileSystem() {};
LocalFileSystem.prototype = new Object();

/**
 * The Entry interface.
 *
 * @super Object
 * @constructor
 * @return {Entry}
 */
function Entry() {};
Entry.prototype = new Object();

/**
 * The DirectoryEntry interface provides access to the Filesystem API.
 *
 * @super Object
 * @constructor
 * @return {DirectoryEntry}
 */
function DirectoryEntry() {};
DirectoryEntry.prototype = new Entry();

/**
 * The EntryCallback interface.
 *
 * @super Object
 * @constructor
 * @return {EntryCallback}
 */
function EntryCallback() {};
EntryCallback.prototype = new Object();

/**
 * The EntriesCallback interface.
 *
 * @super Object
 * @constructor
 * @return {EntriesCallback}
 */
function EntriesCallback() {};
EntriesCallback.prototype = new Object();

/**
 * File Error
 *
 * @super Object
 * @constructor
 * @return {FileError}
 */
function FileError() {};
FileError.prototype = new Object();

/**
 * This interface supplies information about the state of a file or directory.
 *
 * @super Object
 * @constructor
 * @return {Metadata}
 */
function Metadata() {};
Metadata.prototype = new Object();

/**
 * The interface that defines a callback function which is called with the ProgressEvent object.
 *
 * @super Object
 * @constructor
 * @return {ProgressCallback}
 */
function ProgressCallback() {};
ProgressCallback.prototype = new Object();

/**
 * The ErrorCallback interface.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * The FileSystemManagerObject interface defines what is instantiated by the Cordova object.
          <p>
There is a <em>cordova.file</em> object that allows accessing the functionality of the Filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * FileWriter interface allows to create and write data to file.
 *
 * @super Object
 * @constructor
 * @return {FileWriter}
 */
function FileWriter() {};
FileWriter.prototype = new Object();

/**
 * The FileWriterCallback interface.
 *
 * @super Object
 * @constructor
 * @return {FileWriterCallback}
 */
function FileWriterCallback() {};
FileWriterCallback.prototype = new Object();

/**
 * The FileEntry interface provides access to the Filesystem API.
 *
 * @super Object
 * @constructor
 * @return {FileEntry}
 */
function FileEntry() {};
FileEntry.prototype = new Entry();

/**
 * The FileCallback interface.
 *
 * @super Object
 * @constructor
 * @return {FileCallback}
 */
function FileCallback() {};
FileCallback.prototype = new Object();

/**
 * The VoidCallback interface.
 *
 * @super Object
 * @constructor
 * @return {VoidCallback}
 */
function VoidCallback() {};
VoidCallback.prototype = new Object();

/**
 * The FileSystemManager interface provides access to the Filesystem API.
          <p>
This manager interface exposes the Filesystem base API constants.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * Used to supply file or directory metadata as a response to a user query.
 *
 * @param {Metadata} metadata
 * @type void
 * @memberOf MetadataCallback
 * @returns {void}
 */
MetadataCallback.prototype.handleEvent = function(metadata){ return; };

/**
 * The FileReader object has been constructed, and there are no pending reads. None of the read methods have been called. This is the default state of a newly minted FileReader object, until one of the read methods have been called on it.
 *
 * @type Number
 */
FileReader.EMPTY = new Number();

/**
 * A File or Blob is being read. One of the read methods is being processed, and no error has occurred during the read.
 *
 * @type Number
 */
FileReader.LOADING = new Number();

/**
 * The entire File or Blob has been read into memory, OR a file error occurred during read, OR the read was aborted using abort(). The FileReader is no longer reading a File or Blob. If readyState is set to DONE it means at least one of the read methods have been called on this FileReader.
 *
 * @type Number
 */
FileReader.DONE = new Number();

/**
 * The state of FileReader. Possible values are , or .
 *
 * @type Number
 */
FileReader.prototype.readyState = new Number();

/**
 * The contents of the file, that have been read. Returns a Blob's data as a DOMString, or byte[], or null, depending on the read method that has been called on the FileReader. It is if any errors occurred.
 *
 * @type ReadResultData
 */
FileReader.prototype.result = new ReadResultData();

/**
 * An object describing error, if any occurred.
 *
 * @type FileError
 */
FileReader.prototype.error = new FileError();

/**
 * Callback, which is triggered, when the read starts.
 *
 * @type ProgressCallback
 */
FileReader.prototype.onloadstart = new ProgressCallback();

/**
 * Callback, which is triggered, when the read has successfully completed.
 *
 * @type ProgressCallback
 */
FileReader.prototype.onload = new ProgressCallback();

/**
 * Callback, which is triggered, when the read has been aborted. For instance, by invoking the abort() method.
 *
 * @type ProgressCallback
 */
FileReader.prototype.onabort = new ProgressCallback();

/**
 * Callback, which is triggered, when the read has failed.
 *
 * @type ProgressCallback
 */
FileReader.prototype.onerror = new ProgressCallback();

/**
 * Callback, which is triggered, when the request has completed (either in success or failure).
 *
 * @type ProgressCallback
 */
FileReader.prototype.onloadend = new ProgressCallback();

/**
 * Aborts current operation of reading file.
 *
 * @type void
 * @memberOf FileReader
 * @returns {void}
 */
FileReader.prototype.abort = function(){ return; };

/**
 * Reads file and return data as a base64-encoded data URL.
 *
 * @param {Blob} blob
 * @type void
 * @memberOf FileReader
 * @returns {void}
 */
FileReader.prototype.readAsDataURL = function(blob){ return; };

/**
 * Reads text file.
 *
 * @param {Blob} blob
 * @param {String} label
 * @type void
 * @memberOf FileReader
 * @returns {void}
 */
FileReader.prototype.readAsText = function(blob, label){ return; };

/**
 * Reads file as binary and returns a binary string.
 *
 * @param {Blob} blob
 * @type void
 * @memberOf FileReader
 * @returns {void}
 */
FileReader.prototype.readAsBinaryString = function(blob){ return; };

/**
 * Reads file as an array buffer and result would be .
 *
 * @param {Blob} blob
 * @type void
 * @memberOf FileReader
 * @returns {void}
 */
FileReader.prototype.readAsArrayBuffer = function(blob){ return; };

/**
 * The name of the file.
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of the file, including the name.
 *
 * @type String
 */
File.prototype.localURL = new String();

/**
 * The mime type of the file.
 *
 * @type String
 */
File.prototype.type = new String();

/**
 * The last modified date of the file.
 *
 * @type Date
 */
File.prototype.lastModified = new Date();

/**
 * The size of the file in bytes.
 *
 * @type Number
 */
File.prototype.size = new Number();

/**
 * This is the name of the file system.
 * <p>
The specifics of naming filesystems is unspecified, but a name must be unique across the list of exposed file systems.
            </p>
 *
 * @type String
 */
FileSystem.prototype.name = new String();

/**
 * The root directory of the file system.
 *
 * @type DirectoryEntry
 */
FileSystem.prototype.root = new DirectoryEntry();

/**
 * The type of event, e.g. "click", "hashchange", or "submit".
 *
 * @type String
 */
ProgressEvent.prototype.type = new String();

/**
 * True if event's goes through its target attribute value's ancestors in reverse tree order, and false otherwise.
 *
 * @type Boolean
 */
ProgressEvent.prototype.bubbles = new Boolean();

/**
 * Cancel bubble
 *
 * @type Boolean
 */
ProgressEvent.prototype.cancelBubble = new Boolean();

/**
 * Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled.
 *
 * @type Boolean
 */
ProgressEvent.prototype.cancelable = new Boolean();

/**
 * True when the length of the transferred content is known.
 *
 * @type Boolean
 */
ProgressEvent.prototype.lengthComputable = new Boolean();

/**
 * Number of bytes transferred.
 *
 * @type Number
 */
ProgressEvent.prototype.loaded = new Number();

/**
 * The total length of the content. This attribute is set when lengthComputable is true.
 *
 * @type Number
 */
ProgressEvent.prototype.total = new Number();

/**
 * The object to which event is dispatched.
 *
 * @type EventTarget
 */
ProgressEvent.prototype.target = new EventTarget();

/**
 * Called when the file system was successfully obtained.
 *
 * @param {FileSystem} filesystem
 * @type void
 * @memberOf FileSystemCallback
 * @returns {void}
 */
FileSystemCallback.prototype.handleEvent = function(filesystem){ return; };

/**
 * Read the next block of entries from this directory.
 *
 * @param {EntriesCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf DirectoryReader
 * @returns {void}
 */
DirectoryReader.prototype.readEntries = function(onsuccess, onerror){ return; };

/**
 * Used for storage with no guarantee of persistence.
 *
 * @type Number
 */
LocalFileSystem.TEMPORARY = new Number();

/**
 * Used for storage that should not be removed by the user agent without application or user permission.
 *
 * @type Number
 */
LocalFileSystem.PERSISTENT = new Number();

/**
 * Request a file system in which to store application data.
 *
 * @param {Number} type
 * @param {Number} size
 * @param {FileSystemCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LocalFileSystem
 * @returns {void}
 */
LocalFileSystem.prototype.requestFileSystem = function(type, size, successCallback, errorCallback){ return; };

/**
 * Retrieves a or using local URI.
 *
 * @param {String} uri
 * @param {EntryCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LocalFileSystem
 * @returns {void}
 */
LocalFileSystem.prototype.resolveLocalFileSystemURL = function(uri, successCallback, errorCallback){ return; };

/**
 * True if the entry is a file.
 *
 * @type Boolean
 */
Entry.prototype.isFile = new Boolean();

/**
 * True if the entry is a directory.
 *
 * @type Boolean
 */
Entry.prototype.isDirectory = new Boolean();

/**
 * The full absolute path from the root to the entry. An absolute path is a relative path from the root directory, prepended with a "/".
 *
 * @type String
 */
Entry.prototype.fullPath = new String();

/**
 * The name of the entry, excluding the path leading to it.
 *
 * @type String
 */
Entry.prototype.name = new String();

/**
 * The file system where the entry resides.
 *
 * @type FileSystem
 */
Entry.prototype.filesystem = new FileSystem();

/**
 * Look up metadata about this entry.
 *
 * @param {MetadataCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf Entry
 * @returns {void}
 */
Entry.prototype.getMetadata = function(onsuccess, onerror){ return; };

/**
 * Move an entry to a different location on the file system.
            <p>
It is an error to try to:
            </p>
            <ul>
              <li>
move a directory inside itself or to any child at any depth              </li>
              <li>
move an entry into its parent if a name different from its current one isn't provided              </li>
              <li>
move a file to a path occupied by a directory              </li>
              <li>
move a directory to a path occupied by a file              </li>
              <li>
move any element to a path occupied by a directory which is not empty              </li>
            </ul>
            <p>
A move of a file on top of an existing file must attempt to delete and replace that file.
A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.
            </p>
           
 *
 * @param {DirectoryEntry} parent
 * @param {String} newName
 * @param {EntryCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf Entry
 * @returns {void}
 */
Entry.prototype.moveTo = function(parent, newName, onsuccess, onerror){ return; };

/**
 * Copy an entry to a different location on the file system.
            <p>
It is an error to try to:
            </p>
            <ul>
              <li>
copy a directory inside itself or to any child at any depth              </li>
              <li>
copy an entry into its parent if a name different from its current one isn't provided              </li>
              <li>
copy a file to a path occupied by a directory              </li>
              <li>
copy a directory to a path occupied by a file              </li>
              <li>
copy any element to a path occupied by a directory which is not empty              </li>
            </ul>
            <p>
A copy of a file on top of an existing file must attempt to delete and replace that file.
A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.
Directory copies are always recursive--that is, they copy all contents of the directory.
            </p>
           
 *
 * @param {DirectoryEntry} parent
 * @param {String} newName
 * @param {EntryCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf Entry
 * @returns {void}
 */
Entry.prototype.copyTo = function(parent, newName, onsuccess, onerror){ return; };

/**
 * Look up the parent DirectoryEntry containing this Entry. If this Entry is the root of its filesystem, its parent is itself.
 *
 * @param {EntryCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf Entry
 * @returns {void}
 */
Entry.prototype.getParent = function(onsuccess, onerror){ return; };

/**
 * Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.
 *
 * @param {VoidCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf Entry
 * @returns {void}
 */
Entry.prototype.remove = function(onsuccess, onerror){ return; };

/**
 * Returns a URL that can be used to identify this entry. Unlike the URN defined in [FILE-API-ED], it has no specific expiration; as it describes a location on disk, it should be valid at least as long as that location exists.
 *
 * @type String
 * @memberOf Entry
 * @returns {String}
 */
Entry.prototype.toURL = function(){ var ret = new String(); return ret; };

/**
 * Creates a new DirectoryReader to read Entries from this Directory.
 *
 * @type DirectoryReader
 * @memberOf DirectoryEntry
 * @returns {DirectoryReader}
 */
DirectoryEntry.prototype.createReader = function(){ var ret = new DirectoryReader(); return ret; };

/**
 * Creates or looks up a directory.
            <ul>
              <li>
If create and exclusive are both true and the path already exists, getDirectory must fail.              </li>
              <li>
If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.              </li>
              <li>
If create is not true and the path doesn't exist, getDirectory must fail.              </li>
              <li>
If create is not true and the path exists, but is a file, getDirectory must fail.              </li>
              <li>
Otherwise, if no other error occurs, getDirectory must return a DirectoryEntry corresponding to path.              </li>
            </ul>
           
 *
 * @param {String} path
 * @param {Flags} options
 * @param {EntryCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf DirectoryEntry
 * @returns {void}
 */
DirectoryEntry.prototype.getDirectory = function(path, options, onsuccess, onerror){ return; };

/**
 * Creates or looks up a file.
            <ul>
              <li>
If create and exclusive are both true, and the path already exists, getFile must fail.              </li>
              <li>
If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.              </li>
              <li>
If create is not true and the path doesn't exist, getFile must fail.              </li>
              <li>
If create is not true and the path exists, but is a directory, getFile must fail.              </li>
              <li>
Otherwise, if no other error occurs, getFile must return a FileEntry corresponding to path.              </li>
            </ul>
           
 *
 * @param {String} path
 * @param {Flags} options
 * @param {EntryCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf DirectoryEntry
 * @returns {void}
 */
DirectoryEntry.prototype.getFile = function(path, options, onsuccess, onerror){ return; };

/**
 * Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete a directory that contains a file that cannot be removed], some of the contents of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.
 *
 * @param {VoidCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf DirectoryEntry
 * @returns {void}
 */
DirectoryEntry.prototype.removeRecursively = function(onsuccess, onerror){ return; };

/**
 * Used to supply an Entry as a response to a user query.
 *
 * @param {Entry} entry
 * @type void
 * @memberOf EntryCallback
 * @returns {void}
 */
EntryCallback.prototype.handleEvent = function(entry){ return; };

/**
 * Used to supply an array of Entries as a response to a user query.
 *
 * @param {array} entries
 * @type void
 * @memberOf EntriesCallback
 * @returns {void}
 */
EntriesCallback.prototype.handleEvent = function(entries){ return; };

/**
 * 
 *
 * @type Number
 */
FileError.NOT_FOUND_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.SECURITY_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.ABORT_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.NOT_READABLE_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.ENCODING_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.INVALID_STATE_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.SYNTAX_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.INVALID_MODIFICATION_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.QUOTA_EXCEEDED_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.TYPE_MISMATCH_ERR = new Number();

/**
 * 
 *
 * @type Number
 */
FileError.PATH_EXISTS_ERR = new Number();

/**
 * This plugin implements a File API allowing read/write access to files residing on the device.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-file">Cordova File</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 * <p>
<b id="StorageRemark">Remark:</b> In order to access files, a proper privilege has to be defined additionally:
        </p>
 * <ul>
 * <li>for accessing only internal storage using this API, a privilege must be provided,
 * <li>for accessing only external storage using this API, a privilege must be provided,
 * <li>for accessing internal and external storage using this API, privileges ( and ) must be provided.
 * <li>Storage privileges are privacy-related privileges and there is a need of asking user directly with proper pop-up. Please refer to for more details.
 * </ul>
 *
 * @type Number
 */
FileError.prototype.code = new Number();

/**
 * This is the time at which the file or directory was last modified.
 *
 * @type Date
 */
Metadata.prototype.modificationTime = new Date();

/**
 * The size of the file, in bytes. This must return 0 for directories.
 *
 * @type Number
 */
Metadata.prototype.size = new Number();

/**
 * Called with a ProgressEvent object.
 *
 * @param {ProgressEvent} event
 * @type void
 * @memberOf ProgressCallback
 * @returns {void}
 */
ProgressCallback.prototype.onsuccess = function(event){ return; };

/**
 * There was an error with the request. Details are provided by the FileError parameter.
 *
 * @param {FileError} err
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.handleEvent = function(err){ return; };

/**
 * This plugin implements a File API allowing read/write access to files residing on the device.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-file">Cordova File</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 * <p>
<b id="StorageRemark">Remark:</b> In order to access files, a proper privilege has to be defined additionally:
        </p>
 * <ul>
 * <li>for accessing only internal storage using this API, a privilege must be provided,
 * <li>for accessing only external storage using this API, a privilege must be provided,
 * <li>for accessing internal and external storage using this API, privileges ( and ) must be provided.
 * <li>Storage privileges are privacy-related privileges and there is a need of asking user directly with proper pop-up. Please refer to for more details.
 * </ul>
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.file = new FileSystemManager();

/**
 * 
 *
 * @type Number
 */
FileWriter.INIT = new Number();

/**
 * 
 *
 * @type Number
 */
FileWriter.WRITING = new Number();

/**
 * Above constants describe current state of FileWriter object.
 *
 * @type Number
 */
FileWriter.DONE = new Number();

/**
 * One of the three possible states, either INIT, WRITING, or DONE.
 *
 * @type Number
 */
FileWriter.prototype.readyState = new Number();

/**
 * The name of the file to be written.
 *
 * @type String
 */
FileWriter.prototype.fileName = new String();

/**
 * The length of the file to be written.
 *
 * @type Number
 */
FileWriter.prototype.length = new Number();

/**
 * The current position of the file pointer.
 *
 * @type Number
 */
FileWriter.prototype.position = new Number();

/**
 * An object containing errors.
 *
 * @type FileError
 */
FileWriter.prototype.error = new FileError();

/**
 * Called when the write starts.
 *
 * @type ProgressCallback
 */
FileWriter.prototype.onwritestart = new ProgressCallback();

/**
 * Called when the request has completed successfully.
 *
 * @type ProgressCallback
 */
FileWriter.prototype.onwrite = new ProgressCallback();

/**
 * Called when the write has been aborted. For instance, by invoking the abort() method.
 *
 * @type ProgressCallback
 */
FileWriter.prototype.onabort = new ProgressCallback();

/**
 * Called when the write has failed.
 *
 * @type ProgressCallback
 */
FileWriter.prototype.onerror = new ProgressCallback();

/**
 * Called when the request has completed (either in success or failure).
 *
 * @type ProgressCallback
 */
FileWriter.prototype.onwriteend = new ProgressCallback();

/**
 * Aborts writing the file.
 *
 * @type void
 * @memberOf FileWriter
 * @returns {void}
 */
FileWriter.prototype.abort = function(){ return; };

/**
 * Moves the file pointer to the specified byte.
            <p>
If the offset is a negative number the position of the file pointer is rewound. If the offset is greater than the file size the position is set to the end of the file.
            </p>
           
 *
 * @param {Number} offset
 * @type void
 * @memberOf FileWriter
 * @returns {void}
 */
FileWriter.prototype.seek = function(offset){ return; };

/**
 * Shortens the file to the specified length.
 *
 * @param {Number} size
 * @type void
 * @memberOf FileWriter
 * @returns {void}
 */
FileWriter.prototype.truncate = function(size){ return; };

/**
 * Writes data to the file.
 *
 * @param {WriteData} data
 * @type void
 * @memberOf FileWriter
 * @returns {void}
 */
FileWriter.prototype.write = function(data){ return; };

/**
 * Used to supply a FileWriter as a response to a user query.
 *
 * @param {FileWriter} fileWriter
 * @type void
 * @memberOf FileWriterCallback
 * @returns {void}
 */
FileWriterCallback.prototype.handleEvent = function(fileWriter){ return; };

/**
 * Creates a new FileWriter associated with the file that this FileEntry represents.
 *
 * @param {FileWriterCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileEntry
 * @returns {void}
 */
FileEntry.prototype.createWriter = function(onsuccess, onerror){ return; };

/**
 * Returns a File that represents the current state of the file that this FileEntry represents.
 *
 * @param {FileCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileEntry
 * @returns {void}
 */
FileEntry.prototype.file = function(onsuccess, onerror){ return; };

/**
 * Used to supply a File as a response to a user query.
 *
 * @param {File} file
 * @type void
 * @memberOf FileCallback
 * @returns {void}
 */
FileCallback.prototype.handleEvent = function(file){ return; };

/**
 * .
 *
 * @type void
 * @memberOf VoidCallback
 * @returns {void}
 */
VoidCallback.prototype.handleEvent = function(){ return; };

/**
 * Read-only directory where the application is installed.
 *
 * @type String
 */
FileSystemManager.prototype.applicationDirectory = new String();

/**
 * Root directory of the application's sandbox.
 *
 * @type String
 */
FileSystemManager.prototype.applicationStorageDirectory = new String();

/**
 * Persistent and private data storage within the application's sandbox using internal memory
 *
 * @type String
 */
FileSystemManager.prototype.dataDirectory = new String();

/**
 * Directory for cached data files or any files that your app can re-create easily. The OS may delete these files when the device runs low on storage, nevertheless, apps should not rely on the OS to delete files in here.
 *
 * @type String
 */
FileSystemManager.prototype.cacheDirectory = new String();

/**
 * Application space on external storage.
 *
 * @type String
 */
FileSystemManager.prototype.externalApplicationStorageDirectory = new String();

/**
 * Where to put app-specific data files on external storage.
 *
 * @type String
 */
FileSystemManager.prototype.externalDataDirectory = new String();

/**
 * Application cache on external storage.
 *
 * @type String
 */
FileSystemManager.prototype.externalCacheDirectory = new String();

/**
 * External storage root.
 *
 * @type String
 */
FileSystemManager.prototype.externalRootDirectory = new String();

/**
 * Temp directory that the OS can clear at will. Do not rely on the OS to clear this directory; your app should always remove files as applicable.
 *
 * @type String
 */
FileSystemManager.prototype.tempDirectory = new String();

/**
 * Holds app-specific files that should be synced.
 *
 * @type String
 */
FileSystemManager.prototype.syncedDataDirectory = new String();

/**
 * Files private to the app, but that are meaningful to other application (e.g. Office files).
 *
 * @type String
 */
FileSystemManager.prototype.documentsDirectory = new String();

/**
 * Files globally available to all applications.
 *
 * @type String
 */
FileSystemManager.prototype.sharedDirectory = new String();

/**
 * Request a file system in which to store application data.
 *
 * @param {Number} type
 * @param {Number} size
 * @param {FileSystemCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Window
 * @returns {void}
 */
Window.prototype.requestFileSystem = function(type, size, successCallback, errorCallback){ return; };

/**
 * Retrieves a or using local URI.
 *
 * @param {String} uri
 * @param {EntryCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Window
 * @returns {void}
 */
Window.prototype.resolveLocalFileSystemURL = function(uri, successCallback, errorCallback){ return; };

/**
 * This plugin implements a File API allowing read/write access to files residing on the device.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-file">Cordova File</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 * <p>
<b id="StorageRemark">Remark:</b> In order to access files, a proper privilege has to be defined additionally:
        </p>
 * <ul>
 * <li>for accessing only internal storage using this API, a privilege must be provided,
 * <li>for accessing only external storage using this API, a privilege must be provided,
 * <li>for accessing internal and external storage using this API, privileges ( and ) must be provided.
 * <li>Storage privileges are privacy-related privileges and there is a need of asking user directly with proper pop-up. Please refer to for more details.
 * </ul>
 *
 * @type FileSystemManager
 */
Cordova.prototype.file = new FileSystemManager();

/**
 * The callback method invoked on successful extraction of the data represented as an array of DOMString values.
 *
 * @super Object
 * @constructor
 * @return {ArrayStringSuccessCallback}
 */
function ArrayStringSuccessCallback() {};
ArrayStringSuccessCallback.prototype = new Object();

/**
 * Basic error callback.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * The callback method invoked on succesful extraction of a DatePattern object.
 *
 * @super Object
 * @constructor
 * @return {GetDatePatternSuccessCallback}
 */
function GetDatePatternSuccessCallback() {};
GetDatePatternSuccessCallback.prototype = new Object();

/**
 * The GlobalizationError interface
 *
 * @super Object
 * @constructor
 * @return {GlobalizationError}
 */
function GlobalizationError() {};
GlobalizationError.prototype = new Object();

/**
 * The callback method invoked on successful extraction of a NumberPattern object.
 *
 * @super Object
 * @constructor
 * @return {GetNumberPatternSuccessCallback}
 */
function GetNumberPatternSuccessCallback() {};
GetNumberPatternSuccessCallback.prototype = new Object();

/**
 * The GlobalizationManager interface embodies Globalization module methods.
 *
 * @super Object
 * @constructor
 * @return {GlobalizationManager}
 */
function GlobalizationManager() {};
GlobalizationManager.prototype = new Object();

/**
 * The callback method invoked on successful extraction of the data represented as a long integer value.
 *
 * @super Object
 * @constructor
 * @return {LongSuccessCallback}
 */
function LongSuccessCallback() {};
LongSuccessCallback.prototype = new Object();

/**
 * The callback method invoked on successful extraction of a CurrencyPattern object.
 *
 * @super Object
 * @constructor
 * @return {PatternSuccessCallback}
 */
function PatternSuccessCallback() {};
PatternSuccessCallback.prototype = new Object();

/**
 * A callback method invoked on successful extraction of a data encoded as a DOMString.
 *
 * @super Object
 * @constructor
 * @return {StringSuccessCallback}
 */
function StringSuccessCallback() {};
StringSuccessCallback.prototype = new Object();

/**
 * A callback method invoked on successful extraction of Daylight Saving Time data.
 *
 * @super Object
 * @constructor
 * @return {DSTSuccessCallback}
 */
function DSTSuccessCallback() {};
DSTSuccessCallback.prototype = new Object();

/**
 * The callback method invoked on successful extraction of the GlobalizationDate object.
 *
 * @super Object
 * @constructor
 * @return {GlobalizationDateSuccessCallback}
 */
function GlobalizationDateSuccessCallback() {};
GlobalizationDateSuccessCallback.prototype = new Object();

/**
 * The GlobalizationManagerObject interface.
 *
 * @super Object
 * @constructor
 * @return {GlobalizationManagerObject}
 */
function GlobalizationManagerObject() {};
GlobalizationManagerObject.prototype = new Object();

/**
 * The callback method invoked on successful extraction of the data represented as a double precision numeric value.
 *
 * @super Object
 * @constructor
 * @return {DoubleSuccessCallback}
 */
function DoubleSuccessCallback() {};
DoubleSuccessCallback.prototype = new Object();

/**
 * Called when a function returns the array of DOMString values successfully.
 *
 * @param {object} properties
 * @type void
 * @memberOf ArrayStringSuccessCallback
 * @returns {void}
 */
ArrayStringSuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Success
 *
 * @param {DOMException} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * Called when a function returns the date pattern information successfully.
 *
 * @param {DatePattern} pattern
 * @type void
 * @memberOf GetDatePatternSuccessCallback
 * @returns {void}
 */
GetDatePatternSuccessCallback.prototype.onsuccess = function(pattern){ return; };

/**
 * Unknown error
 *
 * @type Number
 */
GlobalizationError.UNKNOWN_ERROR = new Number();

/**
 * Formatting error
 *
 * @type Number
 */
GlobalizationError.FORMATTING_ERROR = new Number();

/**
 * Parsing error
 *
 * @type Number
 */
GlobalizationError.PARSING_ERROR = new Number();

/**
 * Pattern error
 *
 * @type Number
 */
GlobalizationError.PATTERN_ERROR = new Number();

/**
 * One of the following codes representing the error type.
 * <ul>
 * <li>0: GlobalizationError.UNKNOWN_ERROR
 * <li>1: GlobalizationError.FORMATTING_ERROR
 * <li>2: GlobalizationError.PARSING_ERROR
 * <li>3: GlobalizationError.PATTERN_ERROR
 * </ul>
 *
 * @type Number
 */
GlobalizationError.prototype.code = new Number();

/**
 * A text message that includes the error's explanation and/or details.
 *
 * @type String
 */
GlobalizationError.prototype.message = new String();

/**
 * Called when a function returns the number pattern information successfully.
 *
 * @param {NumberPattern} pattern
 * @type void
 * @memberOf GetNumberPatternSuccessCallback
 * @returns {void}
 */
GetNumberPatternSuccessCallback.prototype.onsuccess = function(pattern){ return; };

/**
 * Gets the BCP 47 language tag for the client's current language.
            <p>
Returns the BCP-47 compliant language identifier tag to the successCallback
with a properties object as a parameter. That object should have a value property
with a String value.
            </p>
           
 *
 * @param {StringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getPreferredLanguage = function(onsuccess, onerror){ return; };

/**
 * Returns the BCP 47 compliant tag for the client's current locale settings.
            <p>
Returns the BCP 47 compliant locale identifier string to the successCallback
with a properties object as a parameter. That object should have a value
property with a String value. The locale tag will consist of a two-letter
lower case language code, two-letter upper case country code, and (unspecified)
variant code, separated by a hyphen.
            </p>
           
 *
 * @param {StringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getLocaleName = function(onsuccess, onerror){ return; };

/**
 * Returns a date formatted as a string according to the client's locale and timezone.
            <p>
Returns the date formatted as a String via a value property accessible from the object
passed as a parameter to the successCallback.
            </p>
           
 *
 * @param {Date} date
 * @param {StringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {DateOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.dateToString = function(date, onsuccess, onerror, options){ return; };

/**
 * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
            <p>
The pattern information is returned in the onsuccess callback with pattern object
as a parameter.
            </p>
           
 *
 * @param {String} currencyCode
 * @param {PatternSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getCurrencyPattern = function(currencyCode, onsuccess, onerror){ return; };

/**
 * Returns an array of the names of the months or the days of the week, depending on the client's user preferences and calendar.
            <p>
If this method executes successfully, it invokes the onsuccess callback
with months' or days' names passed as an Array of DOMString values
in a parameter. This array features names starting from either
the first month in the year or the first day of the week
depending on the option selected.
            </p>
           
 *
 * @param {ArrayStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {GetDateNamesOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getDateNames = function(onsuccess, onerror, options){ return; };

/**
 * Gets a pattern string to format and parse dates according to the client's user preferences.
            <p>
If this method executes successfully, the onsuccess callback is invoked
with a DatePattern object passed as a parameter.
            </p>
           
 *
 * @param {GetDatePatternSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {DateOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getDatePattern = function(onsuccess, onerror, options){ return; };

/**
 * Gets the first day of the week according to the client's user preferences and calendar.
            <p>
The days of the week are numbered starting from 1, where 1 is assumed to be Sunday.
If successful, it invokes onsuccess callback with a LongSuccessCallback object
as a parameter. That object has a value property representing the number of
the first day of a week.
            </p>
           
 *
 * @param {LongSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getFirstDayOfWeek = function(onsuccess, onerror){ return; };

/**
 * Gets a pattern string to format and parse numbers according to the client's user preferences.
            <p>
The obtained pattern is then passed to the onsuccess callback
as a parameter.
            </p>
           
 *
 * @param {GetNumberPatternSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {NumberPatternOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.getNumberPattern = function(onsuccess, onerror, options){ return; };

/**
 * Indicates whether or not daylight savings time is in effect for a given date using the client's time zone and calendar.
            <p>
If this function executes successfully, the onsuccess callback
will be invoked with a dstStatus object as a parameter. That object
would contain a dst property with a Boolean value. The true value
indicates that the DST is in effect for the given date.
            </p>
           
 *
 * @param {Date} date
 * @param {DSTSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.isDayLightSavingsTime = function(date, onsuccess, onerror){ return; };

/**
 * Returns a number formatted as a string according to the client's user preferences.
            <p>
The formatted number string is returned by onsuccess callback with
a properties object as a parameter. That object contains a property value
of DOMString type containing the result of the conversion.
            </p>
           
 *
 * @param {Number} number
 * @param {StringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {NumberPatternOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.numberToString = function(number, onsuccess, onerror, options){ return; };

/**
 * Parses a date formatted as a DOMString according to the client's user preferences and calendar using the time zone of the client. Returns the corresponding date object.
 *
 * @param {String} dateString
 * @param {GlobalizationDateSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {DateOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.stringToDate = function(dateString, onsuccess, onerror, options){ return; };

/**
 * Parses a number formatted as a string according to the client's user preferences and returns the corresponding number.
            <p>
If successful, the result of the conversion is passed as a parameter to the onsuccess
callback method.
            </p>
           
 *
 * @param {String} numberString
 * @param {DoubleSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {NumberPatternOptions} options
 * @type void
 * @memberOf GlobalizationManager
 * @returns {void}
 */
GlobalizationManager.prototype.stringToNumber = function(numberString, onsuccess, onerror, options){ return; };

/**
 * Called when a function returns a numeric (long) data successfully.
 *
 * @param {object} properties
 * @type void
 * @memberOf LongSuccessCallback
 * @returns {void}
 */
LongSuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Called when a function returns the currency pattern information successfully.
 *
 * @param {CurrencyPattern} pattern
 * @type void
 * @memberOf PatternSuccessCallback
 * @returns {void}
 */
PatternSuccessCallback.prototype.onsuccess = function(pattern){ return; };

/**
 * Called when a function returns the properties object with data successfully.
 *
 * @param {object} properties
 * @type void
 * @memberOf StringSuccessCallback
 * @returns {void}
 */
StringSuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Called when a function returns the DST data successfully.
 *
 * @param {object} properties
 * @type void
 * @memberOf DSTSuccessCallback
 * @returns {void}
 */
DSTSuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Called when a function returns a GlobalizationDate object successfully.
 *
 * @param {Date} date
 * @type void
 * @memberOf GlobalizationDateSuccessCallback
 * @returns {void}
 */
GlobalizationDateSuccessCallback.prototype.onsuccess = function(date){ return; };

/**
 * This plugin obtains information and performs operations specific to the user's locale, language, and timezone. Note the difference between locale and language: locale controls how numbers, dates, and times are displayed for a region, while language determines what language text appears as, independently of locale settings. Often developers use locale to set both settings, but there is no reason a user couldn't set her language to "English" but locale to "French", so that text is displayed in English but dates, times, etc., are displayed as they are in France. Unfortunately, most mobile platforms currently do not make a distinction between these settings.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-globalization">Cordova Globalization</a>        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type GlobalizationManager
 */
GlobalizationManagerObject.prototype.globalization = new GlobalizationManager();

/**
 * Called when a function returns a numeric (double) data successfully.
 *
 * @param {object} properties
 * @type void
 * @memberOf DoubleSuccessCallback
 * @returns {void}
 */
DoubleSuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * This plugin obtains information and performs operations specific to the user's locale, language, and timezone. Note the difference between locale and language: locale controls how numbers, dates, and times are displayed for a region, while language determines what language text appears as, independently of locale settings. Often developers use locale to set both settings, but there is no reason a user couldn't set her language to "English" but locale to "French", so that text is displayed in English but dates, times, etc., are displayed as they are in France. Unfortunately, most mobile platforms currently do not make a distinction between these settings.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-globalization">Cordova Globalization</a>        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @type GlobalizationManager
 */
Navigator.prototype.globalization = new GlobalizationManager();

/**
 * A object is returned to the function when an error occurs.
 *
 * @super Object
 * @constructor
 * @return {MediaError}
 */
function MediaError() {};
MediaError.prototype = new Object();

/**
 * Basic error callback.
 *
 * @super Object
 * @constructor
 * @return {MediaErrorCallback}
 */
function MediaErrorCallback() {};
MediaErrorCallback.prototype = new Object();

/**
 * The Media interface provides the audio object.
 *
 * @super Object
 * @constructor
 * @return {Media}
 */
function Media() {};
Media.prototype = new Object();

/**
 * The callback function used to return status of the Media object.
 *
 * @super Object
 * @constructor
 * @return {StatusChangeCallback}
 */
function StatusChangeCallback() {};
StatusChangeCallback.prototype = new Object();

/**
 * The callback function used to return current position of the Media object.
 *
 * @super Object
 * @constructor
 * @return {PositionSuccessCallback}
 */
function PositionSuccessCallback() {};
PositionSuccessCallback.prototype = new Object();

/**
 * 
 *
 * @type Number
 */
MediaError.MEDIA_ERR_ABORTED = new Number();

/**
 * 
 *
 * @type Number
 */
MediaError.MEDIA_ERR_NETWORK = new Number();

/**
 * 
 *
 * @type Number
 */
MediaError.MEDIA_ERR_DECODE = new Number();

/**
 * 
 *
 * @type Number
 */
MediaError.MEDIA_ERR_NONE_SUPPORTED = new Number();

/**
 * One of the predefined error codes listed above.
 *
 * @type Number
 */
MediaError.prototype.code = new Number();

/**
 * Success
 *
 * @param {MediaError} error
 * @type void
 * @memberOf MediaErrorCallback
 * @returns {void}
 */
MediaErrorCallback.prototype.onerror = function(error){ return; };

/**
 * 
 *
 * @type Number
 */
Media.MEDIA_NONE = new Number();

/**
 * 
 *
 * @type Number
 */
Media.MEDIA_STARTING = new Number();

/**
 * 
 *
 * @type Number
 */
Media.MEDIA_RUNNING = new Number();

/**
 * 
 *
 * @type Number
 */
Media.MEDIA_PAUSED = new Number();

/**
 * Above constants are reported as the only parameter to the mediaStatus callback.
 *
 * @type Number
 */
Media.MEDIA_STOPPED = new Number();

/**
 * A URI containing the audio content.
 *
 * @type String
 */
Media.prototype.src = new String();

/**
 * The callback that executes after a Media object has completed the current play, record, or stop action.
 *
 * @type SuccessCallback
 */
Media.prototype.successCallback = new SuccessCallback();

/**
 * The callback that executes if an error occurs.
 *
 * @type MediaErrorCallback
 */
Media.prototype.errorCallback = new MediaErrorCallback();

/**
 * The callback that executes to indicate status changes.
 *
 * @type StatusChangeCallback
 */
Media.prototype.statusCallback = new StatusChangeCallback();

/**
 * Returns the current position within an audio file in seconds.
 *
 * @param {PositionSuccessCallback} positionSuccessCallback
 * @param {MediaErrorCallback} errorCallback
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.getCurrentPosition = function(positionSuccessCallback, errorCallback){ return; };

/**
 * Returns the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
 *
 * @type Number
 * @memberOf Media
 * @returns {Number}
 */
Media.prototype.getDuration = function(){ var ret = new Number(); return ret; };

/**
 * Pauses playing an audio file.
 *
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.pause = function(){ return; };

/**
 * Starts or resumes playing an audio file.
 *
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.play = function(){ return; };

/**
 * Releases the underlying operating system's audio resources. Applications should call the release function for any Media resource that is no longer needed.
 *
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.release = function(){ return; };

/**
 * Sets the current position within an audio file.
 *
 * @param {Number} position
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.seekTo = function(position){ return; };

/**
 * Set the volume for an audio file.
 *
 * @param {Number} volume
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.setVolume = function(volume){ return; };

/**
 * Starts recording an audio file.
 *
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.startRecord = function(){ return; };

/**
 * Stops recording an audio file.
 *
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.stopRecord = function(){ return; };

/**
 * Stops playing an audio file.
 *
 * @type void
 * @memberOf Media
 * @returns {void}
 */
Media.prototype.stop = function(){ return; };

/**
 * Called when the status of the object has been changed.
 *
 * @param {Number} status
 * @type void
 * @memberOf StatusChangeCallback
 * @returns {void}
 */
StatusChangeCallback.prototype.onchanged = function(status){ return; };

/**
 * Called when getting current position of the media file is retrieved successfully.
 *
 * @param {Number} position
 * @type void
 * @memberOf PositionSuccessCallback
 * @returns {void}
 */
PositionSuccessCallback.prototype.onsuccess = function(position){ return; };

/**
 * Callback for the event when an application goes offline, and the device is not connected to the Internet.
          <p>
The <var>online</var> event fires when an application goes online, and the device becomes connected to the Internet.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="events.html#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-network-information#offline">Cordova offline event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {OfflineEventCallback}
 */
function OfflineEventCallback() {};
OfflineEventCallback.prototype = new Object();

/**
 * The interface defines what is instantiated in the object.
          <p>
The <em>navigator.connection</em> object allows access to the NetworkInformation API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NetworkInformationManagerObject}
 */
function NetworkInformationManagerObject() {};
NetworkInformationManagerObject.prototype = new Object();

/**
 * Callback for the event when an application goes online, and the device becomes connected to the Internet.
          <p>
The <var>online</var> event fires when an application goes online, and the device becomes connected to the Internet.
          </p>
          <p>
Applications typically should use document.addEventListener() to attach an event listener once the <a href="events.html#DeviceReadyEventCallback">deviceready</a> event fires.
          </p>
          <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-network-information#online">Cordova online event</a>          </p>
         
 *
 * @super Object
 * @constructor
 * @return {OnlineEventCallback}
 */
function OnlineEventCallback() {};
OnlineEventCallback.prototype = new Object();

/**
 * The is available as window attribute.
 *
 * @super Object
 * @constructor
 * @return {Connection}
 */
function Connection() {};
Connection.prototype = new Object();

/**
 * The interface provides methods for global operations related to notifications to the user.
 *
 * @super Object
 * @constructor
 * @return {NetworkInformationManager}
 */
function NetworkInformationManager() {};
NetworkInformationManager.prototype = new Object();

/**
 * Called when an application goes offline.
 *
 * @type void
 * @memberOf OfflineEventCallback
 * @returns {void}
 */
OfflineEventCallback.prototype.offline = function(){ return; };

/**
 * This plugin provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-network-information">Cordova Network Information</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type NetworkInformationManager
 */
NetworkInformationManagerObject.prototype.connection = new NetworkInformationManager();

/**
 * Called when an application goes online.
 *
 * @type void
 * @memberOf OnlineEventCallback
 * @returns {void}
 */
OnlineEventCallback.prototype.online = function(){ return; };

/**
 * The value returned is "unknown".
 *
 * @type String
 */
Connection.prototype.UNKNOWN = new String();

/**
 * The value returned is "ethernet".
 *
 * @type String
 */
Connection.prototype.ETHERNET = new String();

/**
 * The value returned is "wifi".
 *
 * @type String
 */
Connection.prototype.WIFI = new String();

/**
 * The value returned is "2g".
 *
 * @type String
 */
Connection.prototype.CELL_2G = new String();

/**
 * The value returned is "3g".
 *
 * @type String
 */
Connection.prototype.CELL_3G = new String();

/**
 * The value returned is "4g".
 *
 * @type String
 */
Connection.prototype.CELL_4G = new String();

/**
 * The value returned is "cellular".
 *
 * @type String
 */
Connection.prototype.CELL = new String();

/**
 * The value returned is "none".
 *
 * @type String
 */
Connection.prototype.NONE = new String();

/**
 * Returns the current connection type. The value returned is one of the following strings, case-sensitively: unknown, ethernet, wifi, 2g, 3g, 4g, none.
 *
 * @type String
 */
NetworkInformationManager.prototype.type = new String();

/**
 * This plugin provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
 * <p>
Original documentation: <a href="https://www.npmjs.com/package/cordova-plugin-network-information">Cordova Network Information</a>.
        </p>
 * <p>
<b>Remark:</b> Usage of cordova API needs <em>http://tizen.org/privilege/filesystem.read</em> privilege.
        </p>
 *
 * @feature http://tizen.org/feature/network.telephony
 * @type NetworkInformationManager
 */
Navigator.prototype.connection = new NetworkInformationManager();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {DataControlManager}
 */
function DataControlManager() {};
DataControlManager.prototype = new Object();

/**
 * This interface defines MAP data type operators.
 *
 * @super Object
 * @constructor
 * @return {MappedDataControlConsumer}
 */
function MappedDataControlConsumer() {};
MappedDataControlConsumer.prototype = new DataControlConsumerObject();

/**
 * This interface defines SQL data type operators.
 *
 * @super Object
 * @constructor
 * @return {SQLDataControlConsumer}
 */
function SQLDataControlConsumer() {};
SQLDataControlConsumer.prototype = new DataControlConsumerObject();

/**
 * This interface provides a SuccessCallback for .
 *
 * @super Object
 * @constructor
 * @return {DataControlSelectSuccessCallback}
 */
function DataControlSelectSuccessCallback() {};
DataControlSelectSuccessCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlSuccessCallback}
 */
function DataControlSuccessCallback() {};
DataControlSuccessCallback.prototype = new Object();

/**
 * This interface provides an ErrorCallback for DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlErrorCallback}
 */
function DataControlErrorCallback() {};
DataControlErrorCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for .
 *
 * @super Object
 * @constructor
 * @return {DataControlGetValueSuccessCallback}
 */
function DataControlGetValueSuccessCallback() {};
DataControlGetValueSuccessCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for .
 *
 * @super Object
 * @constructor
 * @return {DataControlInsertSuccessCallback}
 */
function DataControlInsertSuccessCallback() {};
DataControlInsertSuccessCallback.prototype = new Object();

/**
 * This interface provides a DataControlChangeCallback for addChangeListener method.
 *
 * @super Object
 * @constructor
 * @return {DataControlChangeCallback}
 */
function DataControlChangeCallback() {};
DataControlChangeCallback.prototype = new Object();

/**
 * Defines what is instantiated in the object.
          <p>
The <em>tizen.datacontrol</em> object allows access to the
Data Control API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DataControlManagerObject}
 */
function DataControlManagerObject() {};
DataControlManagerObject.prototype = new Object();

/**
 * This interface provides common attributes and methods for other derived DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlConsumerObject}
 */
function DataControlConsumerObject() {};
DataControlConsumerObject.prototype = new Object();

/**
 * Gets with a given DataType.
 *
 * @param {String} providerId
 * @param {String} dataId
 * @param {DataType} type
 * @type DataControlConsumerObject
 * @memberOf DataControlManager
 * @returns {DataControlConsumerObject}
 */
DataControlManager.prototype.getDataControlConsumer = function(providerId, dataId, type){ var ret = new DataControlConsumerObject(); return ret; };

/**
 * Adds the value associated with the specified key to a key-values map owned by a MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} value
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.addValue = function(reqId, key, value, successCallback, errorCallback){ return; };

/**
 * Removes the value associated with the specified key from a key-values map owned by a MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} value
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.removeValue = function(reqId, key, value, successCallback, errorCallback){ return; };

/**
 * Gets the value associated with the specified key, from a key-values map owned by a MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {DataControlGetValueSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.getValue = function(reqId, key, successCallback, errorCallback){ return; };

/**
 * Sets the value associated with the specified key to a new value.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} oldValue
 * @param {String} newValue
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.updateValue = function(reqId, key, oldValue, newValue, successCallback, errorCallback){ return; };

/**
 * Inserts new rows into a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {RowData} insertionData
 * @param {DataControlInsertSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.insert = function(reqId, insertionData, successCallback, errorCallback){ return; };

/**
 * Updates values of a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {RowData} updateData
 * @param {String} where
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.update = function(reqId, updateData, where, successCallback, errorCallback){ return; };

/**
 * Delete rows from a table that is owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} where
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.remove = function(reqId, where, successCallback, errorCallback){ return; };

/**
 * Selects the specified columns to be queried. The result set of the specified columns is retrieved from a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {array} columns
 * @param {String} where
 * @param {DataControlSelectSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @param {Number} page
 * @param {Number} maxNumberPerPage
 * @param {String} order
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.select = function(reqId, columns, where, successCallback, errorCallback, page, maxNumberPerPage, order){ return; };

/**
 * Called on success.
 *
 * @param {array} rows
 * @param {Number} reqId
 * @type void
 * @memberOf DataControlSelectSuccessCallback
 * @returns {void}
 */
DataControlSelectSuccessCallback.prototype.onsuccess = function(rows, reqId){ return; };

/**
 * Called on success.
 *
 * @param {Number} reqId
 * @type void
 * @memberOf DataControlSuccessCallback
 * @returns {void}
 */
DataControlSuccessCallback.prototype.onsuccess = function(reqId){ return; };

/**
 * Called on error.
 *
 * @param {Number} reqId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DataControlErrorCallback
 * @returns {void}
 */
DataControlErrorCallback.prototype.onerror = function(reqId, error){ return; };

/**
 * Called on success.
 *
 * @param {array} values
 * @param {Number} reqid
 * @type void
 * @memberOf DataControlGetValueSuccessCallback
 * @returns {void}
 */
DataControlGetValueSuccessCallback.prototype.onsuccess = function(values, reqid){ return; };

/**
 * Called on success.
 *
 * @param {Number} reqId
 * @param {Number} insertRowId
 * @type void
 * @memberOf DataControlInsertSuccessCallback
 * @returns {void}
 */
DataControlInsertSuccessCallback.prototype.onsuccess = function(reqId, insertRowId){ return; };

/**
 * Called when the data is modified.
 *
 * @param {EventType} type
 * @param {RowData} data
 * @type void
 * @memberOf DataControlChangeCallback
 * @returns {void}
 */
DataControlChangeCallback.prototype.onsuccess = function(type, data){ return; };

/**
 * Object representing a data control manager.
 *
 * @type DataControlManager
 */
DataControlManagerObject.prototype.datacontrol = new DataControlManager();

/**
 * An attribute to store the DataType.
 *
 * @type DataType
 */
DataControlConsumerObject.prototype.type = new DataType();

/**
 * An attribute to hold a provider identifier of the application with whom it shares the DataControl. This attribute should be known to users who want to interact with the application.
 *
 * @type String
 */
DataControlConsumerObject.prototype.providerId = new String();

/**
 * The dataId identifies specific data, usually a database table to process(insert, delete, update). The string consists of one or more components, separated by a slash("/").
 *
 * @type String
 */
DataControlConsumerObject.prototype.dataId = new String();

/**
 * Adds a listener to receive notifications about provider data changes.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If a DB operation has failed.              </li>
            </ul>
           
 *
 * @param {DataControlChangeCallback} dataChangeCallback
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf DataControlConsumerObject
 * @returns {Number}
 */
DataControlConsumerObject.prototype.addChangeListener = function(dataChangeCallback, errorCallback){ var ret = new Number(); return ret; };

/**
 * Removes data change listener.
            <p>
If the watchId argument is valid and corresponds to a subscription already in
place, the watch process must immediately stop and no further callbacks must be
invoked. If the watchId argument is not valid or does not correspond to a
valid subscription, the method should return without any further action.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf DataControlConsumerObject
 * @returns {void}
 */
DataControlConsumerObject.prototype.removeChangeListener = function(watchId){ return; };

/**
 * Object representing a data control manager.
 *
 * @type DataControlManager
 */
Tizen.prototype.datacontrol = new DataControlManager();

/**
 * The DownloadManager interface handles requests for downloading. Each step of a download operation is informed through callbacks.
 *
 * @super Object
 * @constructor
 * @return {DownloadManager}
 */
function DownloadManager() {};
DownloadManager.prototype = new Object();

/**
 * This interface defines the default download manager that is instantiated by the object. The object allows access to the functionality of the Download API.
 *
 * @super Object
 * @constructor
 * @return {DownloadManagerObject}
 */
function DownloadManagerObject() {};
DownloadManagerObject.prototype = new Object();

/**
 * The DownloadRequest interface defines the download request object.
 *
 * @super Object
 * @constructor
 * @return {DownloadRequest}
 */
function DownloadRequest() {};
DownloadRequest.prototype = new Object();

/**
 * The DownloadCallback defines notification callbacks for a download state change or progress.
 *
 * @super Object
 * @constructor
 * @return {DownloadCallback}
 */
function DownloadCallback() {};
DownloadCallback.prototype = new Object();

/**
 * Starts a download operation with the specified URL information.
 *
 * @param {DownloadRequest} downloadRequest
 * @param {DownloadCallback} downloadCallback
 * @type Number
 * @memberOf DownloadManager
 * @returns {Number}
 */
DownloadManager.prototype.start = function(downloadRequest, downloadCallback){ var ret = new Number(); return ret; };

/**
 * Cancels an ongoing download operation that is specified by the parameter. The abandoned download operation cannot be canceled and trying to do so will result in InvalidValuesError exception.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.cancel = function(downloadId){ return; };

/**
 * Pauses an ongoing download operation that is specified by the parameter. The paused download operation can be resumed later by the method.
            <p>
The abandoned download operation cannot be paused and trying to do so will result in InvalidValuesError exception.
            </p>
           
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.pause = function(downloadId){ return; };

/**
 * Abandons a download operation that is specified by the parameter. The abandoned download operation cannot be resumed later with the method. Trying to resume this download operation will result in exception. Calling the method or the method with this will also result in exception. All resources needed by download operation are freed.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.abandon = function(downloadId){ return; };

/**
 * Resumes a paused download operation that is specified by the parameter.
            <p>
The abandoned download operation cannot be resumed and trying to do so will result in InvalidValuesError exception.
Resuming operation that is queued, completed or currently in progress will have no effect.
            </p>
           
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.resume = function(downloadId){ return; };

/**
 * Gets the download state of an operation synchronously with the specified ID.
 *
 * @param {Number} downloadId
 * @type DownloadState
 * @memberOf DownloadManager
 * @returns {DownloadState}
 */
DownloadManager.prototype.getState = function(downloadId){ var ret = new DownloadState(); return ret; };

/**
 * Gets the DownloadRequest object from a given ID.
 *
 * @param {Number} downloadId
 * @type DownloadRequest
 * @memberOf DownloadManager
 * @returns {DownloadRequest}
 */
DownloadManager.prototype.getDownloadRequest = function(downloadId){ var ret = new DownloadRequest(); return ret; };

/**
 * Gets the MIME type of the downloaded file.
 *
 * @param {Number} downloadId
 * @type String
 * @memberOf DownloadManager
 * @returns {String}
 */
DownloadManager.prototype.getMIMEType = function(downloadId){ var ret = new String(); return ret; };

/**
 * Sets the download callback to the download operation of the given ID. It's possible to change or register the listener of the download operation using the saved ID.
 *
 * @param {Number} downloadId
 * @param {DownloadCallback} downloadCallback
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.setListener = function(downloadId, downloadCallback){ return; };

/**
 * Object representing a download manager.
 *
 * @type DownloadManager
 */
DownloadManagerObject.prototype.download = new DownloadManager();

/**
 * An attribute to store the URL of the object to download.
 *
 * @type String
 */
DownloadRequest.prototype.url = new String();

/**
 * An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
 * <p>
If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see <a href="filesystem.html">Filesystem API</a>.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.destination = new String();

/**
 * An attribute to store the file name for the specified URL.
 * <p>
If the file name is not given or is an empty string, the original file name from the URL is used.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.fileName = new String();

/**
 * An attribute to store the allowed network type.
 * <p>
If the network type is not given, all network types are allowed.
            </p>
 * <p>
The default value is <var>ALL</var>.
            </p>
 *
 * @type DownloadNetworkType
 */
DownloadRequest.prototype.networkType = new DownloadNetworkType();

/**
 * An attribute to store extra HTTP header fields.
 * <p>
For more information about HTTP header fields, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2">RFC-2616</a>            </p>
 * <p>
The default value is an empty object.
            </p>
 *
 * @type DownloadHTTPHeaderFields
 */
DownloadRequest.prototype.httpHeader = new DownloadHTTPHeaderFields();

/**
 * Called when a download is successful and it is called multiple times as the download progresses. The interval between the callback is platform-dependent. When the download is started, the can be .
 *
 * @param {Number} downloadId
 * @param {Number} receivedSize
 * @param {Number} totalSize
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onprogress = function(downloadId, receivedSize, totalSize){ return; };

/**
 * Called when the download operation is paused by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onpaused = function(downloadId){ return; };

/**
 * Called when the download operation is canceled by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncanceled = function(downloadId){ return; };

/**
 * Called when the download operation is completed with the final full path or virtual path. If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
 *
 * @param {Number} downloadId
 * @param {String} path
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncompleted = function(downloadId, path){ return; };

/**
 * Called when the download operation fails.
 *
 * @param {Number} downloadId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onfailed = function(downloadId, error){ return; };

/**
 * Object representing a download manager.
 *
 * @type DownloadManager
 */
Tizen.prototype.download = new DownloadManager();

/**
 * The ExifThumbnailSuccessCallback interface provides a success callback that is invoked when the Exif thumbnail has been retrieved. This callback interface specifies a success method with the URI for the thumbnail as an input parameter. It is used in exif.getThumbnail().
 *
 * @super Object
 * @constructor
 * @return {ExifThumbnailSuccessCallback}
 */
function ExifThumbnailSuccessCallback() {};
ExifThumbnailSuccessCallback.prototype = new Object();

/**
 * The ExifInformation interface implements the object.
          <p>
When the format of a value is given in the attribute description then this format should be followed when updating values.
          </p>
          <p>
Every Exif related attribute is nullable - null means that this information is missing in the file.
By setting an attribute to null and saving <em>ExifInformation</em> one can remove that Exif tag from the file.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifInformation}
 */
function ExifInformation() {};
ExifInformation.prototype = new Object();

/**
 * The ExifManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the Exif data of a JPEG file.
 *
 * @super Object
 * @constructor
 * @return {ExifManagerObject}
 */
function ExifManagerObject() {};
ExifManagerObject.prototype = new Object();

/**
 * The ExifInformationSuccessCallback interface provides a success callback that is invoked when the Exif information object has been retrieved. This callback interface specifies a success method with an object as an input parameter. It is used in exif.getExifInfo().
 *
 * @super Object
 * @constructor
 * @return {ExifInformationSuccessCallback}
 */
function ExifInformationSuccessCallback() {};
ExifInformationSuccessCallback.prototype = new Object();

/**
 * The ExifManager interface provides methods to retrieve the object and save the Exif data of the object in a JPEG file.
          <p>
It provides access to the API functionalities through the <em>tizen.exif</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifManager}
 */
function ExifManager() {};
ExifManager.prototype = new Object();

/**
 * Called when the thumbnail of the JPEG file has been successfully retrieved.
 *
 * @param {String} uri
 * @type void
 * @memberOf ExifThumbnailSuccessCallback
 * @returns {void}
 */
ExifThumbnailSuccessCallback.prototype.onsuccess = function(uri){ return; };

/**
 * URI of the image.
 * <p>
The path to the file from which <em>ExifInformation</em> data is collected.
            </p>
 *
 * @type String
 */
ExifInformation.prototype.uri = new String();

/**
 * Width of the image i.e. the number of points (pixels) per image line.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.width = new Number();

/**
 * Height of the image i.e. the number of lines in the image.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.height = new Number();

/**
 * Name of the camera manufacturer.
 *
 * @type String
 */
ExifInformation.prototype.deviceMaker = new String();

/**
 * Model name or model number of the camera or input device.
 *
 * @type String
 */
ExifInformation.prototype.deviceModel = new String();

/**
 * Date and time when the picture was taken.
 *
 * @type Date
 */
ExifInformation.prototype.originalTime = new Date();

/**
 * Orientation of the image when displayed.
 * <p>
This attribute shows the relation between the stored image data and the visual content orientation.
In other words - how a stored image should be oriented when presented to the user.
            </p>
 *
 * @type ImageContentOrientation
 */
ExifInformation.prototype.orientation = new ImageContentOrientation();

/**
 * The f-number when the image was taken.
 * <p>
Exif specification: "Conversion is not made to the focal length of a 35 mm film".
            </p>
 * <p>
The <a href="http://en.wikipedia.org/wiki/F-number">f-number</a> is the ratio of the lens' focal length to the diameter of the entrance pupil.
F-number is also called focal ratio, f-ratio, f-stop, or relative aperture.
Example values: 1.4, 2, 2.8, 4, 5.6, 8, 11 ...
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.fNumber = new Number();

/**
 * Photo sensitivity (also called ISO speed and ISO latitude) of the camera or input device.
 * <p>
Example values: 80, 100, 200, 400, 800, 1600, 3200 ..
            </p>
 *
 * @type array
 */
ExifInformation.prototype.isoSpeedRatings = new array();

/**
 * Exposure time, given in seconds.
 * <p>
If exposure time is below one second it is expressed as 1/x.
For example: 1 second exposure is "1", 0.25s is "1/4".
            </p>
 *
 * @type String
 */
ExifInformation.prototype.exposureTime = new String();

/**
 * Exposure balance program used by the camera to set exposure when the picture was taken.
 *
 * @type ExposureProgram
 */
ExifInformation.prototype.exposureProgram = new ExposureProgram();

/**
 * Boolean value that indicates whether flash was fired when the picture was taken (true: flash fired).
 *
 * @type Boolean
 */
ExifInformation.prototype.flash = new Boolean();

/**
 * Focal length of the lens, given in mm.
 *
 * @type Number
 */
ExifInformation.prototype.focalLength = new Number();

/**
 * White balance mode set when the picture was taken.
 *
 * @type WhiteBalanceMode
 */
ExifInformation.prototype.whiteBalance = new WhiteBalanceMode();

/**
 * Latitude and longitude of the camera (from GPS) when the picture was taken.
 *
 * @type SimpleCoordinates
 */
ExifInformation.prototype.gpsLocation = new SimpleCoordinates();

/**
 * Altitude (from GPS) of the camera when the picture was taken.
 * <p>
This value is expressed in meters above sea level (can be negative).
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.gpsAltitude = new Number();

/**
 * Name of the method used for finding the location.
 *
 * @type String
 */
ExifInformation.prototype.gpsProcessingMethod = new String();

/**
 * Date and time information relative to UTC (Universal Time Coordinated) provided by GPS when the photo was taken.
 *
 * @type TZDate
 */
ExifInformation.prototype.gpsTime = new TZDate();

/**
 * User comment.
 *
 * @type String
 */
ExifInformation.prototype.userComment = new String();

/**
 * Object representing a exif manager.
 *
 * @type ExifManager
 */
ExifManagerObject.prototype.exif = new ExifManager();

/**
 * Called when the Exif information object has been successfully retrieved.
 *
 * @param {ExifInformation} exifInfo
 * @type void
 * @memberOf ExifInformationSuccessCallback
 * @returns {void}
 */
ExifInformationSuccessCallback.prototype.onsuccess = function(exifInfo){ return; };

/**
 * Gets the object to manipulate the Exif data in a JPEG file.
            <p>
This function returns (via callback) the <em>ExifInformation</em> object that contains the Exif data in the JPEG file.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found or the file does not contain Exif data              </li>
              <li>
IOError: If access to the image file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifInformationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getExifInfo = function(uri, successCallback, errorCallback){ return; };

/**
 * Saves the Exif data of the object into the JPEG file.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {ExifInformation} exifInfo
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.saveExifInfo = function(exifInfo, successCallback, errorCallback){ return; };

/**
 * Gets the thumbnail of the specified JPEG file. If there is no thumbnail in the JPEG file, is returned.
            <p>
<em>successCallback</em> is invoked with a URI as the first argument.
This URI is a <a href="http://en.wikipedia.org/wiki/Data_URI_scheme">data URI</a>.
It can be used as an src attribute value of the img element.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
IOError: If access to the thumbnail file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any of the input parameters contains an invalid value              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifThumbnailSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getThumbnail = function(uri, successCallback, errorCallback){ return; };

/**
 * Object representing a exif manager.
 *
 * @type ExifManager
 */
Tizen.prototype.exif = new ExifManager();

/**
 * The interface provides the functionalities for playing simple sound and vibration.
 *
 * @super Object
 * @constructor
 * @return {FeedbackManager}
 */
function FeedbackManager() {};
FeedbackManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
The <em>tizen.feedback</em> object allows access to the Feedback API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FeedbackManagerObject}
 */
function FeedbackManagerObject() {};
FeedbackManagerObject.prototype = new Object();

/**
 * Plays various types of reactions that are predefined.
            <p>
This function can be used to react to predefined actions. It plays various types of system predefined media or vibration patterns.
Currently, there are two types of reactions: sound and vibration. Depending on the settings, some types cause no action.
For example, when set to silent mode, the device does not produce any sound.
If this method is called without the <em>type</em> value, the type of played feedback <em>pattern</em> depends on device settings.
            </p>
           
 *
 * @param {FeedbackPattern} pattern
 * @param {FeedbackType} type
 * @type void
 * @memberOf FeedbackManager
 * @returns {void}
 */
FeedbackManager.prototype.play = function(pattern, type){ return; };

/**
 * Stops various of vibration patterns.
            <p>
This function can be used to stop various types of vibration reactions that are predefined.
            </p>
           
 *
 * @type void
 * @memberOf FeedbackManager
 * @returns {void}
 */
FeedbackManager.prototype.stop = function(){ return; };

/**
 * Checks if a pattern is supported.
 *
 * @param {FeedbackPattern} pattern
 * @param {FeedbackType} type
 * @type Boolean
 * @memberOf FeedbackManager
 * @returns {Boolean}
 */
FeedbackManager.prototype.isPatternSupported = function(pattern, type){ var ret = new Boolean(); return ret; };

/**
 * Object representing a feedback manager.
 *
 * @type FeedbackManager
 */
FeedbackManagerObject.prototype.feedback = new FeedbackManager();

/**
 * Object representing a feedback manager.
 *
 * @type FeedbackManager
 */
Tizen.prototype.feedback = new FeedbackManager();

/**
 * The WriteStringSuccessCallback callback interface specifies a success callback with a value as input argument.
          <p>
It is used in asynchronous operation FileHandle.writeStringNonBlocking().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WriteStringSuccessCallback}
 */
function WriteStringSuccessCallback() {};
WriteStringSuccessCallback.prototype = new Object();

/**
 * The ReadDataSuccessCallback callback interface specifies a success callback with a value as input argument.
          <p>
It is used in asynchronous operation FileHandle.readDataNonBlocking().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReadDataSuccessCallback}
 */
function ReadDataSuccessCallback() {};
ReadDataSuccessCallback.prototype = new Object();

/**
 * The FileStreamSuccessCallback interface specifies a success callback with a object as input argument.
          <p>
It is used in asynchronous operation File.openStream().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStreamSuccessCallback}
 */
function FileStreamSuccessCallback() {};
FileStreamSuccessCallback.prototype = new Object();

/**
 * The ReadStringSuccessCallback callback interface specifies a success callback with a value as input argument.
          <p>
It is used in asynchronous operation FileHandle.readStringNonBlocking().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReadStringSuccessCallback}
 */
function ReadStringSuccessCallback() {};
ReadStringSuccessCallback.prototype = new Object();

/**
 * The File interface represents the file abstraction in use.
          <p>
The file object permissions for the file object location and tree rooted
at that location depend upon the mode defined in the resolve method.
When a File object creates a child File object,
the new File object inherits its access rights from
the parent object without any reference to the security framework, as
noted in certain methods of File.
          </p>
          <p>
A file handle represents either a file or a directory:
          </p>
          <ul>
            <li>
For a file, the <em>isFile</em> attribute is set to <var>true</var>.            </li>
            <li>
For a directory, the <em>isDirectory</em> attribute is set to <var>true</var>.            </li>
          </ul>
          <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
          </p>
          <p>
A file handle representing a file can be opened for I/O operations,
such as reading and writing.
          </p>
          <p>
A file handle representing a directory can be used for listing all
files and directories rooted as the file handle location.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * The FileStream interface represents a handle to a File opened for read and/or write operations. Read and write operations are performed relative to a position attribute, which is a pointer that represents the current position in the file.
          <p>
A series of read/write methods are available that permit both binary and text to be processed.
          </p>
          <p>
Once a file stream is closed, any operation attempt made on this stream results in a standard JavaScript error.
          </p>
          <p>
The read/write operations in this interface do not throw any security exceptions as the access rights are expected to be granted through the initial resolve() method or through the openStream() method of the <em>File</em> interface. Therefore, all actions performed on a successfully resolved File and FileStream are expected to succeed. This avoids successive asynchronous calls and may potentially increase application for a user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStream}
 */
function FileStream() {};
FileStream.prototype = new Object();

/**
 * The FileSystemStorage interface gives additional information about a storage, such as if the device is mounted, if it is a removable drive or not, or the device's name.
          <p>
To retrieve the mount point, the resolve() method should be used using the label as argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorage}
 */
function FileSystemStorage() {};
FileSystemStorage.prototype = new Object();

/**
 * The FileArraySuccessCallback interface defines file system specific success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function taking an array of <em>File</em> objects as input argument. It is used in asynchronous methods, such as File.listFiles().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileArraySuccessCallback}
 */
function FileArraySuccessCallback() {};
FileArraySuccessCallback.prototype = new Object();

/**
 * The FileSuccessCallback interface defines file system success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.resolve(), copying, moving and deleting files.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSuccessCallback}
 */
function FileSuccessCallback() {};
FileSuccessCallback.prototype = new Object();

/**
 * The FileSystemManagerObject interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.filesystem</em> object that allows accessing the functionality of the Filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * The PathSuccessCallback callback interface specifies a success callback with a value as input argument.
          <p>
It is used in asynchronous operations of the <em>FileSystemManager</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PathSuccessCallback}
 */
function PathSuccessCallback() {};
PathSuccessCallback.prototype = new Object();

/**
 * The ListDirectorySuccessCallback interface defines success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function taking an array of strings as input argument. It is used in asynchronous operation FileSystemManager.listDirectory().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ListDirectorySuccessCallback}
 */
function ListDirectorySuccessCallback() {};
ListDirectorySuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageSuccessCallback callback interface specifies a success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.getStorage() and FileSystemManager.addStorageStateChangeListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageSuccessCallback}
 */
function FileSystemStorageSuccessCallback() {};
FileSystemStorageSuccessCallback.prototype = new Object();

/**
 * The SeekSuccessCallback callback interface specifies a success callback with a value as input argument.
          <p>
It is used in asynchronous operation FileHandle.seekNonBlocking().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SeekSuccessCallback}
 */
function SeekSuccessCallback() {};
SeekSuccessCallback.prototype = new Object();

/**
 * Object representing file, used for read/write operations.
          <p>
Each read or write operation moves position in file forwards to the end of read/written data (there is an underlying file position's indicator).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileHandle}
 */
function FileHandle() {};
FileHandle.prototype = new Object();

/**
 * The ReadBlobSuccessCallback callback interface specifies a success callback with a object as input argument.
          <p>
It is used in asynchronous operation FileHandle.readBlobNonBlocking().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReadBlobSuccessCallback}
 */
function ReadBlobSuccessCallback() {};
ReadBlobSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageArraySuccessCallback callback interface specifies a success callback with an array of FileSystemStorage objects as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.listStorages().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageArraySuccessCallback}
 */
function FileSystemStorageArraySuccessCallback() {};
FileSystemStorageArraySuccessCallback.prototype = new Object();

/**
 * The FileSystemManager interface provides access to the Filesystem API.
          <p>
This manager interface exposes the Filesystem base API and provides functionalities, such
as determining root and default locations, resolving a given location into a file handle and registering filesystem listeners for filesystem events.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * The FileStringSuccessCallback callback interface specifies a success callback with a DOMString object as input argument.
          <p>
It is used in asynchronous operation File.readAsText().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStringSuccessCallback}
 */
function FileStringSuccessCallback() {};
FileStringSuccessCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {Number} bytesCount
 * @type void
 * @memberOf WriteStringSuccessCallback
 * @returns {void}
 */
WriteStringSuccessCallback.prototype.onsuccess = function(bytesCount){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {Uint8Array} data
 * @type void
 * @memberOf ReadDataSuccessCallback
 * @returns {void}
 */
ReadDataSuccessCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the File.openStream asynchronous call completes successfully.
 *
 * @param {FileStream} filestream
 * @type void
 * @memberOf FileStreamSuccessCallback
 * @returns {void}
 */
FileStreamSuccessCallback.prototype.onsuccess = function(filestream){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {String} string
 * @type void
 * @memberOf ReadStringSuccessCallback
 * @returns {void}
 */
ReadStringSuccessCallback.prototype.onsuccess = function(string){ return; };

/**
 * The parent directory handle.
 * <p>
This attribute is set to <var>null</var> if there is no parent directory. This also implies that this directory represents a root location.
            </p>
 *
 * @type File
 */
File.prototype.parent = new File();

/**
 * The file/directory access state in the filesystem.
 * <p>
This attribute is set to:
            </p>
 * <ul>
 * <li>- if object has read-only access at its location.
 * <li>- if object has write access at its location.
 * </ul>
 * <p>
This attribute represents the actual state of a file or directory in the filesystem. Its value is not affected by the mode used in FileSystemManager.resolve() that was used to create the <em>File</em> object from which this <em>File</em> object was obtained.
            </p>
 *
 * @type Boolean
 */
File.prototype.readOnly = new Boolean();

/**
 * The flag indicating whether it is a file.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a file
 * <li>if this handle is a directory
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isFile = new Boolean();

/**
 * The flag indicating whether it is a directory.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a directory
 * <li>if this handle is a file
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean();

/**
 * The timestamp when a file is first created in the filesystem.
 * <p>
This timestamp is equivalent to the timestamp when a call to createFile() succeeds.
            </p>
 * <p>
If the platform does not support this attribute, it will
be <var>null</var>.
            </p>
 * <p>
It is unspecified and platform-dependent if the creation
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.created = new Date();

/**
 * The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
 * <p>
Opening a file for reading does not change the modification timestamp.
            </p>
 * <p>
If the platform does not support this attribute, it will be <var>null</var>.
            </p>
 * <p>
It is unspecified and platform-dependent if the modified
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.modified = new Date();

/**
 * The path of a file after excluding its file name.
 * <p>
It begins with the name of the root containing the file, followed by the path, including the directory containing the file, but excluding the file name.
            </p>
 * <p>
Except in some special cases of the File representing the root itself, the last
character is always "/".
            </p>
 * <p>
For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
the path is music/ramones/volume1/.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the path is
music/ramones/.
            </p>
 * <p>
For the virtual roots, the path is same as the name of the virtual root.
For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
            </p>
 *
 * @type String
 */
File.prototype.path = new String();

/**
 * The file name after excluding the root name and any path components.
 * <p>
This is the name of this file, excluding the root name and any other path components.
            </p>
 * <p>
For example, if a file is located at
music/ramones/volume1/RockawayBeach.mp3, the <em>name</em> is "RockawayBeach.mp3".
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the
<em>name</em> is be "volume1".
            </p>
 * <p>
For the special case of the root itself, the <em>name</em> is an empty string.
            </p>
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of a file.
 * <p>
It begins with the name of the root containing the file,
and including the name of the file or directory itself.
            </p>
 * <p>
For instance, if the RockawayBeach.mp3 file is located at music/ramones/volume1/, then the <em>fullPath</em> is music/ramones/volume1/RockawayBeach.mp3.
            </p>
 * <p>
For a directory, if the volume1 directory is located at music/ramones/, then the <em>fullPath</em> is music/ramones/volume1.
            </p>
 * <p>
For the special case of the root itself, if the root is music, then the <em>fullPath</em> is music.
            </p>
 * <p>
The <em>fullPath</em> is always equal to path + name.
            </p>
 *
 * @type String
 */
File.prototype.fullPath = new String();

/**
 * The size of this file, in bytes.
 * <p>
If an attempt to read this attribute for a directory is made, <var>undefined</var> is returned. To retrieve the number of files and directories contained in the directory, use the <em>length</em> attribute.
            </p>
 *
 * @type Number
 */
File.prototype.fileSize = new Number();

/**
 * The number of files and directories contained in a file handle.
 * <p>
If an attempt to read this attribute for a file is made, <var>undefined</var> is returned. To retrieve the size of a file, use the <em>fileSize</em> attribute.
            </p>
 *
 * @type Number
 */
File.prototype.length = new Number();

/**
 * Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element). The URI has no specific expiration, it should be valid at least as long as the file exists.
            <p>
If that URI corresponds to any of the public virtual roots (that is
images, videos, music, documents and downloads) the URI
must be globally unique and could be used by any widget.
            </p>
            <p>
If that URI corresponds to a file located in any a widget's private areas (such as wgt-package, wgt-private, wgt-private-tmp),
the generated URI must be unique for that file and for the widget making the request (such as including some derived from the widget ID in the URI).
These URIs must not be accessible to other widgets, apart from the one invoking this method.
            </p>
           
 *
 * @type String
 * @memberOf File
 * @returns {String}
 */
File.prototype.toURI = function(){ var ret = new String(); return ret; };

/**
 * Lists all files in a directory.
            <p>
The list of files is passed as a File[] in onsuccess() and contains directories and files. However, the directories "." and ".." must not be returned. Each <em>File</em> object that is part of the array must inherit all the access rights (that is, one of the values in FileMode) from the <em>File</em> object in which this method is invoked.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories and files in the directory that match the filter criteria specified in the <em>FileFilter</em> interface must be returned in the onsuccess() method. If no filter is passed, the filter is <var>null</var> or <var>undefined</var>, or the filter contains invalid values, the implementation must return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or the filter criteria do not match any files or directories, the onsuccess() is invoked with an empty array.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If the operation is launched on a file (not a directory).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileFilter} filter
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.listFiles = function(onsuccess, onerror, filter){ return; };

/**
 * Opens the file in the given mode supporting a specified encoding.
            <p>
This operation is performed asynchronously. If the file is opened successfully, the onsuccess() method is invoked with a <em>FileStream</em> that can be used for reading and writing the file, depending on the mode. The returned <em>FileStream</em> instance includes a file pointer, which represents the current position in the file. The file pointer, by default, is at the start of the file, except in the case of opening a file in append ("a") mode, in which case the file pointer points to the end of the file.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
IOError - The operation is launched on a directory (not a file), the file is not valid or it does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileMode} mode
 * @param {FileStreamSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.openStream = function(mode, onsuccess, onerror, encoding){ return; };

/**
 * Reads the content of a file as a DOMString.
            <p>
If the operation is successfully executed, the onsuccess() method is invoked and a DOMString is passed as input parameter that represents the file content in the format determined by the <em>encoding</em> parameter.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
IOError - If the operation is launched on a directory (not a file), the file is not valid, or the file does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.readAsText = function(onsuccess, onerror, encoding){ return; };

/**
 * Copies (and overwrites if possible and specified) a file or a directory from a specified location to another specified location.
            <p>
The copy of the file or directory identified by the <em>originFilePath</em> parameter must be created in the path passed in the <em>destinationFilePath</em> parameter.
            </p>
            <p>
The file or directory to copy must be under the Directory from which the method is invoked, otherwise the operation must not be performed.
            </p>
            <p>
If the copy is performed successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
NotFoundError - If the <em>originFilePath</em> does not correspond to a valid file or <em>destinationPath</em> is not a valid path.              </li>
              <li>
IOError - If the file in which the copyTo() method is invoked is a file (and not a directory), <em>originFilePath</em> corresponds to a file or directory in use by another process, <em>overwrite</em> parameter is <var>false</var> and <em>destinationFilePath</em> corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.copyTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Moves (and overwrites if possible and specified) a file or a directory from a specified location to another. This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
            <p>
The file or directory identified by the <em>originFilePath</em> parameter is moved to the path passed in the <em>destinationFilePath</em> parameter.
            </p>
            <p>
The file to move must be under the directory from which the method is invoked, else the operation can not be performed.
            </p>
            <p>
If the file or directory is moved successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
NotFoundError - If <em>originFilePath</em> does not correspond to a valid file or <em>destinationPath</em> is not a valid path.              </li>
              <li>
IOError - If the <em>File</em> in which the moveTo() method is invoked is a file (not a directory), <em>originFilePath</em> corresponds to a file or directory in use by another process, overwrite parameter is <var>false</var> and <em>destinationFilePath</em> corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.moveTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Creates a new directory.
            <p>
A new directory will be created relative to the current
directory that this operation is performed on. The implementation will attempt to
create all necessary sub-directories specified in the dirPath, as well. The use of "."
or ".." in path components is not supported.
            </p>
            <p>
This operation can only be performed on file handles that represent directories (that is, <em>isDirectory</em> == <var>true</var>).
            </p>
            <p>
If the directory is successfully created, it will be returned.
            </p>
            <p>
In case the directory cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} dirPath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createDirectory = function(dirPath){ var ret = new File(); return ret; };

/**
 * Creates a empty new file in a specified location that is relative to the directory indicated by current object's attribute.
            <p>
The use of "." or ".." in path components is not supported. This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory</em> == <var>true</var>).
            </p>
            <p>
If the file is successfully created, a file handle must be returned by this method.
            </p>
            <p>
In case the file cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} relativeFilePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createFile = function(relativeFilePath){ var ret = new File(); return ret; };

/**
 * Resolves an existing file or directory relative to the current directory this operation is performed on and returns a file handle for it.
            <p>
The <em>filePath</em> is not allowed to contain the "." or ".." directory entries inside its value.
            </p>
            <p>
The encoding of file paths is <a href="http://www.ietf.org/rfc/rfc2279.txt">UTF-8</a>.
            </p>
           
 *
 * @param {String} filePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.resolve = function(filePath){ var ret = new File(); return ret; };

/**
 * Deletes a specified directory and directory tree if specified.
            <p>
This method attempts to asynchronously delete a directory or directory tree under the current directory.
            </p>
            <p>
If the <em>recursive</em> parameter is set to <var>true</var>, all the directories and files under the specified directory must be deleted. If the <em>recursive</em> parameter is set to <var>false</var>, the directory is only deleted if it is empty, otherwise an IOError error type will be passed in onerror().
            </p>
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
NotFoundError -If the passed directory does not correspond to a valid directory.              </li>
              <li>
IOError - If the <em>File</em> in which the delete method is invoked is a file (and not a directory), the directory is in use by another process or the directory is not empty and <em>recursive</em> argument is <var>false</var>.<br/>This code is also used if a recursive deletion partially fails and any data deleted so far cannot be recovered. This may occur due to the lack of filesystem permissions or if any directories or files are already opened by other processes.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} directoryPath
 * @param {Boolean} recursive
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteDirectory = function(directoryPath, recursive, onsuccess, onerror){ return; };

/**
 * Deletes a specified file.This function attempts to asynchronously delete a file under the current directory.
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
NotFoundError - If the file does not correspond to a valid file.              </li>
              <li>
IOError - If the file in which the delete() method is invoked is a file (not a directory), the file is in use by another process, or there is no permission in the file system.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} filePath
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteFile = function(filePath, onsuccess, onerror){ return; };

/**
 * The flag indicating whether the current file pointer is at the end of the file.
 * <p>
If set to <var>true</var>, this attribute indicates that the file pointer is at the end of the file.
            </p>
 * <p>
If set to <var>false</var>, this attribute indicates that the file pointer is not at the end of the file and so it is anywhere within the file.
            </p>
 *
 * @type Boolean
 */
FileStream.prototype.eof = new Boolean();

/**
 * The flag indicating the stream position for reads/writes.
 * <p>
The stream position is an offset of bytes from the start of the file stream. When invoking an operation that reads or writes from the stream, the operation will take place from the byte defined by this <em>position</em> attribute. If the read or write operation is successful, the position of the stream is advanced by the number of bytes read or written. If the read/write operation is not successful, the position of the stream is unchanged.
            </p>
 *
 * @type Number
 */
FileStream.prototype.position = new Number();

/**
 * The number of bytes that are available for reading from the stream.
 * <p>
The number of bytes available for reading is the maximum amount of bytes that can be read in the next read operation.
It corresponds to the number of bytes available after the file pointer denoted by the <em>position</em> attribute.
            </p>
 * <p>
<var>-1</var> if EOF is <var>true</var>.
            </p>
 *
 * @type Number
 */
FileStream.prototype.bytesAvailable = new Number();

/**
 * Closes this FileStream.
            <p>
Flushes any pending buffered writes and closes the File. Always succeeds.
Note that pending writes might not succeed.
            </p>
           
 *
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.close = function(){ return; };

/**
 * Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string. The resulting string length might be shorter than if EOF is .
 *
 * @param {Number} charCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.read = function(charCount){ var ret = new String(); return ret; };

/**
 * Reads the specified number of bytes from a FileStream.
 *
 * @param {Number} byteCount
 * @type array
 * @memberOf FileStream
 * @returns {array}
 */
FileStream.prototype.readBytes = function(byteCount){ var ret = new array(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream, encoding the result in base64.
 *
 * @param {Number} byteCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.readBase64 = function(byteCount){ var ret = new String(); return ret; };

/**
 * Writes the specified DOMString to a FileStream.
 *
 * @param {String} stringData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.write = function(stringData){ return; };

/**
 * Writes the specified bytes to this FileStream.
 *
 * @param {array} byteData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBytes = function(byteData){ return; };

/**
 * Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
 *
 * @param {String} base64Data
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBase64 = function(base64Data){ return; };

/**
 * The storage name.
 * <p>
This attribute is used as an input for methods such as getStorage() and also used as <em>location</em> parameter for File.resolve() and FileSystemManager.resolve().
            </p>
 *
 * @type String
 */
FileSystemStorage.prototype.label = new String();

/**
 * The storage type as internal or external.
 *
 * @type FileSystemStorageType
 */
FileSystemStorage.prototype.type = new FileSystemStorageType();

/**
 * The storage state as mounted or not.
 *
 * @type FileSystemStorageState
 */
FileSystemStorage.prototype.state = new FileSystemStorageState();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} files
 * @type void
 * @memberOf FileArraySuccessCallback
 * @returns {void}
 */
FileArraySuccessCallback.prototype.onsuccess = function(files){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {File} file
 * @type void
 * @memberOf FileSuccessCallback
 * @returns {void}
 */
FileSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * Object representing a filesystem.
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.filesystem = new FileSystemManager();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {Path} path
 * @type void
 * @memberOf PathSuccessCallback
 * @returns {void}
 */
PathSuccessCallback.prototype.onsuccess = function(path){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} names
 * @param {Path} path
 * @type void
 * @memberOf ListDirectorySuccessCallback
 * @returns {void}
 */
ListDirectorySuccessCallback.prototype.onsuccess = function(names, path){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {FileSystemStorage} storage
 * @type void
 * @memberOf FileSystemStorageSuccessCallback
 * @returns {void}
 */
FileSystemStorageSuccessCallback.prototype.onsuccess = function(storage){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {Number} position
 * @type void
 * @memberOf SeekSuccessCallback
 * @returns {void}
 */
SeekSuccessCallback.prototype.onsuccess = function(position){ return; };

/**
 * Path, as passed to .
 *
 * @type Path
 */
FileHandle.prototype.path = new Path();

/**
 * Sets position indicator in file stream to .
            <p>
Note, that current position indicator value, can be obtained by calling <var>seek(0, "CURRENT")</var>.
            </p>
           
 *
 * @param {Number} offset
 * @param {BaseSeekPosition} whence
 * @type Number
 * @memberOf FileHandle
 * @returns {Number}
 */
FileHandle.prototype.seek = function(offset, whence){ var ret = new Number(); return ret; };

/**
 * Sets position indicator in file stream to .
            <p>
Successful seek operation invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if any error related to file handle occurs.              </li>
            </ul>
            <p>
Note, that current position indicator value, can be obtained in SeekSuccessCallback by calling <var>seekNonBlocking(0, "CURRENT")</var>.
seekNonBlocking is executed in background and does not block further instructions.
            </p>
           
 *
 * @param {Number} offset
 * @param {SeekSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {BaseSeekPosition} whence
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.seekNonBlocking = function(offset, onsuccess, onerror, whence){ return; };

/**
 * Reads file content as string.
            <p>
Sets file handle position indicator at the end of read data.
Reads given number of characters.
            </p>
           
 *
 * @param {Number} count
 * @param {String} inputEncoding
 * @type String
 * @memberOf FileHandle
 * @returns {String}
 */
FileHandle.prototype.readString = function(count, inputEncoding){ var ret = new String(); return ret; };

/**
 * Reads file content as string.
            <p>
Reads given number of characters.
Sets file handle position indicator at the end of read data.
readStringNonBlocking is executed in background and does not block further instructions.
            </p>
            <p>
Successful read operation invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if read fails or any error related to file handle occurs.              </li>
            </ul>
           
 *
 * @param {ReadStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {Number} count
 * @param {String} inputEncoding
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.readStringNonBlocking = function(onsuccess, onerror, count, inputEncoding){ return; };

/**
 * Writes content to a file.
            <p>
Sets file handle position indicator at the end of written data.
            </p>
           
 *
 * @param {String} inputString
 * @param {String} outputEncoding
 * @type Number
 * @memberOf FileHandle
 * @returns {Number}
 */
FileHandle.prototype.writeString = function(inputString, outputEncoding){ var ret = new Number(); return ret; };

/**
 * Writes content to a file.
            <p>
Sets file handle position indicator at the end of written data.
writeStringNonBlocking is executed in background and does not block further instructions.
            </p>
            <p>
Successful write operation invokes <em>successCallback</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if write fails or any error related to file handle occurs.              </li>
            </ul>
           
 *
 * @param {String} inputString
 * @param {WriteStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} outputEncoding
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.writeStringNonBlocking = function(inputString, onsuccess, onerror, outputEncoding){ return; };

/**
 * Reads file content as .
            <p>
Sets file handle position indicator at the end of read data.
            </p>
           
 *
 * @param {Number} size
 * @type Blob
 * @memberOf FileHandle
 * @returns {Blob}
 */
FileHandle.prototype.readBlob = function(size){ var ret = new Blob(); return ret; };

/**
 * Reads file content as .
            <p>
Sets file handle position indicator at the end of read data.
readBlobNonBlocking is executed in background and does not block further instructions.
            </p>
            <p>
Successful read operation invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if read fails or any error related to file handle occurs.              </li>
            </ul>
           
 *
 * @param {ReadBlobSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {Number} size
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.readBlobNonBlocking = function(onsuccess, onerror, size){ return; };

/**
 * Writes to file.
            <p>
Sets file handle position indicator at the end of written data.
            </p>
           
 *
 * @param {Blob} blob
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.writeBlob = function(blob){ return; };

/**
 * Writes to file.
            <p>
Sets file handle position indicator at the end of written data.
writeBlobNonBlocking is executed in background and does not block further instructions.
            </p>
            <p>
Successful write operation invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if write fails or any error related to file handle occurs.              </li>
            </ul>
           
 *
 * @param {Blob} blob
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.writeBlobNonBlocking = function(blob, onsuccess, onerror){ return; };

/**
 * Reads file content as binary data.
            <p>
Can be used in combination with <a href="https://dev.w3.org/html5/spec-LC/webappapis.html#atob">atob() or btoa()</a> functions.
Sets file handle position indicator at the end of read data.
            </p>
           
 *
 * @param {Number} size
 * @type Uint8Array
 * @memberOf FileHandle
 * @returns {Uint8Array}
 */
FileHandle.prototype.readData = function(size){ var ret = [new Uint8()]; return ret; };

/**
 * Reads file content as binary data.
            <p>
Can be used in combination with <a href="https://dev.w3.org/html5/spec-LC/webappapis.html#atob">atob() or btoa()</a> functions.
Sets file handle position indicator at the end of read data.
readDataNonBlocking is executed in background and does not block further instructions.
            </p>
            <p>
Successful read operation invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if read fails or any error related to file handle occurs.              </li>
            </ul>
           
 *
 * @param {ReadDataSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {Number} size
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.readDataNonBlocking = function(onsuccess, onerror, size){ return; };

/**
 * Writes binary data to file.
            <p>
Can be used in combination with <a href="https://dev.w3.org/html5/spec-LC/webappapis.html#atob">atob() or btoa()</a> functions.
Sets file handle position indicator at the end of written data.
            </p>
           
 *
 * @param {Uint8Array} data
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.writeData = function(data){ return; };

/**
 * Writes binary data to file.
            <p>
Can be used in combination with <a href="https://dev.w3.org/html5/spec-LC/webappapis.html#atob">atob() or btoa()</a> functions.
Sets file handle position indicator at the end of written data.
writeDataNonBlocking is executed in background and does not block further instructions.
            </p>
            <p>
Successful write operation invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if write fails or any error related to file handle occurs.              </li>
            </ul>
           
 *
 * @param {Uint8Array} data
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.writeDataNonBlocking = function(data, onsuccess, onerror){ return; };

/**
 * Flushes data.
            <p>
For file handles with permission to write, flush writes any changes made to file content to underlying buffer.
            </p>
            <p>
Flush does not ensure that data is written on storage device, it only synchronizes RAM with file descriptor.
To ensure storage synchronization use <em>sync</em>, <em>close</em> or their asynchronous equivalent methods, which guarantee such synchronization.
            </p>
           
 *
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.flush = function(){ return; };

/**
 * Flushes data.
            <p>
For file handles with permission to write, flush writes any changes made to file content to underlying buffer.
            </p>
            <p>
Flush does not ensure that data is written on storage device, it only synchronizes RAM with file descriptor.
To ensure storage synchronization use <em>sync</em>, <em>close</em> or their asynchronous equivalent methods, which guarantee such synchronization.
            </p>
            <p>
Successful flushing invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if flush fails or any error related to file handle occurs.              </li>
            </ul>
            <p>
This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
            </p>
           
 *
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.flushNonBlocking = function(onsuccess, onerror){ return; };

/**
 * Synchronizes data to storage device.
            <p>
The sync function is intended to force a physical write of data from the buffer cache and to assure that after a system crash or other failure that all data up to the time of the sync() call is recorded on the disk.
            </p>
           
 *
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.sync = function(){ return; };

/**
 * Synchronizes data to storage device.
            <p>
The syncNonBlocking function is intended to force a physical write of data from the buffer cache and to assure that after a system crash or other failure that all data up to the time of the syncNonBlocking() execution is recorded on the disk.
            </p>
            <p>
Successful syncing invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if sync fails or any error related to file handle occurs.              </li>
            </ul>
            <p>
This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
            </p>
           
 *
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.syncNonBlocking = function(onsuccess, onerror){ return; };

/**
 * Closes file handle.
            <p>
Closes the given file stream. Closing file guarantees writing changes made to <em>FileHandle</em> to the storage device. Further operations on this file handle are not allowed.
            </p>
           
 *
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.close = function(){ return; };

/**
 * Closes file handle.
            <p>
Closes the given file stream. Closing file guarantees writing changes made to <em>FileHandle</em> to the storage device. Further operations on this file handle are not allowed.
            </p>
            <p>
Successful closing invokes <em>onsuccess</em> function, if specified. In case of failure <em>onerror</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if close fails or any error related to file handle occurs.              </li>
            </ul>
            <p>
This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
            </p>
           
 *
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileHandle
 * @returns {void}
 */
FileHandle.prototype.closeNonBlocking = function(onsuccess, onerror){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {Blob} blob
 * @type void
 * @memberOf ReadBlobSuccessCallback
 * @returns {void}
 */
ReadBlobSuccessCallback.prototype.onsuccess = function(blob){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} storages
 * @type void
 * @memberOf FileSystemStorageArraySuccessCallback
 * @returns {void}
 */
FileSystemStorageArraySuccessCallback.prototype.onsuccess = function(storages){ return; };

/**
 * The maximum file or directory name length for the current platform.
 *
 * @type Number
 */
FileSystemManager.prototype.maxNameLength = new Number();

/**
 * The maximum path length limit for the current platform.
 *
 * @type Number
 */
FileSystemManager.prototype.maxPathLength = new Number();

/**
 * Opens a file or creates a file pointed by .
            <p>
If the operation succeeds, a file handle to the newly created or opened file is returned, otherwise an exception is thrown.
            </p>
            <p>
Following file open modes are supported:
            </p>
            <ul>
              <li>
<var>a</var> - append mode. File position indicator is always set to the first position after the last character of the file and cannot be modified with seek operations. Write operations always append content to the end of the file. Original file content are not modified. Read operations cannot be performed. If the file does not exist, it is created.              </li>
              <li>
<var>r</var> - read mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Write operations cannot be performed. Original file content may be read in this mode. If the file does not exist, NotFoundError is thrown.              </li>
              <li>
<var>rw</var> - read and write mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Original file content may be read or modified in this mode. If the file does not exist, NotFoundError will be thrown.              </li>
              <li>
<var>rwo</var> - read and write mode, overwriting existing file content. File position indicator is initially set to the beginning of the file. Read and write operations may be performed. Original file content are deleted before opening the file. If the file does not exist, it is created.              </li>
              <li>
<var>w</var> - write mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Read operations cannot be performed. Original file content are deleted before opening the file. If the file does not exist, it is created.              </li>
            </ul>
           
 *
 * @param {Path} path
 * @param {FileMode} openMode
 * @param {Boolean} makeParents
 * @type FileHandle
 * @memberOf FileSystemManager
 * @returns {FileHandle}
 */
FileSystemManager.prototype.openFile = function(path, openMode, makeParents){ var ret = new FileHandle(); return ret; };

/**
 * Creates directory pointed by .
            <p>
Successful directory creation invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if any of the input/output error occurs.              </li>
              <li>
NotFoundError, if directory given in <em>path</em> does not exist and <em>makeParents</em> is set to false.              </li>
            </ul>
           
 *
 * @param {Path} path
 * @param {Boolean} makeParents
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.createDirectory = function(path, makeParents, successCallback, errorCallback){ return; };

/**
 * Deletes file pointed by .
            <p>
Successful file deletion invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>path</em> does not point to an existing file.              </li>
            </ul>
           
 *
 * @param {Path} path
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.deleteFile = function(path, successCallback, errorCallback){ return; };

/**
 * Deletes directory or directory tree under the current directory pointed by .
            <p>
Successful directory deletion invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if a directory is not empty and <em>recursive</em> is equal to <var>false</var>.              </li>
              <li>
NotFoundError, if the <em>path</em> does not point to an existing directory.              </li>
            </ul>
           
 *
 * @param {Path} path
 * @param {Boolean} recursive
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.deleteDirectory = function(path, recursive, successCallback, errorCallback){ return; };

/**
 * Copies file from location pointed by to .
            <p>
Successful file copying invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>sourcePath</em> does not point to an existing file.              </li>
            </ul>
           
 *
 * @param {Path} sourcePath
 * @param {Path} destinationPath
 * @param {Boolean} overwrite
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.copyFile = function(sourcePath, destinationPath, overwrite, successCallback, errorCallback){ return; };

/**
 * Recursively copies directory pointed by to .
            <p>
The method merges content of the directory pointed by <em>sourcePath</em> with content of the directory pointed by <em>destinationPath</em>, if exists.
If the directory pointed by <em>destinationPath</em> does not exist, it is created.
            </p>
            <p>
Successful directory copying invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if a directory with conflicting name already exists and <em>overwrite</em> is equal to <var>false</var> or any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>sourcePath</em> does not point to an existing directory.              </li>
            </ul>
           
 *
 * @param {Path} sourcePath
 * @param {Path} destinationPath
 * @param {Boolean} overwrite
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.copyDirectory = function(sourcePath, destinationPath, overwrite, successCallback, errorCallback){ return; };

/**
 * Moves file pointed by to .
            <p>
Successful file moving invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if a file with conflicting name already exists and <em>overwrite</em> is equal to <var>false</var> or any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>sourcePath</em> or <em>destinationPath</em> does not point to an existing file or directory.              </li>
            </ul>
           
 *
 * @param {Path} sourcePath
 * @param {Path} destinationPath
 * @param {Boolean} overwrite
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.moveFile = function(sourcePath, destinationPath, overwrite, successCallback, errorCallback){ return; };

/**
 * Recursively moves directory pointed by to .
            <p>
The method merges content of the directory pointed by <em>sourcePath</em> with content of the directory with the same name in <em>destinationPath</em>, if exists.
            </p>
            <p>
Successful directory moving invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if a directory with conflicting name already exists and <em>overwrite</em> is equal to <var>false</var> or any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>sourcePath</em> or <em>destinationPath</em> does not point to an existing directory.              </li>
            </ul>
           
 *
 * @param {Path} sourcePath
 * @param {Path} destinationPath
 * @param {Boolean} overwrite
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.moveDirectory = function(sourcePath, destinationPath, overwrite, successCallback, errorCallback){ return; };

/**
 * Renames file or directory located in to name .
            <p>
Successful renaming invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if a file or a directory with conflicting name already exists or any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>path</em> does not point to an existing file or directory.              </li>
            </ul>
           
 *
 * @param {Path} path
 * @param {String} newName
 * @param {PathSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.rename = function(path, newName, successCallback, errorCallback){ return; };

/**
 * Lists directory content located in .
            <p>
Successful listing of directory content invokes <em>successCallback</em> function, if specified. In case of failure <em>errorCallback</em> function is invoked, if specified.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories or files in the directory that match the filter criteria specified in the <em>FileFilter</em> interface are returned in successCallback method.
If the filter is <var>null</var> or <var>undefined</var> the implementation must return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or the filter criteria do not match with any files or directories, the <em>successCallback</em> is invoked with an empty array.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError, if any of the input/output error occurs.              </li>
              <li>
NotFoundError, if the <em>path</em> does not point to an existing directory.              </li>
            </ul>
           
 *
 * @param {Path} path
 * @param {ListDirectorySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {FileFilter} filter
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listDirectory = function(path, successCallback, errorCallback, filter){ return; };

/**
 * Converts to file URI.
 *
 * @param {Path} path
 * @type String
 * @memberOf FileSystemManager
 * @returns {String}
 */
FileSystemManager.prototype.toURI = function(path){ var ret = new String(); return ret; };

/**
 * Checks if given points to a file.
 *
 * @param {Path} path
 * @type Boolean
 * @memberOf FileSystemManager
 * @returns {Boolean}
 */
FileSystemManager.prototype.isFile = function(path){ var ret = new Boolean(); return ret; };

/**
 * Checks if given points to a directory.
 *
 * @param {Path} path
 * @type Boolean
 * @memberOf FileSystemManager
 * @returns {Boolean}
 */
FileSystemManager.prototype.isDirectory = function(path){ var ret = new Boolean(); return ret; };

/**
 * Checks if given exists.
 *
 * @param {Path} path
 * @type Boolean
 * @memberOf FileSystemManager
 * @returns {Boolean}
 */
FileSystemManager.prototype.pathExists = function(path){ var ret = new Boolean(); return ret; };

/**
 * Returns path to directory for given .
            <p>
Strips trailing '/', then breaks <em>path</em> into two components by last <em>path</em> separator, returns first component.
            </p>
           
 *
 * @param {String} path
 * @type String
 * @memberOf FileSystemManager
 * @returns {String}
 */
FileSystemManager.prototype.getDirName = function(path){ var ret = new String(); return ret; };

/**
 * Resolves a location to a file handle after validating it.
            <p>
A <em>location</em> can contain a virtual path like "<var>documents/some_file.txt</var>"
or a file URI like "<var>file:///my_strange_path/some_file.png</var>".
A <em>location</em> is not allowed to contain the "." or ".." directory entries inside its value.
            </p>
            <p>
The list of root locations that must be supported by a compliant implementation are:
            </p>
            <ul>
              <li>
documents - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.              </li>
              <li>
images - The default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.              </li>
              <li>
music - The default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.              </li>
              <li>
videos - The default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.              </li>
              <li>
downloads - The default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.              </li>
              <li>
ringtones - The default folder in which ringtones (such as mp3, etc.) are stored in the device.              </li>
              <li>
camera - The default folder in which pictures and videos taken by a device are stored.              </li>
              <li>
wgt-package - The read-only folder to which the content of a widget file is extracted.              </li>
              <li>
wgt-private - The private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.              </li>
              <li>
wgt-private-tmp - Temporary, the private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.              </li>
            </ul>
            <p>
The <em>mode</em> parameter specifies whether the resulting <em>File</em> object has read-only access (<var>r</var> access), read and write access (<var>rw</var> access), append access (<var>a</var> access), or write access (<var>w</var> access) to the root location containing directory tree.
Permission for the requested access is obtained from the security framework. Once the resulting <em>File</em> object has access, access is inherited by any other <em>File</em> objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of <em>File</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.
For example, the mode is <var>w</var> for the read-only virtual roots (wgt-package and ringtones).              </li>
              <li>
NotFoundError - If the location input argument does not correspond to a valid location.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} location
 * @param {FileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileMode} mode
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.resolve = function(location, onsuccess, onerror, mode){ return; };

/**
 * Gets information about a storage based on its label.For example: "MyThumbDrive", "InternalFlash".
            <p>
The <em>onsuccess</em> method receives the data structure as an input argument containing additional information about the drive.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
NotFoundError - If no drive was found with the given label.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} label
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.getStorage = function(label, onsuccess, onerror){ return; };

/**
 * Lists the available storages (both internal and external) on a device. The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found. It can get storages that would have a label named as "internal0", virtual roots (images, documents, ...), "removable1", "removable2". "removable1" label is used to resolve sdcard and "removable2" label is used to resolve USB host, if supported. The vfat filesystem used to sdcard filesystem widely is not case-sensitive. If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
            <p>
Labels can differ depending on platform implementation.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileSystemStorageArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listStorages = function(onsuccess, onerror){ return; };

/**
 * Adds a listener to subscribe to notifications when a change in storage state occurs.
            <p>
The most common usage for this method is to watch for any additions and removals of external storages.
            </p>
            <p>
When executed, it returns a subscription identifier that identifies the watch operation. After returning the identifier, the watch operation is started asynchronously. The onsuccess method will be invoked every time a storage state changes. If the attempt fails, the onerror if present will be invoked with the relevant error type.
            </p>
            <p>
The watch operation must continue until the removeStorageStateChangeListener() method is called with the corresponding subscription identifier.
            </p>
           
 *
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf FileSystemManager
 * @returns {Number}
 */
FileSystemManager.prototype.addStorageStateChangeListener = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Removes a listener to unsubscribe from a storage watch operation.
            <p>
If the <em>watchId</em> argument is valid and corresponds to a subscription already in place, the watch process will be stopped and no further callbacks will be invoked.
Otherwise, the method call has no effect.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.removeStorageStateChangeListener = function(watchId){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {String} fileStr
 * @type void
 * @memberOf FileStringSuccessCallback
 * @returns {void}
 */
FileStringSuccessCallback.prototype.onsuccess = function(fileStr){ return; };

/**
 * Object representing a filesystem.
 *
 * @type FileSystemManager
 */
Tizen.prototype.filesystem = new FileSystemManager();

/**
 * The GestureData interface represents detected gesture information.
 *
 * @super Object
 * @constructor
 * @return {GestureData}
 */
function GestureData() {};
GestureData.prototype = new Object();

/**
 * The HumanActivityGPSInfo interface represents GPS information.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityGPSInfo}
 */
function HumanActivityGPSInfo() {};
HumanActivityGPSInfo.prototype = new Object();

/**
 * The GestureRecognitionCallback describes a callback for the addGestureRecognitionListener() method.
 *
 * @super Object
 * @constructor
 * @return {GestureRecognitionCallback}
 */
function GestureRecognitionCallback() {};
GestureRecognitionCallback.prototype = new Object();

/**
 * The StressMonitorDataRange interface represents range information for stress monitoring.
 *
 * @super Object
 * @constructor
 * @return {StressMonitorDataRange}
 */
function StressMonitorDataRange() {};
StressMonitorDataRange.prototype = new Object();

/**
 * The HumanActivityRecorderData interface is a common abstract interface used for the different types of human activity recorder data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderData}
 */
function HumanActivityRecorderData() {};
HumanActivityRecorderData.prototype = new Object();

/**
 * The HumanActivityRecorderSleepMonitorData interface represents a recorded SLEEP_MONITOR data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderSleepMonitorData}
 */
function HumanActivityRecorderSleepMonitorData() {};
HumanActivityRecorderSleepMonitorData.prototype = new HumanActivityRecorderData();

/**
 * The HumanActivityRecorderHRMData interface represents a recorded HRM data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderHRMData}
 */
function HumanActivityRecorderHRMData() {};
HumanActivityRecorderHRMData.prototype = new HumanActivityRecorderData();

/**
 * The HumanActivityStressMonitorData interface represents stress monitor data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityStressMonitorData}
 */
function HumanActivityStressMonitorData() {};
HumanActivityStressMonitorData.prototype = new HumanActivityData();

/**
 * The HumanActivityPedometerData interface represents pedometer data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityPedometerData}
 */
function HumanActivityPedometerData() {};
HumanActivityPedometerData.prototype = new HumanActivityData();

/**
 * The HumanActivityMonitorSuccessCallback interface is a callback interface that is invoked when new human activity data is available.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorSuccessCallback}
 */
function HumanActivityMonitorSuccessCallback() {};
HumanActivityMonitorSuccessCallback.prototype = new Object();

/**
 * The StepDifference interface represents the count difference between steps and timestamp.
 *
 * @super Object
 * @constructor
 * @return {StepDifference}
 */
function StepDifference() {};
StepDifference.prototype = new Object();

/**
 * The HumanActivityGPSInfoArray interface represents GPS information array.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityGPSInfoArray}
 */
function HumanActivityGPSInfoArray() {};
HumanActivityGPSInfoArray.prototype = new HumanActivityData();

/**
 * The HumanActivityRecorderPedometerData interface represents recorded PEDOMETER data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderPedometerData}
 */
function HumanActivityRecorderPedometerData() {};
HumanActivityRecorderPedometerData.prototype = new HumanActivityRecorderData();

/**
 * The HumanActivityData interface is a common abstract interface used by the different types of human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityData}
 */
function HumanActivityData() {};
HumanActivityData.prototype = new Object();

/**
 * The HumanActivityRecognitionData interface represents a activity recognition data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecognitionData}
 */
function HumanActivityRecognitionData() {};
HumanActivityRecognitionData.prototype = new HumanActivityData();

/**
 * The HumanActivityAccumulativePedometerData interface represents pedometer motion data since the device boot.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityAccumulativePedometerData}
 */
function HumanActivityAccumulativePedometerData() {};
HumanActivityAccumulativePedometerData.prototype = new HumanActivityData();

/**
 * The HumanActivityHRMData interface represents Heart Rate Monitor(HRM) data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityHRMData}
 */
function HumanActivityHRMData() {};
HumanActivityHRMData.prototype = new HumanActivityData();

/**
 * The HumanActivityMonitorManagerObject interface defines what is instantiated by the object. The object allows access to the human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorManagerObject}
 */
function HumanActivityMonitorManagerObject() {};
HumanActivityMonitorManagerObject.prototype = new Object();

/**
 * The HumanActivitySleepDetectorData interface represents sleep detector data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivitySleepDetectorData}
 */
function HumanActivitySleepDetectorData() {};
HumanActivitySleepDetectorData.prototype = new HumanActivityData();

/**
 * The HumanActivityMonitorManager interface provides methods to access human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorManager}
 */
function HumanActivityMonitorManager() {};
HumanActivityMonitorManager.prototype = new Object();

/**
 * The HumanActivityReadRecorderSuccessCallback interface is a callback interface that is invoked when recorded human activity data is successfully read.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityReadRecorderSuccessCallback}
 */
function HumanActivityReadRecorderSuccessCallback() {};
HumanActivityReadRecorderSuccessCallback.prototype = new Object();

/**
 * The HumanActivitySleepMonitorData interface represents sleep monitor data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivitySleepMonitorData}
 */
function HumanActivitySleepMonitorData() {};
HumanActivitySleepMonitorData.prototype = new HumanActivityData();

/**
 * The StressMonitorCallback describes a callback for the addStressMonitorChangeListener() method.
 *
 * @super Object
 * @constructor
 * @return {StressMonitorCallback}
 */
function StressMonitorCallback() {};
StressMonitorCallback.prototype = new Object();

/**
 * The HumanActivityRecorderPressureData interface represents a recorded PRESSURE data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderPressureData}
 */
function HumanActivityRecorderPressureData() {};
HumanActivityRecorderPressureData.prototype = new HumanActivityRecorderData();

/**
 * Identifier of gesture type.
 *
 * @type GestureType
 */
GestureData.prototype.type = new GestureType();

/**
 * Event type related to the detected gesture.
 *
 * @type GestureEvent
 */
GestureData.prototype.event = new GestureEvent();

/**
 * Time when gesture was detected. Epoch time in seconds.
 *
 * @type Number
 */
GestureData.prototype.timestamp = new Number();

/**
 * Tilt degree on X-axis. It is used only for type. For other gesture types it is set to null.
 *
 * @type Number
 */
GestureData.prototype.x = new Number();

/**
 * Tilt degree on Y-axis. It is used only for type. For other gesture types it is set to null.
 *
 * @type Number
 */
GestureData.prototype.y = new Number();

/**
 * An attribute to indicate the user's latitude in degrees.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.latitude = new Number();

/**
 * An attribute to indicate the user's longitude in degrees.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.longitude = new Number();

/**
 * An attribute to indicate the user's altitude in meters.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.altitude = new Number();

/**
 * An attribute to indicate the speed in km/h.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.speed = new Number();

/**
 * An attribute to indicate the error range of the user's position in meters.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.errorRange = new Number();

/**
 * An attribute to indicate timestamp in seconds.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.timestamp = new Number();

/**
 * Called when a gesture is detected.
 *
 * @param {GestureData} data
 * @type void
 * @memberOf GestureRecognitionCallback
 * @returns {void}
 */
GestureRecognitionCallback.prototype.onsuccess = function(data){ return; };

/**
 * Name of range. Default value is "";
 *
 * @type String
 */
StressMonitorDataRange.prototype.label = new String();

/**
 * Minimum value of range. Default value is 0.
 *
 * @type Number
 */
StressMonitorDataRange.prototype.min = new Number();

/**
 * Maximum value of range. If is undefined it means that this value represents infinity. Default value is undefined.
 *
 * @type Number
 */
StressMonitorDataRange.prototype.max = new Number();

/**
 * Recording start time of the data in this HumanActivityRecorderData object. Epoch time in seconds.
 *
 * @type Number
 */
HumanActivityRecorderData.prototype.startTime = new Number();

/**
 * Recording end time of the data in this HumanActivityRecorderData object. Epoch time in seconds.
 *
 * @type Number
 */
HumanActivityRecorderData.prototype.endTime = new Number();

/**
 * The sleep status.
 *
 * @type SleepStatus
 */
HumanActivityRecorderSleepMonitorData.prototype.status = new SleepStatus();

/**
 * Heart rate in beats per minute.
 *
 * @type Number
 */
HumanActivityRecorderHRMData.prototype.heartRate = new Number();

/**
 * Value returned from . It's a .
 *
 * @type Number
 */
HumanActivityStressMonitorData.prototype.stressScore = new Number();

/**
 * The current movement type.
 *
 * @type PedometerStepStatus
 */
HumanActivityPedometerData.prototype.stepStatus = new PedometerStepStatus();

/**
 * Current speed in km/h.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.speed = new Number();

/**
 * Step count per second.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.walkingFrequency = new Number();

/**
 * Cumulative distance traveled since the last method call in meters.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeDistance = new Number();

/**
 * Cumulative calories burnt since the last method call in kcal.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeCalorie = new Number();

/**
 * Cumulative walking and running step count since the last start() method call.
 * <p>
The value is the sum of <em>cumulativeWalkStepCount</em> and <em>cumulativeRunStepCount</em>.
            </p>
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeTotalStepCount = new Number();

/**
 * Cumulative walking step count since the last method call.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeWalkStepCount = new Number();

/**
 * Cumulative running step count since the last method call.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeRunStepCount = new Number();

/**
 * Accumulative distance traveled since the device boot in meters.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.accumulativeDistance = new Number();

/**
 * Accumulative calories burnt since the device boot in kcal.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.accumulativeCalorie = new Number();

/**
 * Accumulative walking and running step count since the device boot.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.accumulativeTotalStepCount = new Number();

/**
 * Accumulative walking step count since the device boot.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.accumulativeWalkStepCount = new Number();

/**
 * Accumulative running step count since the device boot.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.accumulativeRunStepCount = new Number();

/**
 * Array of the StepDifference.
 *
 * @type array
 */
HumanActivityPedometerData.prototype.stepCountDifferences = new array();

/**
 * Called when there is new human activity data available.
 *
 * @param {HumanActivityData} humanactivitydata
 * @type void
 * @memberOf HumanActivityMonitorSuccessCallback
 * @returns {void}
 */
HumanActivityMonitorSuccessCallback.prototype.onsuccess = function(humanactivitydata){ return; };

/**
 * Count difference between the steps.
 *
 * @type Number
 */
StepDifference.prototype.stepCountDifference = new Number();

/**
 * Timestamp in seconds.
 *
 * @type Number
 */
StepDifference.prototype.timestamp = new Number();

/**
 * An attribute to indicate the array of GPS information.
 *
 * @type array
 */
HumanActivityGPSInfoArray.prototype.gpsInfo = new array();

/**
 * Distance traveled from to in meters.
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.distance = new Number();

/**
 * Calories burnt from to in kcal.
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.calorie = new Number();

/**
 * Walking and running step count from to . The value is the sum of and .
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.totalStepCount = new Number();

/**
 * Walking step count from to .
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.walkStepCount = new Number();

/**
 * Running step count from to .
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.runStepCount = new Number();

/**
 * The type of activity.
 *
 * @type ActivityRecognitionType
 */
HumanActivityRecognitionData.prototype.type = new ActivityRecognitionType();

/**
 * The time when the activity is recognized. Epoch time in seconds.
 *
 * @type Number
 */
HumanActivityRecognitionData.prototype.timestamp = new Number();

/**
 * The degree of accuracy.
 *
 * @type ActivityAccuracy
 */
HumanActivityRecognitionData.prototype.accuracy = new ActivityAccuracy();

/**
 * Current movement type.
 *
 * @type PedometerStepStatus
 */
HumanActivityAccumulativePedometerData.prototype.stepStatus = new PedometerStepStatus();

/**
 * Current speed in km/h.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.speed = new Number();

/**
 * Step count per second.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.walkingFrequency = new Number();

/**
 * Accumulative distance traveled since the device boot in meters.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeDistance = new Number();

/**
 * Accumulative calories burnt since the device boot in kcal.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeCalorie = new Number();

/**
 * Accumulative walking and running step count since the device boot.
 * <p>
The value is the sum of <em>accumulativeWalkStepCount</em> and <em>accumulativeRunStepCount</em>.
            </p>
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeTotalStepCount = new Number();

/**
 * Accumulative walking step count since the device boot.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeWalkStepCount = new Number();

/**
 * Accumulative running step count since the device boot.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeRunStepCount = new Number();

/**
 * Array of the StepDifference.
 *
 * @type array
 */
HumanActivityAccumulativePedometerData.prototype.stepCountDifferences = new array();

/**
 * Heart rate in beats per minute. When a user takes off the watch device, the heartRate is set to -3. When a user shakes the watch, the heartRate is set to -2.
 *
 * @type Number
 */
HumanActivityHRMData.prototype.heartRate = new Number();

/**
 * Peak-to-peak interval in millisecond(s).
 *
 * @type Number
 */
HumanActivityHRMData.prototype.rRInterval = new Number();

/**
 * Object representing a exif manager.
 *
 * @type HumanActivityMonitorManager
 */
HumanActivityMonitorManagerObject.prototype.humanactivitymonitor = new HumanActivityMonitorManager();

/**
 * Sleep state (can be UNKNOWN, ASLEEP and AWAKE).
 *
 * @type SleepStatus
 */
HumanActivitySleepDetectorData.prototype.status = new SleepStatus();

/**
 * Gets the current human activity data for certain human activity types.
            <p>
The <em>start()</em> method should be called to turn on the sensor before calling the <em>getHumanActivityData()</em> method. If not, <var>ServiceNotAvailableError</var> occurs.
            </p>
            <p>
If the given type is not supported on a device, <var>NotSupportedError</var> is thrown.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError: If the <em>getHumanActivityData()</em> method is called without previously calling the <em>start()</em> method              </li>
            </ul>
           
 *
 * @param {HumanActivityType} type
 * @param {HumanActivityMonitorSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.getHumanActivityData = function(type, successCallback, errorCallback){ return; };

/**
 * Starts a sensor and registers a change listener to be called when new human activity data for a given human activity type is available.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If the human activity service is not available. For the GPS type, if the GPS function is disabled by the user in the location settings, it is not possible to receive notifications when the GPS value changes.              </li>
            </ul>
           
 *
 * @param {HumanActivityType} type
 * @param {HumanActivityMonitorSuccessCallback} changedCallback
 * @param {ErrorCallback} errorCallback
 * @param {HumanActivityMonitorOption} option
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.start = function(type, changedCallback, errorCallback, option){ return; };

/**
 * Stops the sensor and unregisters a previously registered listener for available human activity data.
           
 *
 * @param {HumanActivityType} type
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.stop = function(type){ return; };

/**
 * Starts the sensor and registers a listener to be called when new accumulative pedometer data is available.
            <p>
Note that the setAccumulativePedometerListener() method does not need to call the sensor's start() method.
            </p>
           
 *
 * @param {HumanActivityMonitorSuccessCallback} changeCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.setAccumulativePedometerListener = function(changeCallback){ return; };

/**
 * Stops the sensor and unregisters a previously registered listener for the accumulative pedometer data.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.unsetAccumulativePedometerListener = function(){ return; };

/**
 * Registers a listener that is to be called when the activity is recognized.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
AbortError: If the system operation was aborted.              </li>
            </ul>
           
 *
 * @param {ActivityRecognitionType} type
 * @param {HumanActivityMonitorSuccessCallback} listener
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf HumanActivityMonitorManager
 * @returns {Number}
 */
HumanActivityMonitorManager.prototype.addActivityRecognitionListener = function(type, listener, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notifications when the activity is recognized.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
AbortError: If the system operation was aborted.              </li>
            </ul>
           
 *
 * @param {Number} listenerId
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.removeActivityRecognitionListener = function(listenerId, errorCallback){ return; };

/**
 * Starts recording human activity data for a given human activity type.
 *
 * @param {HumanActivityRecorderType} type
 * @param {HumanActivityRecorderOption} option
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.startRecorder = function(type, option){ return; };

/**
 * Stops recording human activity data for a given human activity type.
 *
 * @param {HumanActivityRecorderType} type
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.stopRecorder = function(type){ return; };

/**
 * Reads the recorded human activity data with some query.
            <p>
If another application has recorded data for a particular human activity type, your application can read that data.
Therefore, you can use this method to read without calling <em>startRecorder()</em>.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
AbortError: If the system operation was aborted while reading data asynchronously.              </li>
              <li>
NotFoundError: If no recorder data is available.              </li>
            </ul>
           
 *
 * @param {HumanActivityRecorderType} type
 * @param {HumanActivityRecorderQuery} query
 * @param {HumanActivityReadRecorderSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.readRecorderData = function(type, query, successCallback, errorCallback){ return; };

/**
 * Checks if gesture type is supported on a device.
            <p>
This function allows to check whether a gesture type is supported on the current device. Some gestures may not be supported on some devices because of lack necessary sensors.
            </p>
           
 *
 * @param {GestureType} type
 * @type Boolean
 * @memberOf HumanActivityMonitorManager
 * @returns {Boolean}
 */
HumanActivityMonitorManager.prototype.isGestureSupported = function(type){ var ret = new Boolean(); return ret; };

/**
 * Adds a listener to be invoked when given gesture type is detected.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
AbortError: If the system operation was aborted.              </li>
            </ul>
           
 *
 * @param {GestureType} type
 * @param {GestureRecognitionCallback} listener
 * @param {ErrorCallback} errorCallback
 * @param {Boolean} alwaysOn
 * @type Number
 * @memberOf HumanActivityMonitorManager
 * @returns {Number}
 */
HumanActivityMonitorManager.prototype.addGestureRecognitionListener = function(type, listener, errorCallback, alwaysOn){ var ret = new Number(); return ret; };

/**
 * Removes listener with the given id.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.removeGestureRecognitionListener = function(watchId){ return; };

/**
 * Adds a listener to be invoked when returned value enters into defined range (the range is changed).
            <p>
<em>listener</em> is called whenever value returned from <em>STRESS_MONITOR</em> enters into defined range.
            </p>
            <p>
For example:
            </p>
            <p>
Registered ranges:
            </p>
            <table>
              <tr>
                <th>
Label                </th>
                <th>
min                </th>
                <th>
max                </th>
              </tr>
              <tr>
                <td>
Normal                </td>
                <td>
10                </td>
                <td>
15                </td>
              </tr>
              <tr>
                <td>
Stress Alarm                </td>
                <td>
15                </td>
                <td>
17                </td>
              </tr>
            </table>
            <p>
Returning value:
            </p>
            <table>
              <tr>
                <th>
Value                </th>
                <th>
Action                </th>
                <th>
Comments                </th>
              </tr>
              <tr>
                <td>
9                </td>
                <td>
No Action                </td>
                <td>
Out of range                </td>
              </tr>
              <tr>
                <td>
11                </td>
                <td>
Normal                </td>
                <td>
Within the range 10-15                </td>
              </tr>
              <tr>
                <td>
12                </td>
                <td>
No Action                </td>
                <td>
Already in range                </td>
              </tr>
              <tr>
                <td>
15                </td>
                <td>
Stress Alarm                </td>
                <td>
Within the range 15-17                </td>
              </tr>
              <tr>
                <td>
17                </td>
                <td>
No Action                </td>
                <td>
Out of range                </td>
              </tr>
              <tr>
                <td>
18                </td>
                <td>
No Action                </td>
                <td>
Out of range                </td>
              </tr>
              <tr>
                <td>
10                </td>
                <td>
Normal                </td>
                <td>
Within the range 10-15                </td>
              </tr>
            </table>
           
 *
 * @param {array} ranges
 * @param {StressMonitorCallback} listener
 * @type Number
 * @memberOf HumanActivityMonitorManager
 * @returns {Number}
 */
HumanActivityMonitorManager.prototype.addStressMonitorChangeListener = function(ranges, listener){ var ret = new Number(); return ret; };

/**
 * Removes listener with the given id.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.removeStressMonitorChangeListener = function(watchId){ return; };

/**
 * Called when recorded human activity data is successfully read.
 *
 * @param {array} humanactivitydata
 * @type void
 * @memberOf HumanActivityReadRecorderSuccessCallback
 * @returns {void}
 */
HumanActivityReadRecorderSuccessCallback.prototype.onsuccess = function(humanactivitydata){ return; };

/**
 * The sleep status.
 *
 * @type SleepStatus
 */
HumanActivitySleepMonitorData.prototype.status = new SleepStatus();

/**
 * The time when the sleep status is recognized. Epoch time in milliseconds.
 *
 * @type Number
 */
HumanActivitySleepMonitorData.prototype.timestamp = new Number();

/**
 * Called when value returned from is within registered range.
 *
 * @param {String} label
 * @type void
 * @memberOf StressMonitorCallback
 * @returns {void}
 */
StressMonitorCallback.prototype.onsuccess = function(label){ return; };

/**
 * Max pressure in hectopascal (hPa).
 *
 * @type Number
 */
HumanActivityRecorderPressureData.prototype.max = new Number();

/**
 * Min pressure in hectopascal (hPa).
 *
 * @type Number
 */
HumanActivityRecorderPressureData.prototype.min = new Number();

/**
 * Average pressure in hectopascal (hPa).
 *
 * @type Number
 */
HumanActivityRecorderPressureData.prototype.average = new Number();

/**
 * Object representing a exif manager.
 *
 * @type HumanActivityMonitorManager
 */
Tizen.prototype.humanactivitymonitor = new HumanActivityMonitorManager();

/**
 * The InputDeviceManager interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.inputdevice object that allows accessing the functionality of the Input Device API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {InputDeviceManagerObject}
 */
function InputDeviceManagerObject() {};
InputDeviceManagerObject.prototype = new Object();

/**
 * The InputDeviceKey interface stores information about the key.
 *
 * @super Object
 * @constructor
 * @return {InputDeviceKey}
 */
function InputDeviceKey() {};
InputDeviceKey.prototype = new Object();

/**
 * The InputDeviceManager interface provides the features to check for availability and register for input device events.
 *
 * @super Object
 * @constructor
 * @return {InputDeviceManager}
 */
function InputDeviceManager() {};
InputDeviceManager.prototype = new Object();

/**
 * Object representing a input device manager.
 *
 * @type InputDeviceManager
 */
InputDeviceManagerObject.prototype.inputdevice = new InputDeviceManager();

/**
 * The name of the key, for example or .
 * <p>
If the key is listed in the <a href="https://www.w3.ohttp://127.0.0.1:63492/help/topic/uievents-key">DOM Level 3 KeyboardEvent key Values</a> specification, the <em>name</em> attribute is equal to the <em>key value</em> specified there. (The <a href="https://www.w3.ohttp://127.0.0.1:63492/help/topic/uievents-key/#keys-media-controller">Media Controller Keys</a> section is the most relevant to the Input Device API)
            </p>
 * <p>
If the "DOM Level 3 KeyboardEvent key Value" does not contain appropriate entry for the key, then the Input Device provides a device specific <em>name</em>.
            </p>
 *
 * @type InputDeviceKeyName
 */
InputDeviceKey.prototype.name = new InputDeviceKeyName();

/**
 * The numeric code of the key, like or .
 * <p>
This is the <em>keyCode</em> attribute value of the Key Event generated by the key.
            </p>
 *
 * @type Number
 */
InputDeviceKey.prototype.code = new Number();

/**
 * Retrieves the list of keys can be registered with the method.
            <p>
Mandatory keys will not be retrieved by this method.
            </p>
           
 *
 * @type array
 * @memberOf InputDeviceManager
 * @returns {array}
 */
InputDeviceManager.prototype.getSupportedKeys = function(){ var ret = new array(); return ret; };

/**
 * Returns information about the key which has the given name.
 *
 * @param {InputDeviceKeyName} keyName
 * @type InputDeviceKey
 * @memberOf InputDeviceManager
 * @returns {InputDeviceKey}
 */
InputDeviceManager.prototype.getKey = function(keyName){ var ret = new InputDeviceKey(); return ret; };

/**
 * Registers an input device key to receive DOM keyboard event when it is pressed or released
            <p>
When an application wants to react to the Input Device keys being pressed, it should register this key.
            </p>
            <p>
An application can not register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
            </p>
           
 *
 * @param {InputDeviceKeyName} keyName
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.registerKey = function(keyName){ return; };

/**
 * Unregisters an input device key
 *
 * @param {InputDeviceKeyName} keyName
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.unregisterKey = function(keyName){ return; };

/**
 * Registers a batch of input device keys to receive DOM keyboard event when any of them is pressed or released
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the given keyNames is invalid or not supported              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
            <p>
When an application wants to react to the input device keys being pressed, it should register those keys.
            </p>
            <p>
An application can not register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
            </p>
           
 *
 * @param {array} keyNames
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.registerKeyBatch = function(keyNames, successCallback, errorCallback){ return; };

/**
 * Unregisters a batch of input device keys
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the given keyNames is invalid or not supported              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} keyNames
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.unregisterKeyBatch = function(keyNames, successCallback, errorCallback){ return; };

/**
 * Object representing a input device manager.
 *
 * @type InputDeviceManager
 */
Tizen.prototype.inputdevice = new InputDeviceManager();

/**
 * The Response Interface holds response from server for specified request of client. It is server-side object, Response on client-side is hold as object.
 *
 * @super Object
 * @constructor
 * @return {Response}
 */
function Response() {};
Response.prototype = new Object();

/**
 * This interface provides API to manage resource for server side.
 *
 * @super Object
 * @constructor
 * @return {Resource}
 */
function Resource() {};
Resource.prototype = new Object();

/**
 * The RemoteResponse Interface holds response from server for specified request of client, this is client-side version of object.
 *
 * @super Object
 * @constructor
 * @return {RemoteResponse}
 */
function RemoteResponse() {};
RemoteResponse.prototype = new Object();

/**
 * The PlatformInfo interface describes platform properties.
 *
 * @super Object
 * @constructor
 * @return {PlatformInfo}
 */
function PlatformInfo() {};
PlatformInfo.prototype = new Object();

/**
 * This interface provides API to manage remote resource for client side.
 *
 * @super Object
 * @constructor
 * @return {PresenceResponse}
 */
function PresenceResponse() {};
PresenceResponse.prototype = new Object();

/**
 * The CacheUpdatedCallback interface defines the success method to be invoked when remote resource is changed.
 *
 * @super Object
 * @constructor
 * @return {CacheUpdatedCallback}
 */
function CacheUpdatedCallback() {};
CacheUpdatedCallback.prototype = new Object();

/**
 * This interface provides API to manage remote resource for client side.
 *
 * @super Object
 * @constructor
 * @return {RemoteResource}
 */
function RemoteResource() {};
RemoteResource.prototype = new Object();

/**
 * The GeneratedPinCallback interface defines the success method to be invoked when random pin is generated.
 *
 * @super Object
 * @constructor
 * @return {GeneratedPinCallback}
 */
function GeneratedPinCallback() {};
GeneratedPinCallback.prototype = new Object();

/**
 * The FoundResourceSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {FoundResourceSuccessCallback}
 */
function FoundResourceSuccessCallback() {};
FoundResourceSuccessCallback.prototype = new Object();

/**
 * The IotconOption Interface provides vendor specific options of COAP packet.
 *
 * @super Object
 * @constructor
 * @return {IotconOption}
 */
function IotconOption() {};
IotconOption.prototype = new Object();

/**
 * The ResourceStateChangeCallback interface defines the success method to be invoked when remote resource's state is changed.
 *
 * @super Object
 * @constructor
 * @return {ResourceStateChangeCallback}
 */
function ResourceStateChangeCallback() {};
ResourceStateChangeCallback.prototype = new Object();

/**
 * The Representation Interface contains information of a resource. It can be used to communicate between a client and a server.
 *
 * @super Object
 * @constructor
 * @return {Representation}
 */
function Representation() {};
Representation.prototype = new Object();

/**
 * The DeviceInfo interface describes device properties.
 *
 * @super Object
 * @constructor
 * @return {DeviceInfo}
 */
function DeviceInfo() {};
DeviceInfo.prototype = new Object();

/**
 * Provides functions for creating resource, registering a resource, handling request from client.
          <p>
A Resource is a component in a server that can be viewed and controlled by another client.
There are different resource types, for example a temperature sensor, a light controller etc.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Server}
 */
function Server() {};
Server.prototype = new Object();

/**
 * The FoundPlatformInfoSuccessCallback interface defines the success method to be invoked when getting the platform information is successful.
 *
 * @super Object
 * @constructor
 * @return {FoundPlatformInfoSuccessCallback}
 */
function FoundPlatformInfoSuccessCallback() {};
FoundPlatformInfoSuccessCallback.prototype = new Object();

/**
 * The RequestCallback interface that defines the success method to be invoked when a client request is received.
 *
 * @super Object
 * @constructor
 * @return {RequestCallback}
 */
function RequestCallback() {};
RequestCallback.prototype = new Object();

/**
 * The Client provides API for client side.
 *
 * @super Object
 * @constructor
 * @return {Client}
 */
function Client() {};
Client.prototype = new Object();

/**
 * The FoundDeviceInfoSuccessCallback interface defines the success method to be invoked when getting the device information is successful.
 *
 * @super Object
 * @constructor
 * @return {FoundDeviceInfoSuccessCallback}
 */
function FoundDeviceInfoSuccessCallback() {};
FoundDeviceInfoSuccessCallback.prototype = new Object();

/**
 * The RemoteResourceResponseCallback interface defines the success method to be invoked when a client received response.
 *
 * @super Object
 * @constructor
 * @return {RemoteResourceResponseCallback}
 */
function RemoteResourceResponseCallback() {};
RemoteResourceResponseCallback.prototype = new Object();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {Iotcon}
 */
function Iotcon() {};
Iotcon.prototype = new Object();

/**
 * The Request interface represents a details from client.
 *
 * @super Object
 * @constructor
 * @return {Request}
 */
function Request() {};
Request.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
There is a <em>tizen.iotcon</em> object that allows access to the Iotcon API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {IotconObject}
 */
function IotconObject() {};
IotconObject.prototype = new Object();

/**
 * The PresenceEventCallback interface defines the success method to be invoked when client receive presence events from the server.
 *
 * @super Object
 * @constructor
 * @return {PresenceEventCallback}
 */
function PresenceEventCallback() {};
PresenceEventCallback.prototype = new Object();

/**
 * The request, that server responded.
 *
 * @type Request
 */
Response.prototype.request = new Request();

/**
 * The result indicates the detailed information about the result of the response to request.
 *
 * @type ResponseResult
 */
Response.prototype.result = new ResponseResult();

/**
 * The representation indicates the information of the resource.
 *
 * @type Representation
 */
Response.prototype.representation = new Representation();

/**
 * The options indicates the vendor specific options of COAP packet.
 *
 * @type array
 */
Response.prototype.options = new array();

/**
 * Sends the response.
 *
 * @type void
 * @memberOf Response
 * @returns {void}
 */
Response.prototype.send = function(){ return; };

/**
 * The resource URI.
 *
 * @type String
 */
Resource.prototype.uriPath = new String();

/**
 * A list of types in this resource.
 *
 * @type array
 */
Resource.prototype.resourceTypes = new array();

/**
 * A list of interfaces in the resource.
 *
 * @type array
 */
Resource.prototype.resourceInterfaces = new array();

/**
 * Indicates if the resource is observable or not
 *
 * @type Boolean
 */
Resource.prototype.isObservable = new Boolean();

/**
 * Indicates if the resource is discoverable or not
 *
 * @type Boolean
 */
Resource.prototype.isDiscoverable = new Boolean();

/**
 * Indicates if the resource is initialized and activated or not
 *
 * @type Boolean
 */
Resource.prototype.isActive = new Boolean();

/**
 * Indicates if the resource takes some delay to respond or not
 *
 * @type Boolean
 */
Resource.prototype.isSlow = new Boolean();

/**
 * Indicates if the resource is secure or not
 *
 * @type Boolean
 */
Resource.prototype.isSecure = new Boolean();

/**
 * Indicates if the resource is allowed to be discovered only if discovery request contains an explicit query string or not
 *
 * @type Boolean
 */
Resource.prototype.isExplicitDiscoverable = new Boolean();

/**
 * A list of children of this resource.
 *
 * @type array
 */
Resource.prototype.resources = new array();

/**
 * A list of observation IDs of this resource.
 *
 * @type array
 */
Resource.prototype.observerIds = new array();

/**
 * A lists of attributes of this resource.
 *
 * @type object
 */
Resource.prototype.attributes = new object();

/**
 * Notifies specific clients that resource's attributes have been changed.
 *
 * @param {QosLevel} qosLevel
 * @param {array} observerIds
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.notify = function(qosLevel, observerIds){ return; };

/**
 * Adds resource type to this resource.
 *
 * @param {array} types
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.addResourceTypes = function(types){ return; };

/**
 * Adds resource interface to this resource.
 *
 * @param {ResourceInterface} interface
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.addResourceInterface = function(interface){ return; };

/**
 * Adds child resource into the parent resource.
 *
 * @param {Resource} resource
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.addChildResource = function(resource){ return; };

/**
 * Removes child resource from the parent resource.
 *
 * @param {Resource} resource
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.removeChildResource = function(resource){ return; };

/**
 * Sets the listener for request from client.
 *
 * @param {RequestCallback} listener
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.setRequestListener = function(listener){ return; };

/**
 * Remove the listener.
            <p>
Calling this function has no effect if listener was not set.
            </p>
           
 *
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.unsetRequestListener = function(){ return; };

/**
 * The result indicates the detailed information about the result of the response to request.
 *
 * @type ResponseResult
 */
RemoteResponse.prototype.result = new ResponseResult();

/**
 * The representation indicates the information of the resource.
 *
 * @type Representation
 */
RemoteResponse.prototype.representation = new Representation();

/**
 * The options indicates the vendor specific options of COAP packet.
 *
 * @type array
 */
RemoteResponse.prototype.options = new array();

/**
 * The platform identifier
 *
 * @type String
 */
PlatformInfo.prototype.platformId = new String();

/**
 * The name of manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.manufacturerName = new String();

/**
 * The URL of manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.manufacturerUrl = new String();

/**
 * The model number is designated by manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.modelNumber = new String();

/**
 * The manufacture date of device.
 *
 * @type String
 */
PlatformInfo.prototype.manufactureDate = new String();

/**
 * The platform version is defined by manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.platformVersion = new String();

/**
 * The operating system version.
 *
 * @type String
 */
PlatformInfo.prototype.operatingSystemVersion = new String();

/**
 * The hardware version.
 *
 * @type String
 */
PlatformInfo.prototype.hardwareVersion = new String();

/**
 * The firmware version.
 *
 * @type String
 */
PlatformInfo.prototype.firmwareVersion = new String();

/**
 * The URL that points to support information from manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.supportUrl = new String();

/**
 * The System time.
 *
 * @type String
 */
PlatformInfo.prototype.systemTime = new String();

/**
 * The host address of the presence.
 *
 * @type String
 */
PresenceResponse.prototype.hostAddress = new String();

/**
 * The connectivity type of the presence.
 *
 * @type ConnectivityType
 */
PresenceResponse.prototype.connectivityType = new ConnectivityType();

/**
 * The resource type of the presence.
 *
 * @type ResourceType
 */
PresenceResponse.prototype.resourceType = new ResourceType();

/**
 * The results type of presence.
 *
 * @type PresenceResponseResultType
 */
PresenceResponse.prototype.resultType = new PresenceResponseResultType();

/**
 * The trigger type of presence. It is set only if a response result type is "OK".
 *
 * @type PresenceTriggerType
 */
PresenceResponse.prototype.triggerType = new PresenceTriggerType();

/**
 * Called when caching is successfully started.
 *
 * @param {Representation} representation
 * @type void
 * @memberOf CacheUpdatedCallback
 * @returns {void}
 */
CacheUpdatedCallback.prototype.onupdated = function(representation){ return; };

/**
 * The resource URI.
 *
 * @type String
 */
RemoteResource.prototype.uriPath = new String();

/**
 * It is connectivity type.
 *
 * @type ConnectivityType
 */
RemoteResource.prototype.connectivityType = new ConnectivityType();

/**
 * The host address
 *
 * @type String
 */
RemoteResource.prototype.hostAddress = new String();

/**
 * A list of types in this resource
 *
 * @type array
 */
RemoteResource.prototype.resourceTypes = new array();

/**
 * A list of interfaces in the resource.
 *
 * @type array
 */
RemoteResource.prototype.resourceInterfaces = new array();

/**
 * Indicates if the resource is observable or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isObservable = new Boolean();

/**
 * Indicates if the resource is discoverable or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isDiscoverable = new Boolean();

/**
 * Indicates if the resource is initialized and activated or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isActive = new Boolean();

/**
 * Indicates if the resource takes some delay to respond or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isSlow = new Boolean();

/**
 * Indicates if the resource is secure or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isSecure = new Boolean();

/**
 * Indicates if the resource is allowed to be discovered only if discovery request contains an explicit query string or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isExplicitDiscoverable = new Boolean();

/**
 * The device unique id. this is unique per-server independent on how it was discovered.
 *
 * @type String
 */
RemoteResource.prototype.deviceId = new String();

/**
 * The device name of the remote resource.
 *
 * @type String
 */
RemoteResource.prototype.deviceName = new String();

/**
 * The option for managing vendor specific option of COAP packet.
 *
 * @type array
 */
RemoteResource.prototype.options = new array();

/**
 * The cached representation of remote resource.
 *
 * @type Representation
 */
RemoteResource.prototype.cachedRepresentation = new Representation();

/**
 * The time interval in seconds for monitoring state (registered with setResourceStateChangeListener() ) and caching (registered with startCaching() ). Provided value must be in range from 1 to 3600 inclusive. The default value is seconds.
 *
 * @type Number
 */
RemoteResource.prototype.timeInterval = new Number();

/**
 * Gets the attributes of a resource.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: In any system error is invoked              </li>
            </ul>
           
 *
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {Query} query
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodGet = function(responseCallback, query, errorCallback){ return; };

/**
 * Puts the representation of a resource for update.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: In any system error is invoked              </li>
            </ul>
           
 *
 * @param {Representation} representation
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {Query} query
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodPut = function(representation, responseCallback, query, errorCallback){ return; };

/**
 * Posts the representation of a resource for create.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: In any system error is invoked              </li>
            </ul>
           
 *
 * @param {Representation} representation
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {Query} query
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodPost = function(representation, responseCallback, query, errorCallback){ return; };

/**
 * Deletes the remote resource.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: In any system error is invoked              </li>
            </ul>
           
 *
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodDelete = function(responseCallback, errorCallback){ return; };

/**
 * Sets the listener to receive notification about attribute change of remote resource. When server sends notification message, successCallback will be called.
 *
 * @param {ObservePolicy} observePolicy
 * @param {RemoteResourceResponseCallback} successCallback
 * @param {Query} query
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.startObserving = function(observePolicy, successCallback, query){ return; };

/**
 * Unregisters the listener. so stop receiving notification about attribute change of remote resource.
 *
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.stopObserving = function(){ return; };

/**
 * Starts caching of a remote resource. cached representation is updated when remote resource is changed.
 *
 * @param {CacheUpdatedCallback} updatedCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.startCaching = function(updatedCallback){ return; };

/**
 * Stops caching of a remote resource.
 *
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.stopCaching = function(){ return; };

/**
 * Sets a listener to monitor the state of the remote resource.
 *
 * @param {ResourceStateChangeCallback} successCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.setResourceStateChangeListener = function(successCallback){ return; };

/**
 * Unsets the listener to stop monitoring the state of the remote resource.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.unsetResourceStateChangeListener = function(){ return; };

/**
 * Called when random pin is successfully generated.
 *
 * @param {String} pin
 * @type void
 * @memberOf GeneratedPinCallback
 * @returns {void}
 */
GeneratedPinCallback.prototype.onsuccess = function(pin){ return; };

/**
 * Called when request was received.
 *
 * @param {RemoteResource} remoteResource
 * @type void
 * @memberOf FoundResourceSuccessCallback
 * @returns {void}
 */
FoundResourceSuccessCallback.prototype.onfound = function(remoteResource){ return; };

/**
 * The ID of the option. id is always situated between 2048 and 3000.
 *
 * @type Number
 */
IotconOption.prototype.id = new Number();

/**
 * The string data to add. Length of data is less than or equal to 15.
 *
 * @type String
 */
IotconOption.prototype.data = new String();

/**
 * Called when connection change appeared.
 *
 * @param {Boolean} isAlive
 * @type void
 * @memberOf ResourceStateChangeCallback
 * @returns {void}
 */
ResourceStateChangeCallback.prototype.onchanged = function(isAlive){ return; };

/**
 * The resource URI.
 *
 * @type String
 */
Representation.prototype.uriPath = new String();

/**
 * A list of types in this resource
 *
 * @type array
 */
Representation.prototype.resourceTypes = new array();

/**
 * A list of interfaces in the resource.
 *
 * @type array
 */
Representation.prototype.resourceInterfaces = new array();

/**
 * A lists of attribute in this resource.
 *
 * @type object
 */
Representation.prototype.attributes = new object();

/**
 * Representations belonging to this representation.
 *
 * @type array
 */
Representation.prototype.children = new array();

/**
 * The device name
 *
 * @type String
 */
DeviceInfo.prototype.deviceName = new String();

/**
 * The version of core specification.
 *
 * @type String
 */
DeviceInfo.prototype.specVersion = new String();

/**
 * The unique identifier for OIC device.
 *
 * @type String
 */
DeviceInfo.prototype.oicDeviceId = new String();

/**
 * The version of specification which the device's data model is implemented
 *
 * @type String
 */
DeviceInfo.prototype.dataModelVersion = new String();

/**
 * Returns an array of resources which are registered on the server.
 *
 * @type array
 * @memberOf Server
 * @returns {array}
 */
Server.prototype.getResources = function(){ var ret = new array(); return ret; };

/**
 * Creates a resource and registers the resource on server.
 *
 * @param {String} uriPath
 * @param {array} resourceTypes
 * @param {array} resourceInterfaces
 * @param {RequestCallback} listener
 * @param {ResourcePolicy} policy
 * @type Resource
 * @memberOf Server
 * @returns {Resource}
 */
Server.prototype.createResource = function(uriPath, resourceTypes, resourceInterfaces, listener, policy){ var ret = new Resource(); return ret; };

/**
 * Removes the resource and unregisters it from server.
 *
 * @param {Resource} resource
 * @type void
 * @memberOf Server
 * @returns {void}
 */
Server.prototype.removeResource = function(resource){ return; };

/**
 * Starts sending presence event of server. Server can send presence event to client when become online for the first time or come back from offline to online.
 *
 * @param {Number} timeToLive
 * @type void
 * @memberOf Server
 * @returns {void}
 */
Server.prototype.startPresence = function(timeToLive){ return; };

/**
 * Stops sending presence announcement of a server.
 *
 * @type void
 * @memberOf Server
 * @returns {void}
 */
Server.prototype.stopPresence = function(){ return; };

/**
 * Called when the platform information is received.
 *
 * @param {PlatformInfo} info
 * @type void
 * @memberOf FoundPlatformInfoSuccessCallback
 * @returns {void}
 */
FoundPlatformInfoSuccessCallback.prototype.onsuccess = function(info){ return; };

/**
 * Called when GET request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onget = function(request){ return; };

/**
 * Called when PUT request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onput = function(request){ return; };

/**
 * Called when POST request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onpost = function(request){ return; };

/**
 * Called when DELETE request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.ondelete = function(request){ return; };

/**
 * Called when OBSERVE request was received.
 *
 * @param {Request} request
 * @param {ObserveType} observeType
 * @param {Number} observeId
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onobserving = function(request, observeType, observeId){ return; };

/**
 * Finds resources using host address and resource type.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: If any system error is invoked              </li>
            </ul>
           
 *
 * @param {String} hostAddress
 * @param {Query} query
 * @param {ConnectivityType} connectivityType
 * @param {FoundResourceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.findResource = function(hostAddress, query, connectivityType, successCallback, errorCallback){ return; };

/**
 * Adds a listener to receive a presence events from the server. A server sends presence events when starts or stops presence.
 *
 * @param {String} hostAddress
 * @param {ResourceType} resourceType
 * @param {ConnectivityType} connectivityType
 * @param {PresenceEventCallback} successCallback
 * @type Number
 * @memberOf Client
 * @returns {Number}
 */
Client.prototype.addPresenceEventListener = function(hostAddress, resourceType, connectivityType, successCallback){ var ret = new Number(); return ret; };

/**
 * Unregisters a presence event listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.removePresenceEventListener = function(watchId){ return; };

/**
 * Gets the device information of remote server.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: If any system error is invoked              </li>
            </ul>
           
 *
 * @param {String} hostAddress
 * @param {Query} query
 * @param {ConnectivityType} connectivityType
 * @param {FoundDeviceInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.findDeviceInfo = function(hostAddress, query, connectivityType, successCallback, errorCallback){ return; };

/**
 * Gets the platform information of remote server.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
AbortError: In any system error is invoked              </li>
            </ul>
           
 *
 * @param {String} hostAddress
 * @param {Query} query
 * @param {ConnectivityType} connectivityType
 * @param {FoundPlatformInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.findPlatformInfo = function(hostAddress, query, connectivityType, successCallback, errorCallback){ return; };

/**
 * Called when the device information is received.
 *
 * @param {DeviceInfo} info
 * @type void
 * @memberOf FoundDeviceInfoSuccessCallback
 * @returns {void}
 */
FoundDeviceInfoSuccessCallback.prototype.onsuccess = function(info){ return; };

/**
 * Called when the response is received.
 *
 * @param {RemoteResponse} response
 * @type void
 * @memberOf RemoteResourceResponseCallback
 * @returns {void}
 */
RemoteResourceResponseCallback.prototype.onsuccess = function(response){ return; };

/**
 * The device name of this application.
 *
 * @type String
 */
Iotcon.prototype.deviceName = new String();

/**
 * Connects to the iotcon service. Call this function to start Iotcon.
 *
 * @param {String} filePath
 * @type void
 * @memberOf Iotcon
 * @returns {void}
 */
Iotcon.prototype.initialize = function(filePath){ return; };

/**
 * Returns object of singleton, which provides methods for working with remote resources.
 *
 * @type Client
 * @memberOf Iotcon
 * @returns {Client}
 */
Iotcon.prototype.getClient = function(){ var ret = new Client(); return ret; };

/**
 * Returns the object, which provides methods for managing resources on current device.
 *
 * @type Server
 * @memberOf Iotcon
 * @returns {Server}
 */
Iotcon.prototype.getServer = function(){ var ret = new Server(); return ret; };

/**
 * Returns the number of seconds set as the timeout threshold of asynchronous API.
            <p>
This method returns the common timeout value for methods: <br/><a href="iotcon.html#Client::findDeviceInfo">findDeviceInfo</a><br/><a href="iotcon.html#Client::findPlatformInfo">findPlatformInfo</a><br/><a href="iotcon.html#Client::findResource">findResource</a><br/><a href="iotcon.html#RemoteResource::methodGet">methodGet</a><br/><a href="iotcon.html#RemoteResource::methodPut">methodPut</a><br/><a href="iotcon.html#RemoteResource::methodPost">methodPost</a><br/><a href="iotcon.html#RemoteResource::methodDelete">methodDelete</a><br/>All asynchronous APIs have the same timeout value, there is no way to have different timeout values at each method.
Without a response after the specified time, the mentioned methods would trigger an error callback with <var>TimeoutError</var>.
            </p>
           
 *
 * @type Number
 * @memberOf Iotcon
 * @returns {Number}
 */
Iotcon.prototype.getTimeout = function(){ var ret = new Number(); return ret; };

/**
 * Sets the timeout value, in seconds, of asynchronous APIs.
            <p>
The timeout value is common for methods: <br/><a href="iotcon.html#Client::findDeviceInfo">findDeviceInfo</a><br/><a href="iotcon.html#Client::findPlatformInfo">findPlatformInfo</a><br/><a href="iotcon.html#Client::findResource">findResource</a><br/><a href="iotcon.html#RemoteResource::methodGet">methodGet</a><br/><a href="iotcon.html#RemoteResource::methodPut">methodPut</a><br/><a href="iotcon.html#RemoteResource::methodPost">methodPost</a><br/><a href="iotcon.html#RemoteResource::methodDelete">methodDelete</a><br/>All asynchronous APIs have the same timeout value, there is no way to have different timeout values at each method.
Without a response after the specified time, the mentioned methods would trigger an error callback with <var>TimeoutError</var>.
            </p>
           
 *
 * @param {Number} timeout
 * @type void
 * @memberOf Iotcon
 * @returns {void}
 */
Iotcon.prototype.setTimeout = function(timeout){ return; };

/**
 * Adds a listener to receive generated random pin from provisioning tool.
 *
 * @param {GeneratedPinCallback} successCallback
 * @type Number
 * @memberOf Iotcon
 * @returns {Number}
 */
Iotcon.prototype.addGeneratedPinListener = function(successCallback){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener and stops receiving generated random pin.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Iotcon
 * @returns {void}
 */
Iotcon.prototype.removeGeneratedPinListener = function(watchId){ return; };

/**
 * The address of host of the request.
 *
 * @type String
 */
Request.prototype.hostAddress = new String();

/**
 * Connectivity type of connection.
 *
 * @type ConnectivityType
 */
Request.prototype.connectivityType = new ConnectivityType();

/**
 * The request representation.
 *
 * @type Representation
 */
Request.prototype.representation = new Representation();

/**
 * The option which was sent from client.
 *
 * @type array
 */
Request.prototype.options = new array();

/**
 * The query parameters from the request.
 *
 * @type Query
 */
Request.prototype.query = new Query();

/**
 * Object representing a exif manager.
 *
 * @type Iotcon
 */
IotconObject.prototype.iotcon = new Iotcon();

/**
 * Called when client receive presence events.
 *
 * @param {PresenceResponse} presenceResponse
 * @type void
 * @memberOf PresenceEventCallback
 * @returns {void}
 */
PresenceEventCallback.prototype.onreceived = function(presenceResponse){ return; };

/**
 * Object representing a exif manager.
 *
 * @type Iotcon
 */
Tizen.prototype.iotcon = new Iotcon();

/**
 * The KeyManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.keymanager</em> object allows access to the functionality of the Key Manager API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {KeyManagerObject}
 */
function KeyManagerObject() {};
KeyManagerObject.prototype = new Object();

/**
 * The KeyManager interface provides methods to store, retrieve and remove the sensitive data of users and their applications.
          <p>
It provides access to the API functionalities through the <em>tizen.keymanager</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {KeyManager}
 */
function KeyManager() {};
KeyManager.prototype = new Object();

/**
 * Object representing a key manager.
 *
 * @type KeyManager
 */
KeyManagerObject.prototype.keymanager = new KeyManager();

/**
 * Saves and stores data as a inside the KeyManager.
            <p>
On success, this method will add a <a href="#KeyManagerAlias">KeyManagerAlias</a> into the KeyManager. The <em>name</em> attribute of that KeyManagerAlias will be set to be the value of the <em>name</em> parameter which is used in this method call. The <em>packageId</em> attribute of that KeyManagerAlias will automatically be set to be the package ID of the application which calls this method.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If the method cannot be completed because of an unknown error.              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {RawData} rawData
 * @param {String} password
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf KeyManager
 * @returns {void}
 */
KeyManager.prototype.saveData = function(name, rawData, password, successCallback, errorCallback){ return; };

/**
 * Removes data from the KeyManager.
            <p>
To remove data, an application must have permission to remove that data. By default, an application which saved data into the KeyManager has permission to remove the data. An application can also use the <a href="#KeyManager::setPermission">setPermission</a> method to allow another application to remove its data.
            </p>
            <p>
If an application calls this method to remove data which it saved into the KeyManager, the <em>dataAlias</em> parameter does not require the <em>packageId</em> attribute.
            </p>
           
 *
 * @param {KeyManagerAlias} dataAlias
 * @type void
 * @memberOf KeyManager
 * @returns {void}
 */
KeyManager.prototype.removeData = function(dataAlias){ return; };

/**
 * Gets raw data from the KeyManager.
            <p>
To get raw data, an application must have permission to get that raw data. By default, an application which saved raw data into the KeyManager has permission to get that raw data. An application can also use the <a href="#KeyManager::setPermission">setPermission</a> method to allow another application to get and read its raw data.
            </p>
            <p>
If an application calls this method to retrieve raw data which it saved into the KeyManager, the <em>dataAlias</em> parameter does not require the <em>packageId</em> attribute.
            </p>
           
 *
 * @param {KeyManagerAlias} dataAlias
 * @param {String} password
 * @type RawData
 * @memberOf KeyManager
 * @returns {RawData}
 */
KeyManager.prototype.getData = function(dataAlias, password){ var ret = new RawData(); return ret; };

/**
 * Gets all the aliases which an application can access.
 *
 * @type array
 * @memberOf KeyManager
 * @returns {array}
 */
KeyManager.prototype.getDataAliasList = function(){ var ret = new array(); return ret; };

/**
 * Sets permissions that another application has for accessing an application's data.
            <p>
An application can only set permissions for data which it saved into the KeyManager. Therefore, the <em>dataAlias</em> parameter does not require the <em>packageId</em> attribute.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the dataAlias cannot be found.              </li>
              <li>
UnknownError - If the method cannot be completed because of an unknown error.              </li>
            </ul>
           
 *
 * @param {KeyManagerAlias} dataAlias
 * @param {PackageId} packageId
 * @param {PermissionType} permissionType
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf KeyManager
 * @returns {void}
 */
KeyManager.prototype.setPermission = function(dataAlias, packageId, permissionType, successCallback, errorCallback){ return; };

/**
 * Object representing a key manager.
 *
 * @type KeyManager
 */
Tizen.prototype.keymanager = new KeyManager();

/**
 * Current playback info.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaybackInfo}
 */
function MediaControllerPlaybackInfo() {};
MediaControllerPlaybackInfo.prototype = new Object();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerManager}
 */
function MediaControllerManager() {};
MediaControllerManager.prototype = new Object();

/**
 * Server-side object representing methods for playlists of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaylists}
 */
function MediaControllerPlaylists() {};
MediaControllerPlaylists.prototype = new Object();

/**
 * The MediaControllerEnabledChangeRequestCallback interface that defines the listener for change requests for spherical mode in and subtitles mode in .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerEnabledChangeRequestCallback}
 */
function MediaControllerEnabledChangeRequestCallback() {};
MediaControllerEnabledChangeRequestCallback.prototype = new Object();

/**
 * Client-side object representing playback abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaybackAbilitiesInfo}
 */
function MediaControllerPlaybackAbilitiesInfo() {};
MediaControllerPlaybackAbilitiesInfo.prototype = new Object();

/**
 * Client-side object representing display rotation of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayRotationInfo}
 */
function MediaControllerDisplayRotationInfo() {};
MediaControllerDisplayRotationInfo.prototype = new Object();

/**
 * Client-side object representing display mode abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayModeAbilitiesInfo}
 */
function MediaControllerDisplayModeAbilitiesInfo() {};
MediaControllerDisplayModeAbilitiesInfo.prototype = new Object();

/**
 * Representation of server's response to a request.
 *
 * @super Object
 * @constructor
 * @return {RequestReply}
 */
function RequestReply() {};
RequestReply.prototype = new Object();

/**
 * Client-side object representing abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerAbilitiesInfo}
 */
function MediaControllerAbilitiesInfo() {};
MediaControllerAbilitiesInfo.prototype = new Object();

/**
 * Server-side object representing display mode of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayMode}
 */
function MediaControllerDisplayMode() {};
MediaControllerDisplayMode.prototype = new Object();

/**
 * The MediaControllerChangeRequestPlaybackInfoCallback interface that defines the listeners object for receiving playback info change requests from client.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerChangeRequestPlaybackInfoCallback}
 */
function MediaControllerChangeRequestPlaybackInfoCallback() {};
MediaControllerChangeRequestPlaybackInfoCallback.prototype = new Object();

/**
 * The MediaControllerServerStatusChangeCallback interface that defines the listener for media controller server status changes.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerStatusChangeCallback}
 */
function MediaControllerServerStatusChangeCallback() {};
MediaControllerServerStatusChangeCallback.prototype = new Object();

/**
 * Object represents single playlist item.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaylistItem}
 */
function MediaControllerPlaylistItem() {};
MediaControllerPlaylistItem.prototype = new Object();

/**
 * The MediaControllerSearchRequestReplyCallback interface defines reply callback for .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerSearchRequestReplyCallback}
 */
function MediaControllerSearchRequestReplyCallback() {};
MediaControllerSearchRequestReplyCallback.prototype = new Object();

/**
 * Server-side object representing current playback info.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerPlaybackInfo}
 */
function MediaControllerServerPlaybackInfo() {};
MediaControllerServerPlaybackInfo.prototype = new Object();

/**
 * The MediaControllerSendCommandSuccessCallback interface that defines the success method which is triggered, when the server responds to a command.
          <p>
Interface is used as a success method for:
          </p>
          <ul>
            <li>
<em>MediaControllerServerInfo.sendCommand()</em>             </li>
            <li>
<em>MediaControllerMode360Info.sendRequest()</em>             </li>
            <li>
<em>MediaControllerSubtitlesInfo.sendRequest()</em>             </li>
            <li>
<em>MediaControllerDisplayMode.sendRequest()</em>             </li>
            <li>
<em>MediaControllerDisplayRotationInfo.sendRequest()</em>             </li>
            <li>
<em>MediaControllerClientInfo.sendEvent()</em>             </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {MediaControllerSendCommandSuccessCallback}
 */
function MediaControllerSendCommandSuccessCallback() {};
MediaControllerSendCommandSuccessCallback.prototype = new Object();

/**
 * The MediaControllerDisplayModeChangeRequestCallback interface that defines the listener for change requests for display mode in .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayModeChangeRequestCallback}
 */
function MediaControllerDisplayModeChangeRequestCallback() {};
MediaControllerDisplayModeChangeRequestCallback.prototype = new Object();

/**
 * The MediaControllerServerInfoArraySuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerInfoArraySuccessCallback}
 */
function MediaControllerServerInfoArraySuccessCallback() {};
MediaControllerServerInfoArraySuccessCallback.prototype = new Object();

/**
 * Interface for success callback for function.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerGetAllPlaylistsSuccessCallback}
 */
function MediaControllerGetAllPlaylistsSuccessCallback() {};
MediaControllerGetAllPlaylistsSuccessCallback.prototype = new Object();

/**
 * Playback metadata.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerMetadata}
 */
function MediaControllerMetadata() {};
MediaControllerMetadata.prototype = new Object();

/**
 * This interface provides communication methods from the server to the client.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerClientInfo}
 */
function MediaControllerClientInfo() {};
MediaControllerClientInfo.prototype = new Object();

/**
 * This interface provides media controller server state and playback info. Provides methods to send commands to server and listen for server status change.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerInfo}
 */
function MediaControllerServerInfo() {};
MediaControllerServerInfo.prototype = new Object();

/**
 * Server-side object representing display mode abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayModeAbilities}
 */
function MediaControllerDisplayModeAbilities() {};
MediaControllerDisplayModeAbilities.prototype = new Object();

/**
 * The MediaControllerReceiveCommandCallback interface that defines the listener for custom communication between server and client.
          <p>
Related functions:
          </p>
          <ul>
            <li>
<a href="#MediaControllerServerInfo::sendCommand">sendCommand()</a>            </li>
            <li>
<a href="#MediaControllerServer::addCommandListener">addCommandListener()</a>            </li>
            <li>
<a href="#MediaControllerClientInfo::sendEvent">sendEvent()</a>            </li>
            <li>
<a href="#MediaControllerClient::setCustomEventListener">setEventListener()</a>            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {MediaControllerReceiveCommandCallback}
 */
function MediaControllerReceiveCommandCallback() {};
MediaControllerReceiveCommandCallback.prototype = new Object();

/**
 * Server-side object representing subtitles mode of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerSubtitles}
 */
function MediaControllerSubtitles() {};
MediaControllerSubtitles.prototype = new Object();

/**
 * Server-side object representing playback abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaybackAbilities}
 */
function MediaControllerPlaybackAbilities() {};
MediaControllerPlaybackAbilities.prototype = new Object();

/**
 * Client-side object representing methods for playlists of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaylistsInfo}
 */
function MediaControllerPlaylistsInfo() {};
MediaControllerPlaylistsInfo.prototype = new Object();

/**
 * The MediaControllerDisplayModeChangeCallback interface that defines the listener for changes of a media controller server's display rotation.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayRotationChangeCallback}
 */
function MediaControllerDisplayRotationChangeCallback() {};
MediaControllerDisplayRotationChangeCallback.prototype = new Object();

/**
 * Client-side object representing spherical (360°) mode of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerMode360Info}
 */
function MediaControllerMode360Info() {};
MediaControllerMode360Info.prototype = new Object();

/**
 * Client-side object representing display mode of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayModeInfo}
 */
function MediaControllerDisplayModeInfo() {};
MediaControllerDisplayModeInfo.prototype = new Object();

/**
 * Server-side object representing display rotation of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayRotation}
 */
function MediaControllerDisplayRotation() {};
MediaControllerDisplayRotation.prototype = new Object();

/**
 * Server-side object representing abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerAbilities}
 */
function MediaControllerAbilities() {};
MediaControllerAbilities.prototype = new Object();

/**
 * The MediaControllerEnabledChangeCallback interface that defines the listener for a media controller server's attribute changes.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerEnabledChangeCallback}
 */
function MediaControllerEnabledChangeCallback() {};
MediaControllerEnabledChangeCallback.prototype = new Object();

/**
 * Interface for handling ability events.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerAbilityChangeCallback}
 */
function MediaControllerAbilityChangeCallback() {};
MediaControllerAbilityChangeCallback.prototype = new Object();

/**
 * The MediaControllerDisplayModeChangeCallback interface that defines the listener for display mode changes of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayModeChangeCallback}
 */
function MediaControllerDisplayModeChangeCallback() {};
MediaControllerDisplayModeChangeCallback.prototype = new Object();

/**
 * Search filter representation.
 *
 * @super Object
 * @constructor
 * @return {SearchFilter}
 */
function SearchFilter() {};
SearchFilter.prototype = new Object();

/**
 * Client-side object representing subtitles mode of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerSubtitlesInfo}
 */
function MediaControllerSubtitlesInfo() {};
MediaControllerSubtitlesInfo.prototype = new Object();

/**
 * Client-side object representing current playback info.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerInfoPlaybackInfo}
 */
function MediaControllerServerInfoPlaybackInfo() {};
MediaControllerServerInfoPlaybackInfo.prototype = new Object();

/**
 * Server-side object representing spherical (360°) mode of a media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerMode360}
 */
function MediaControllerMode360() {};
MediaControllerMode360.prototype = new Object();

/**
 * The MediaControllerDisplayRotationChangeRequestCallback interface that defines the listener for change requests for display rotation in .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayRotationChangeRequestCallback}
 */
function MediaControllerDisplayRotationChangeRequestCallback() {};
MediaControllerDisplayRotationChangeRequestCallback.prototype = new Object();

/**
 * The MediaControllerPlaybackInfoChangeCallback interface that defines the listeners object for receiving media controller playback info changes from server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaybackInfoChangeCallback}
 */
function MediaControllerPlaybackInfoChangeCallback() {};
MediaControllerPlaybackInfoChangeCallback.prototype = new Object();

/**
 * Object represents single playlist (collection of items).
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaylist}
 */
function MediaControllerPlaylist() {};
MediaControllerPlaylist.prototype = new Object();

/**
 * Interface for success callback for function.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerGetItemsSuccessCallback}
 */
function MediaControllerGetItemsSuccessCallback() {};
MediaControllerGetItemsSuccessCallback.prototype = new Object();

/**
 * Interface for specific playlist update events (including deletion).
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaylistUpdatedCallback}
 */
function MediaControllerPlaylistUpdatedCallback() {};
MediaControllerPlaylistUpdatedCallback.prototype = new Object();

/**
 * Provides functions for sending the server information to the client.
          <p>
Allows the application to send the playback state and metadata to other application
and be controlled by other application(client) remotely.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServer}
 */
function MediaControllerServer() {};
MediaControllerServer.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
There is a <em>tizen.mediacontroller</em> object that allows access to the Media Controller API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaControllerObject}
 */
function MediaControllerObject() {};
MediaControllerObject.prototype = new Object();

/**
 * The server-side object representing display rotation abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayRotationAbilities}
 */
function MediaControllerDisplayRotationAbilities() {};
MediaControllerDisplayRotationAbilities.prototype = new Object();

/**
 * Server search request listener interface.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerSearchRequestCallback}
 */
function MediaControllerSearchRequestCallback() {};
MediaControllerSearchRequestCallback.prototype = new Object();

/**
 * The media controller client API and functions related with handling media control. Functions include operations to get the latest status of the media controller servers.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerClient}
 */
function MediaControllerClient() {};
MediaControllerClient.prototype = new Object();

/**
 * The client-side object representing display rotation abilities of the media controller server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerDisplayRotationAbilitiesInfo}
 */
function MediaControllerDisplayRotationAbilitiesInfo() {};
MediaControllerDisplayRotationAbilitiesInfo.prototype = new Object();

/**
 * Current playback state.
 *
 * @type MediaControllerPlaybackState
 */
MediaControllerPlaybackInfo.prototype.state = new MediaControllerPlaybackState();

/**
 * Current playback position.
 *
 * @type Number
 */
MediaControllerPlaybackInfo.prototype.position = new Number();

/**
 * Current playback age rating.
 *
 * @type MediaControllerContentAgeRating
 */
MediaControllerPlaybackInfo.prototype.ageRating = new MediaControllerContentAgeRating();

/**
 * Current playback content type.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerContentType
 */
MediaControllerPlaybackInfo.prototype.contentType = new MediaControllerContentType();

/**
 * Current shuffle mode.
 *
 * @type Boolean
 */
MediaControllerPlaybackInfo.prototype.shuffleMode = new Boolean();

/**
 * Current repeat mode.
 * <p>
Any change in value of <em>repeatMode</em> will also change the value of <em>repeatState</em>.
            </p>
 * <p>
The <em>repeatMode</em> equal to <var>true</var> is equivalent to <em>repeatState</em> equal to <var>REPEAT_ALL</var> and
<em>repeatMode</em> equal to <var>false</var> is equivalent to <em>repeatState</em> equal to <var>REPEAT_OFF</var>.
            </p>
 *
 * @type Boolean
 */
MediaControllerPlaybackInfo.prototype.repeatMode = new Boolean();

/**
 * Current repeat state.
 * <p>
Any change in value of <em>repeatState</em> will also change the value of <em>repeatMode</em>, except the <var>REPEAT_ONE</var> value.
In this case the <em>repeatMode</em> value will not change.
            </p>
 * <p>
The <em>repeatState</em> equals to <var>REPEAT_ALL</var> is equivalent to <em>repeatMode</em> equals to <var>true</var> and
<em>repeatState</em> equals to <var>REPEAT_OFF</var> is equivalent to <em>repeatMode</em> equals to <var>false</var>.
            </p>
 * <p>
Default value is <var>REPEAT_ALL</var>.
            </p>
 *
 * @type MediaControllerRepeatState
 */
MediaControllerPlaybackInfo.prototype.repeatState = new MediaControllerRepeatState();

/**
 * Current playback metadata.
 *
 * @type MediaControllerMetadata
 */
MediaControllerPlaybackInfo.prototype.metadata = new MediaControllerMetadata();

/**
 * Current item index.
 *
 * @type String
 */
MediaControllerPlaybackInfo.prototype.index = new String();

/**
 * Current playlist name.
 *
 * @type String
 */
MediaControllerPlaybackInfo.prototype.playlistName = new String();

/**
 * Gets the client object. If not exist, client will be automatically created.
 *
 * @type MediaControllerClient
 * @memberOf MediaControllerManager
 * @returns {MediaControllerClient}
 */
MediaControllerManager.prototype.getClient = function(){ var ret = new MediaControllerClient(); return ret; };

/**
 * Creates the Server object which holds playback state, meta data and is controlled by Client.
 *
 * @type MediaControllerServer
 * @memberOf MediaControllerManager
 * @returns {MediaControllerServer}
 */
MediaControllerManager.prototype.createServer = function(){ var ret = new MediaControllerServer(); return ret; };

/**
 * Creates object.
 *
 * @param {String} name
 * @type MediaControllerPlaylist
 * @memberOf MediaControllerPlaylists
 * @returns {MediaControllerPlaylist}
 */
MediaControllerPlaylists.prototype.createPlaylist = function(name){ var ret = new MediaControllerPlaylist(); return ret; };

/**
 * Saves the playlist in a local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>InvalidValuesError</em>: if playlist with given name does not exist.              </li>
              <li>
<em>UnknownError</em>: if any other error prevents the function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerPlaylist} playlist
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerPlaylists
 * @returns {void}
 */
MediaControllerPlaylists.prototype.savePlaylist = function(playlist, successCallback, errorCallback){ return; };

/**
 * Deletes the playlist from a local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>InvalidValuesError</em>: if playlist with given name does not exist.              </li>
              <li>
<em>UnknownError</em>: if any other error prevents the function from successful completion.              </li>
            </ul>
           
 *
 * @param {String} playlistName
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerPlaylists
 * @returns {void}
 */
MediaControllerPlaylists.prototype.deletePlaylist = function(playlistName, successCallback, errorCallback){ return; };

/**
 * Retrieves all playlists from a local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>UnknownError</em>: if any error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerGetAllPlaylistsSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerPlaylists
 * @returns {void}
 */
MediaControllerPlaylists.prototype.getAllPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Returns the playlist with the given name.
 *
 * @param {String} playlistName
 * @type MediaControllerPlaylist
 * @memberOf MediaControllerPlaylists
 * @returns {MediaControllerPlaylist}
 */
MediaControllerPlaylists.prototype.getPlaylist = function(playlistName){ var ret = new MediaControllerPlaylist(); return ret; };

/**
 * Called when change request is received from client.
 *
 * @param {ApplicationId} clientName
 * @param {Boolean} enabled
 * @type RequestReply
 * @memberOf MediaControllerEnabledChangeRequestCallback
 * @returns {RequestReply}
 */
MediaControllerEnabledChangeRequestCallback.prototype.onreply = function(clientName, enabled){ var ret = new RequestReply(); return ret; };

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.play = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.pause = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.stop = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.next = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.prev = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.forward = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.rewind = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilitiesInfo.prototype.togglePlayPause = new MediaControllerAbilitySupport();

/**
 * State of display rotation on the server represented by this object.
 *
 * @type MediaControllerDisplayRotationType
 */
MediaControllerDisplayRotationInfo.prototype.displayRotation = new MediaControllerDisplayRotationType();

/**
 * Allows to send change requests for display rotation change to a media controller server.
 *
 * @param {MediaControllerDisplayRotationType} displayRotation
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerDisplayRotationInfo
 * @returns {void}
 */
MediaControllerDisplayRotationInfo.prototype.sendRequest = function(displayRotation, replyCallback){ return; };

/**
 * Adds the listener for changes of a display rotation of a media controller server.
 *
 * @param {MediaControllerDisplayRotationChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerDisplayRotationInfo
 * @returns {Number}
 */
MediaControllerDisplayRotationInfo.prototype.addDisplayRotationChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media controller server display rotation changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerDisplayRotationInfo
 * @returns {void}
 */
MediaControllerDisplayRotationInfo.prototype.removeDisplayRotationChangeListener = function(watchId){ return; };

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilitiesInfo.prototype.letterBox = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilitiesInfo.prototype.originSize = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilitiesInfo.prototype.fullScreen = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilitiesInfo.prototype.croppedFull = new MediaControllerAbilitySupport();

/**
 * Response data bundle.
 *
 * @type Bundle
 */
RequestReply.prototype.data = new Bundle();

/**
 * Response status code.
 *
 * @type Number
 */
RequestReply.prototype.code = new Number();

/**
 * Represents abilities of server's playback actions.
 *
 * @type MediaControllerPlaybackAbilitiesInfo
 */
MediaControllerAbilitiesInfo.prototype.playback = new MediaControllerPlaybackAbilitiesInfo();

/**
 * Represents abilities of server's display modes.
 *
 * @type MediaControllerDisplayModeAbilitiesInfo
 */
MediaControllerAbilitiesInfo.prototype.displayMode = new MediaControllerDisplayModeAbilitiesInfo();

/**
 * Represents server abilities of setting display orientations.
 *
 * @type MediaControllerDisplayRotationAbilitiesInfo
 */
MediaControllerAbilitiesInfo.prototype.displayRotation = new MediaControllerDisplayRotationAbilitiesInfo();

/**
 * Represents server's ability to change playback position.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.playbackPosition = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to change shuffle mode.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.shuffle = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to change repeat state.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.repeat = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to add/change/remove playlists.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.playlist = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive custom commands from media controller client.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.clientCustom = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive search requests from media controller client.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.search = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive requests for subtitles mode change from media controller client.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.subtitles = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive requests for spherical (360°) mode change from media controller client.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilitiesInfo.prototype.mode360 = new MediaControllerAbilitySupport();

/**
 * Adds a subscription for monitoring status of all abilities of server represented by this object.
 *
 * @type void
 * @memberOf MediaControllerAbilitiesInfo
 * @returns {void}
 */
MediaControllerAbilitiesInfo.prototype.subscribe = function(){ return; };

/**
 * Removes a subscription for monitoring status of all abilities of server represented by this object.
 *
 * @type void
 * @memberOf MediaControllerAbilitiesInfo
 * @returns {void}
 */
MediaControllerAbilitiesInfo.prototype.unsubscribe = function(){ return; };

/**
 * Type of display mode on the server. Default value for a newly created server is .
 *
 * @type MediaControllerDisplayModeType
 */
MediaControllerDisplayMode.prototype.type = new MediaControllerDisplayModeType();

/**
 * Adds the listener for change requests of the media controller display mode.
 *
 * @param {MediaControllerDisplayModeChangeRequestCallback} listener
 * @type Number
 * @memberOf MediaControllerDisplayMode
 * @returns {Number}
 */
MediaControllerDisplayMode.prototype.addChangeRequestListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener and stops receiving change requests of media controller display mode.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerDisplayMode
 * @returns {void}
 */
MediaControllerDisplayMode.prototype.removeChangeRequestListener = function(watchId){ return; };

/**
 * Called when client requested playback state changes.
 *
 * @param {MediaControllerPlaybackState} state
 * @param {ApplicationId} clientName
 * @type void
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {void}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onplaybackstaterequest = function(state, clientName){ return; };

/**
 * Called when a client requested the playback state changes by sending the playback action.
 *
 * @param {MediaControllerPlaybackAction} action
 * @param {ApplicationId} clientName
 * @type RequestReply
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {RequestReply}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onplaybackactionrequest = function(action, clientName){ var ret = new RequestReply(); return ret; };

/**
 * Called when client requested playback position changes.
 *
 * @param {Number} position
 * @param {ApplicationId} clientName
 * @type RequestReply
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {RequestReply}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onplaybackpositionrequest = function(position, clientName){ var ret = new RequestReply(); return ret; };

/**
 * Called when client requested shuffle mode changes.
 *
 * @param {Boolean} mode
 * @param {ApplicationId} clientName
 * @type RequestReply
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {RequestReply}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onshufflemoderequest = function(mode, clientName){ var ret = new RequestReply(); return ret; };

/**
 * Called when client requested repeat mode changes.
 *
 * @param {Boolean} mode
 * @param {ApplicationId} clientName
 * @type void
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {void}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onrepeatmoderequest = function(mode, clientName){ return; };

/**
 * Called when client requested change of repeat state.
            <p>
It is guaranteed that the <a href="#MediaControllerChangeRequestPlaybackInfoCallback::onrepeatstaterequest">onrepeatstaterequest</a> callback
will be invoked after the <a href="#MediaControllerChangeRequestPlaybackInfoCallback::onrepeatmoderequest">onrepeatmoderequest</a>.
            </p>
           
 *
 * @param {MediaControllerRepeatState} state
 * @param {ApplicationId} clientName
 * @type RequestReply
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {RequestReply}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onrepeatstaterequest = function(state, clientName){ var ret = new RequestReply(); return ret; };

/**
 * Called when client request change of playback item.
 *
 * @param {String} playlistName
 * @param {String} index
 * @param {MediaControllerPlaybackAction} action
 * @param {Number} position
 * @param {ApplicationId} clientName
 * @type RequestReply
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {RequestReply}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onplaybackitemrequest = function(playlistName, index, action, position, clientName){ var ret = new RequestReply(); return ret; };

/**
 * Called when server status changed.
 *
 * @param {MediaControllerServerState} status
 * @type void
 * @memberOf MediaControllerServerStatusChangeCallback
 * @returns {void}
 */
MediaControllerServerStatusChangeCallback.prototype.onsuccess = function(status){ return; };

/**
 * Index of playlist's item. Should be unique within playlist.
 *
 * @type String
 */
MediaControllerPlaylistItem.prototype.index = new String();

/**
 * Metadata associated with item.
 *
 * @type MediaControllerMetadata
 */
MediaControllerPlaylistItem.prototype.metadata = new MediaControllerMetadata();

/**
 * Function called when search request has been processed.
            <p>
Interpretation of status and data parameters depends on the server implementation.
            </p>
           
 *
 * @param {RequestReply} reply
 * @type void
 * @memberOf MediaControllerSearchRequestReplyCallback
 * @returns {void}
 */
MediaControllerSearchRequestReplyCallback.prototype.onreply = function(reply){ return; };

/**
 * Current playback state.
 *
 * @type MediaControllerPlaybackState
 */
MediaControllerServerPlaybackInfo.prototype.state = new MediaControllerPlaybackState();

/**
 * Current playback position.
 *
 * @type Number
 */
MediaControllerServerPlaybackInfo.prototype.position = new Number();

/**
 * Current playback age rating.
 *
 * @type MediaControllerContentAgeRating
 */
MediaControllerServerPlaybackInfo.prototype.ageRating = new MediaControllerContentAgeRating();

/**
 * Current playback content type.
 *
 * @type MediaControllerContentType
 */
MediaControllerServerPlaybackInfo.prototype.contentType = new MediaControllerContentType();

/**
 * Current shuffle mode.
 *
 * @type Boolean
 */
MediaControllerServerPlaybackInfo.prototype.shuffleMode = new Boolean();

/**
 * Current repeat state.
 *
 * @type MediaControllerRepeatState
 */
MediaControllerServerPlaybackInfo.prototype.repeatState = new MediaControllerRepeatState();

/**
 * Current playback metadata.
 *
 * @type MediaControllerMetadata
 */
MediaControllerServerPlaybackInfo.prototype.metadata = new MediaControllerMetadata();

/**
 * Current item index.
 *
 * @type String
 */
MediaControllerServerPlaybackInfo.prototype.index = new String();

/**
 * Current playlist name.
 *
 * @type String
 */
MediaControllerServerPlaybackInfo.prototype.playlistName = new String();

/**
 * Sets index and playlist name properties of playback info object.
 *
 * @param {String} playlistName
 * @param {String} index
 * @type void
 * @memberOf MediaControllerServerPlaybackInfo
 * @returns {void}
 */
MediaControllerServerPlaybackInfo.prototype.updatePlaybackItem = function(playlistName, index){ return; };

/**
 * Adds the listener for change requests of a media controller playback info.
 *
 * @param {MediaControllerChangeRequestPlaybackInfoCallback} listener
 * @type Number
 * @memberOf MediaControllerServerPlaybackInfo
 * @returns {Number}
 */
MediaControllerServerPlaybackInfo.prototype.addChangeRequestListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener and stops receiving change requests of media controller playback info.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServerPlaybackInfo
 * @returns {void}
 */
MediaControllerServerPlaybackInfo.prototype.removeChangeRequestListener = function(watchId){ return; };

/**
 * Called when a response to the request is received.
 *
 * @param {object} data
 * @param {Number} code
 * @type void
 * @memberOf MediaControllerSendCommandSuccessCallback
 * @returns {void}
 */
MediaControllerSendCommandSuccessCallback.prototype.onsuccess = function(data, code){ return; };

/**
 * Called when change request is received from client.
 *
 * @param {ApplicationId} clientName
 * @param {MediaControllerDisplayModeType} mode
 * @type RequestReply
 * @memberOf MediaControllerDisplayModeChangeRequestCallback
 * @returns {RequestReply}
 */
MediaControllerDisplayModeChangeRequestCallback.prototype.onreply = function(clientName, mode){ var ret = new RequestReply(); return ret; };

/**
 * Called when all registered media controller servers found.
 *
 * @param {array} servers
 * @type void
 * @memberOf MediaControllerServerInfoArraySuccessCallback
 * @returns {void}
 */
MediaControllerServerInfoArraySuccessCallback.prototype.onsuccess = function(servers){ return; };

/**
 * Success callback for function.
 *
 * @param {array} playlists
 * @type void
 * @memberOf MediaControllerGetAllPlaylistsSuccessCallback
 * @returns {void}
 */
MediaControllerGetAllPlaylistsSuccessCallback.prototype.onsuccess = function(playlists){ return; };

/**
 * Media title.
 *
 * @type String
 */
MediaControllerMetadata.prototype.title = new String();

/**
 * Media artist.
 *
 * @type String
 */
MediaControllerMetadata.prototype.artist = new String();

/**
 * Media album.
 *
 * @type String
 */
MediaControllerMetadata.prototype.album = new String();

/**
 * Media author.
 *
 * @type String
 */
MediaControllerMetadata.prototype.author = new String();

/**
 * Media genre.
 *
 * @type String
 */
MediaControllerMetadata.prototype.genre = new String();

/**
 * Media duration.
 *
 * @type String
 */
MediaControllerMetadata.prototype.duration = new String();

/**
 * Media date.
 *
 * @type String
 */
MediaControllerMetadata.prototype.date = new String();

/**
 * Media copyright.
 *
 * @type String
 */
MediaControllerMetadata.prototype.copyright = new String();

/**
 * Media description.
 *
 * @type String
 */
MediaControllerMetadata.prototype.description = new String();

/**
 * Media track number.
 *
 * @type String
 */
MediaControllerMetadata.prototype.trackNum = new String();

/**
 * Media picture.
 *
 * @type String
 */
MediaControllerMetadata.prototype.picture = new String();

/**
 * Season number. Default value is 0.
 *
 * @type Number
 */
MediaControllerMetadata.prototype.seasonNumber = new Number();

/**
 * Season title. Default value is .
 *
 * @type String
 */
MediaControllerMetadata.prototype.seasonTitle = new String();

/**
 * Episode number. Default value is 0.
 *
 * @type Number
 */
MediaControllerMetadata.prototype.episodeNumber = new Number();

/**
 * Episode title. Default value is .
 *
 * @type String
 */
MediaControllerMetadata.prototype.episodeTitle = new String();

/**
 * Resolution width. Default value is 0. It cannot be changed to less than 0. Setting inappropriate values has no effect on the attribute.
 *
 * @type Number
 */
MediaControllerMetadata.prototype.resolutionWidth = new Number();

/**
 * Resolution height. Default value is 0. It cannot be changed to less than 0. Setting inappropriate values has no effect on the attribute.
 *
 * @type Number
 */
MediaControllerMetadata.prototype.resolutionHeight = new Number();

/**
 * Saves current state of metadata to the database and sends notification to the listening clients.
 *
 * @type void
 * @memberOf MediaControllerMetadata
 * @returns {void}
 */
MediaControllerMetadata.prototype.save = function(){ return; };

/**
 * Id of the client application.
 *
 * @type ApplicationId
 */
MediaControllerClientInfo.prototype.name = new ApplicationId();

/**
 * Sends an event to the client.
 *
 * @param {String} eventName
 * @param {Bundle} data
 * @param {MediaControllerSendCommandSuccessCallback} successCallback
 * @type void
 * @memberOf MediaControllerClientInfo
 * @returns {void}
 */
MediaControllerClientInfo.prototype.sendEvent = function(eventName, data, successCallback){ return; };

/**
 * The appId of the media controller server.
 *
 * @type ApplicationId
 */
MediaControllerServerInfo.prototype.name = new ApplicationId();

/**
 * State of the media controller server.
 *
 * @type MediaControllerServerState
 */
MediaControllerServerInfo.prototype.state = new MediaControllerServerState();

/**
 * Current playback info.
 *
 * @type MediaControllerPlaybackInfo
 */
MediaControllerServerInfo.prototype.playbackInfo = new MediaControllerPlaybackInfo();

/**
 * Playback info of current server info.
 *
 * @type MediaControllerServerInfoPlaybackInfo
 */
MediaControllerServerInfo.prototype.playback = new MediaControllerServerInfoPlaybackInfo();

/**
 * An attribute providing access to the playlist information from the server.
 *
 * @type MediaControllerPlaylistsInfo
 */
MediaControllerServerInfo.prototype.playlists = new MediaControllerPlaylistsInfo();

/**
 * Server icon URI.
 *
 * @type String
 */
MediaControllerServerInfo.prototype.iconURI = new String();

/**
 * Abilities of the media controller server.
 *
 * @type MediaControllerAbilitiesInfo
 */
MediaControllerServerInfo.prototype.abilities = new MediaControllerAbilitiesInfo();

/**
 * Object representing features related to subtitles control of a media controller server.
 *
 * @type MediaControllerSubtitlesInfo
 */
MediaControllerServerInfo.prototype.subtitles = new MediaControllerSubtitlesInfo();

/**
 * Object representing features related to spherical (360°) mode control of a media controller server.
 *
 * @type MediaControllerMode360Info
 */
MediaControllerServerInfo.prototype.mode360 = new MediaControllerMode360Info();

/**
 * Object representing features related to display mode control of a media controller server.
 *
 * @type MediaControllerDisplayModeInfo
 */
MediaControllerServerInfo.prototype.displayMode = new MediaControllerDisplayModeInfo();

/**
 * Object representing features related to display rotation control of a media controller server.
 *
 * @type MediaControllerDisplayRotationInfo
 */
MediaControllerServerInfo.prototype.displayRotation = new MediaControllerDisplayRotationInfo();

/**
 * Allows to change playback state of media controller server.
 *
 * @param {MediaControllerPlaybackState} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendPlaybackState = function(state, successCallback, errorCallback){ return; };

/**
 * Allows to change playback position of media controller server.
 *
 * @param {Number} position
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendPlaybackPosition = function(position, successCallback, errorCallback){ return; };

/**
 * Allows to change shuffle mode of media controller server.
 *
 * @param {Boolean} mode
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendShuffleMode = function(mode, successCallback, errorCallback){ return; };

/**
 * Allows to change repeat mode of media controller server.
 *
 * @param {Boolean} mode
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendRepeatMode = function(mode, successCallback, errorCallback){ return; };

/**
 * Allows to change repeat state of media controller server.
 *
 * @param {MediaControllerRepeatState} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendRepeatState = function(state, successCallback, errorCallback){ return; };

/**
 * Sends a search request to the media controller server.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>UnknownError</em>: if any error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {array} request
 * @param {MediaControllerSearchRequestReplyCallback} replyCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendSearchRequest = function(request, replyCallback, errorCallback){ return; };

/**
 * Allows to send custom command to media controller server.
 *
 * @param {String} command
 * @param {Bundle} data
 * @param {MediaControllerSendCommandSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendCommand = function(command, data, successCallback, errorCallback){ return; };

/**
 * Adds the listener for a media controller server status change.
 *
 * @param {MediaControllerServerStatusChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerServerInfo
 * @returns {Number}
 */
MediaControllerServerInfo.prototype.addServerStatusChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media controller server status.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.removeServerStatusChangeListener = function(watchId){ return; };

/**
 * Adds the listener for a media playback info changes.
 *
 * @param {MediaControllerPlaybackInfoChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerServerInfo
 * @returns {Number}
 */
MediaControllerServerInfo.prototype.addPlaybackInfoChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media playback info changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.removePlaybackInfoChangeListener = function(watchId){ return; };

/**
 * Retrieves all playlists saved in local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>UnknownError</em>: if any other error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerGetAllPlaylistsSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.getAllPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Requests setting new playback item to server.
 *
 * @param {String} playlistName
 * @param {String} index
 * @param {MediaControllerPlaybackState} state
 * @param {Number} position
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendPlaybackItem = function(playlistName, index, state, position){ return; };

/**
 * Adds listener to be invoked when playlist is updated by server.
 *
 * @param {MediaControllerPlaylistUpdatedCallback} listener
 * @type Number
 * @memberOf MediaControllerServerInfo
 * @returns {Number}
 */
MediaControllerServerInfo.prototype.addPlaylistUpdatedListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Stops listening for playlist updates and removals.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.removePlaylistUpdatedListener = function(listenerId){ return; };

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilities.prototype.letterBox = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilities.prototype.originSize = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilities.prototype.fullScreen = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to set mode.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayModeAbilities.prototype.croppedFull = new MediaControllerAbilitySupport();

/**
 * Called when custom command is received by the server or custom event is received by the client.
 *
 * @param {ApplicationId} senderAppName
 * @param {String} command
 * @param {object} data
 * @type RequestReply
 * @memberOf MediaControllerReceiveCommandCallback
 * @returns {RequestReply}
 */
MediaControllerReceiveCommandCallback.prototype.onsuccess = function(senderAppName, command, data){ var ret = new RequestReply(); return ret; };

/**
 * State of subtitles mode on the server. Default value for a newly created server is .
 *
 * @type Boolean
 */
MediaControllerSubtitles.prototype.enabled = new Boolean();

/**
 * Adds the listener for change requests of a media controller subtitles mode.
 *
 * @param {MediaControllerEnabledChangeRequestCallback} listener
 * @type Number
 * @memberOf MediaControllerSubtitles
 * @returns {Number}
 */
MediaControllerSubtitles.prototype.addChangeRequestListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener and stops receiving change requests of media controller subtitles mode.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerSubtitles
 * @returns {void}
 */
MediaControllerSubtitles.prototype.removeChangeRequestListener = function(watchId){ return; };

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.play = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.pause = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.stop = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.next = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.prev = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.forward = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.rewind = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to perform action.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerPlaybackAbilities.prototype.togglePlayPause = new MediaControllerAbilitySupport();

/**
 * Saves the current state of playback abilities to the database.
 *
 * @type void
 * @memberOf MediaControllerPlaybackAbilities
 * @returns {void}
 */
MediaControllerPlaybackAbilities.prototype.saveAbilities = function(){ return; };

/**
 * Retrieves all playlists saved in local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>UnknownError</em>: if any error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerGetAllPlaylistsSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerPlaylistsInfo
 * @returns {void}
 */
MediaControllerPlaylistsInfo.prototype.getAllPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Asks the server to set a new playback item.
 *
 * @param {String} playlistName
 * @param {String} index
 * @param {MediaControllerPlaybackAction} action
 * @param {Number} position
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerPlaylistsInfo
 * @returns {void}
 */
MediaControllerPlaylistsInfo.prototype.sendPlaybackItem = function(playlistName, index, action, position, replyCallback){ return; };

/**
 * Adds listener to be invoked when playlist is updated by server.
 *
 * @param {MediaControllerPlaylistUpdatedCallback} listener
 * @type Number
 * @memberOf MediaControllerPlaylistsInfo
 * @returns {Number}
 */
MediaControllerPlaylistsInfo.prototype.addPlaylistUpdatedListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Stops listening for playlist updates.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf MediaControllerPlaylistsInfo
 * @returns {void}
 */
MediaControllerPlaylistsInfo.prototype.removePlaylistUpdatedListener = function(listenerId){ return; };

/**
 * Returns the playlist with the given name.
 *
 * @param {String} playlistName
 * @type MediaControllerPlaylist
 * @memberOf MediaControllerPlaylistsInfo
 * @returns {MediaControllerPlaylist}
 */
MediaControllerPlaylistsInfo.prototype.getPlaylist = function(playlistName){ var ret = new MediaControllerPlaylist(); return ret; };

/**
 * Called when display rotation is changed.
 *
 * @param {MediaControllerDisplayRotationType} displayRotation
 * @type void
 * @memberOf MediaControllerDisplayRotationChangeCallback
 * @returns {void}
 */
MediaControllerDisplayRotationChangeCallback.prototype.onchange = function(displayRotation){ return; };

/**
 * State of spherical (360°) mode on the server represented by this object.
 *
 * @type Boolean
 */
MediaControllerMode360Info.prototype.enabled = new Boolean();

/**
 * Allows to send change requests for spherical (360°) mode to media controller server.
 *
 * @param {Boolean} enabled
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerMode360Info
 * @returns {void}
 */
MediaControllerMode360Info.prototype.sendRequest = function(enabled, replyCallback){ return; };

/**
 * Adds the listener for changes of a media controller spherical (360°) mode of a media controller server.
 *
 * @param {MediaControllerEnabledChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerMode360Info
 * @returns {Number}
 */
MediaControllerMode360Info.prototype.addModeChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media controller server spherical (360°) mode changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerMode360Info
 * @returns {void}
 */
MediaControllerMode360Info.prototype.removeModeChangeListener = function(watchId){ return; };

/**
 * Type of display mode on the server represented by this object.
 *
 * @type MediaControllerDisplayModeType
 */
MediaControllerDisplayModeInfo.prototype.type = new MediaControllerDisplayModeType();

/**
 * Allows to send change requests for display mode to media controller server.
 *
 * @param {MediaControllerDisplayModeType} type
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerDisplayModeInfo
 * @returns {void}
 */
MediaControllerDisplayModeInfo.prototype.sendRequest = function(type, replyCallback){ return; };

/**
 * Adds the listener for changes of a media controller display mode of a media controller server.
 *
 * @param {MediaControllerDisplayModeChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerDisplayModeInfo
 * @returns {Number}
 */
MediaControllerDisplayModeInfo.prototype.addModeChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media controller server display mode changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerDisplayModeInfo
 * @returns {void}
 */
MediaControllerDisplayModeInfo.prototype.removeModeChangeListener = function(watchId){ return; };

/**
 * State of display rotation on the server. Default value for a newly created server is .
 *
 * @type MediaControllerDisplayRotationType
 */
MediaControllerDisplayRotation.prototype.displayRotation = new MediaControllerDisplayRotationType();

/**
 * Adds the listener for change requests of a media controller display rotation.
 *
 * @param {MediaControllerDisplayRotationChangeRequestCallback} listener
 * @type Number
 * @memberOf MediaControllerDisplayRotation
 * @returns {Number}
 */
MediaControllerDisplayRotation.prototype.addChangeRequestListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener and stops receiving change requests of media controller display rotation.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerDisplayRotation
 * @returns {void}
 */
MediaControllerDisplayRotation.prototype.removeChangeRequestListener = function(watchId){ return; };

/**
 * Represents abilities of server's playback actions.
 *
 * @type MediaControllerPlaybackAbilities
 */
MediaControllerAbilities.prototype.playback = new MediaControllerPlaybackAbilities();

/**
 * Represents abilities of server's display modes.
 *
 * @type MediaControllerDisplayModeAbilities
 */
MediaControllerAbilities.prototype.displayMode = new MediaControllerDisplayModeAbilities();

/**
 * Represents display orientations supported by the media controller server.
 *
 * @type MediaControllerDisplayRotationAbilities
 */
MediaControllerAbilities.prototype.displayRotation = new MediaControllerDisplayRotationAbilities();

/**
 * Represents server's ability to change playback position.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.playbackPosition = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to change shuffle mode.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.shuffle = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to change repeat state.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.repeat = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to add/change/remove playlists.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.playlist = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive custom commands from the media controller client.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.clientCustom = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive search requests from the media controller client.
 * <p>
Default value is UNDECIDED.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.search = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive requests for subtitles mode change from the media controller client.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.subtitles = new MediaControllerAbilitySupport();

/**
 * Represents server's ability to receive requests for spherical (360°) mode change from the media controller client.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerAbilities.prototype.mode360 = new MediaControllerAbilitySupport();

/**
 * Called when server's attribute is changed.
 *
 * @param {Boolean} enabled
 * @type void
 * @memberOf MediaControllerEnabledChangeCallback
 * @returns {void}
 */
MediaControllerEnabledChangeCallback.prototype.onchange = function(enabled){ return; };

/**
 * Event triggered when server's playback ability is updated.
 *
 * @param {MediaControllerServerInfo} server
 * @param {MediaControllerPlaybackAbilitiesInfo} abilities
 * @type void
 * @memberOf MediaControllerAbilityChangeCallback
 * @returns {void}
 */
MediaControllerAbilityChangeCallback.prototype.onplaybackabilitychanged = function(server, abilities){ return; };

/**
 * Event triggered when server's display mode ability is updated.
 *
 * @param {MediaControllerServerInfo} server
 * @param {MediaControllerDisplayModeAbilitiesInfo} abilities
 * @type void
 * @memberOf MediaControllerAbilityChangeCallback
 * @returns {void}
 */
MediaControllerAbilityChangeCallback.prototype.ondisplaymodeabilitychanged = function(server, abilities){ return; };

/**
 * Event triggered when server's display rotation is updated.
 *
 * @param {MediaControllerServerInfo} server
 * @param {MediaControllerDisplayRotationAbilitiesInfo} abilities
 * @type void
 * @memberOf MediaControllerAbilityChangeCallback
 * @returns {void}
 */
MediaControllerAbilityChangeCallback.prototype.ondisplayrotationabilitychanged = function(server, abilities){ return; };

/**
 * Event triggered when server's simple ability is updated.
 *
 * @param {MediaControllerServerInfo} server
 * @param {MediaControllerSimpleAbility} type
 * @param {MediaControllerAbilitySupport} support
 * @type void
 * @memberOf MediaControllerAbilityChangeCallback
 * @returns {void}
 */
MediaControllerAbilityChangeCallback.prototype.onsimpleabilitychanged = function(server, type, support){ return; };

/**
 * Called when server's display mode is changed.
 *
 * @param {MediaControllerDisplayModeType} mode
 * @type void
 * @memberOf MediaControllerDisplayModeChangeCallback
 * @returns {void}
 */
MediaControllerDisplayModeChangeCallback.prototype.onchange = function(mode){ return; };

/**
 * Specifies filter's content type parameter.
 *
 * @type MediaControllerContentType
 */
SearchFilter.prototype.contentType = new MediaControllerContentType();

/**
 * Specifies filter's search category parameter.
 *
 * @type MediaControllerSearchCategory
 */
SearchFilter.prototype.category = new MediaControllerSearchCategory();

/**
 * Specifies filter's search keyword parameter.
 *
 * @type String
 */
SearchFilter.prototype.keyword = new String();

/**
 * Additional application-dependent search parameters.
 *
 * @type Bundle
 */
SearchFilter.prototype.extraData = new Bundle();

/**
 * State of subtitles mode on the server represented by this object.
 *
 * @type Boolean
 */
MediaControllerSubtitlesInfo.prototype.enabled = new Boolean();

/**
 * Allows to send change requests for subtitles mode to media controller server.
 *
 * @param {Boolean} enabled
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerSubtitlesInfo
 * @returns {void}
 */
MediaControllerSubtitlesInfo.prototype.sendRequest = function(enabled, replyCallback){ return; };

/**
 * Adds the listener for changes of a media controller subtitles mode of a media controller server.
 *
 * @param {MediaControllerEnabledChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerSubtitlesInfo
 * @returns {Number}
 */
MediaControllerSubtitlesInfo.prototype.addModeChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media controller server subtitles mode changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerSubtitlesInfo
 * @returns {void}
 */
MediaControllerSubtitlesInfo.prototype.removeModeChangeListener = function(watchId){ return; };

/**
 * Current playback state.
 *
 * @type MediaControllerPlaybackState
 */
MediaControllerServerInfoPlaybackInfo.prototype.state = new MediaControllerPlaybackState();

/**
 * Current playback position.
 *
 * @type Number
 */
MediaControllerServerInfoPlaybackInfo.prototype.position = new Number();

/**
 * Current playback age rating.
 *
 * @type MediaControllerContentAgeRating
 */
MediaControllerServerInfoPlaybackInfo.prototype.ageRating = new MediaControllerContentAgeRating();

/**
 * Current playback content type.
 *
 * @type MediaControllerContentType
 */
MediaControllerServerInfoPlaybackInfo.prototype.contentType = new MediaControllerContentType();

/**
 * Current shuffle mode.
 *
 * @type Boolean
 */
MediaControllerServerInfoPlaybackInfo.prototype.shuffleMode = new Boolean();

/**
 * Current repeat state.
 *
 * @type MediaControllerRepeatState
 */
MediaControllerServerInfoPlaybackInfo.prototype.repeatState = new MediaControllerRepeatState();

/**
 * Current playback metadata.
 *
 * @type MediaControllerMetadata
 */
MediaControllerServerInfoPlaybackInfo.prototype.metadata = new MediaControllerMetadata();

/**
 * Current item index. Value set to means no playlist set in playback
 *
 * @type String
 */
MediaControllerServerInfoPlaybackInfo.prototype.index = new String();

/**
 * Current playlist name. Value set to means no playlist set in playback
 *
 * @type String
 */
MediaControllerServerInfoPlaybackInfo.prototype.playlistName = new String();

/**
 * Sends request to change the playback state of a media controller server.
 *
 * @param {MediaControllerPlaybackAction} action
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerServerInfoPlaybackInfo
 * @returns {void}
 */
MediaControllerServerInfoPlaybackInfo.prototype.sendPlaybackAction = function(action, replyCallback){ return; };

/**
 * Sends request to change the playback position of a media controller server.
 *
 * @param {Number} position
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerServerInfoPlaybackInfo
 * @returns {void}
 */
MediaControllerServerInfoPlaybackInfo.prototype.sendPlaybackPosition = function(position, replyCallback){ return; };

/**
 * Sends request to change the shuffle mode of a media controller server.
 *
 * @param {Boolean} mode
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerServerInfoPlaybackInfo
 * @returns {void}
 */
MediaControllerServerInfoPlaybackInfo.prototype.sendShuffleMode = function(mode, replyCallback){ return; };

/**
 * Sends request to change the repeat state of a media controller server.
 *
 * @param {MediaControllerRepeatState} state
 * @param {MediaControllerSendCommandSuccessCallback} replyCallback
 * @type void
 * @memberOf MediaControllerServerInfoPlaybackInfo
 * @returns {void}
 */
MediaControllerServerInfoPlaybackInfo.prototype.sendRepeatState = function(state, replyCallback){ return; };

/**
 * Adds the listener for a media playback info changes.
 *
 * @param {MediaControllerPlaybackInfoChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerServerInfoPlaybackInfo
 * @returns {Number}
 */
MediaControllerServerInfoPlaybackInfo.prototype.addPlaybackInfoChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media playback info changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServerInfoPlaybackInfo
 * @returns {void}
 */
MediaControllerServerInfoPlaybackInfo.prototype.removePlaybackInfoChangeListener = function(watchId){ return; };

/**
 * State of spherical (360°) mode on the server. Default value for a newly created server is .
 *
 * @type Boolean
 */
MediaControllerMode360.prototype.enabled = new Boolean();

/**
 * Adds the listener for change requests of a media controller spherical (360°) mode.
 *
 * @param {MediaControllerEnabledChangeRequestCallback} listener
 * @type Number
 * @memberOf MediaControllerMode360
 * @returns {Number}
 */
MediaControllerMode360.prototype.addChangeRequestListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener and stops receiving change requests of media controller spherical (360°) mode.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerMode360
 * @returns {void}
 */
MediaControllerMode360.prototype.removeChangeRequestListener = function(watchId){ return; };

/**
 * Called when change request is received from a client.
 *
 * @param {ApplicationId} clientName
 * @param {MediaControllerDisplayRotationType} displayRotation
 * @type RequestReply
 * @memberOf MediaControllerDisplayRotationChangeRequestCallback
 * @returns {RequestReply}
 */
MediaControllerDisplayRotationChangeRequestCallback.prototype.onreply = function(clientName, displayRotation){ var ret = new RequestReply(); return ret; };

/**
 * Called when playback state or position is changed.
 *
 * @param {MediaControllerPlaybackState} state
 * @param {Number} position
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onplaybackchanged = function(state, position){ return; };

/**
 * Called when shuffle mode is changed.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onshufflemodechanged = function(mode){ return; };

/**
 * Called when repeat mode is changed.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onrepeatmodechanged = function(mode){ return; };

/**
 * Called when repeat state is changed.
            <p>
It is guaranteed that the <a href="#MediaControllerPlaybackInfoChangeCallback::onrepeatstatechanged">onrepeatstatechanged</a> callback
will be invoked after the <a href="#MediaControllerPlaybackInfoChangeCallback::onrepeatmodechanged">onrepeatmodechanged</a>.
            </p>
           
 *
 * @param {MediaControllerRepeatState} state
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onrepeatstatechanged = function(state){ return; };

/**
 * Called when playback metadata is changed.
 *
 * @param {MediaControllerMetadata} metadata
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onmetadatachanged = function(metadata){ return; };

/**
 * Name of this playlist.
 *
 * @type String
 */
MediaControllerPlaylist.prototype.name = new String();

/**
 * Adds new item to the playlist.
 *
 * @param {String} index
 * @param {MediaControllerMetadataInit} metadata
 * @type void
 * @memberOf MediaControllerPlaylist
 * @returns {void}
 */
MediaControllerPlaylist.prototype.addItem = function(index, metadata){ return; };

/**
 * Gets all items from playlist.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>UnknownError</em>: if any error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerGetItemsSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerPlaylist
 * @returns {void}
 */
MediaControllerPlaylist.prototype.getItems = function(successCallback, errorCallback){ return; };

/**
 * Success callback for function.
 *
 * @param {array} items
 * @type void
 * @memberOf MediaControllerGetItemsSuccessCallback
 * @returns {void}
 */
MediaControllerGetItemsSuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * Event triggered when playlist is updated in database.
 *
 * @param {String} serverName
 * @param {MediaControllerPlaylist} playlist
 * @type void
 * @memberOf MediaControllerPlaylistUpdatedCallback
 * @returns {void}
 */
MediaControllerPlaylistUpdatedCallback.prototype.onplaylistupdated = function(serverName, playlist){ return; };

/**
 * Event triggered when playlist is removed from database.
 *
 * @param {String} serverName
 * @param {String} playlistName
 * @type void
 * @memberOf MediaControllerPlaylistUpdatedCallback
 * @returns {void}
 */
MediaControllerPlaylistUpdatedCallback.prototype.onplaylistdeleted = function(serverName, playlistName){ return; };

/**
 * Current playback info.
 *
 * @type MediaControllerPlaybackInfo
 */
MediaControllerServer.prototype.playbackInfo = new MediaControllerPlaybackInfo();

/**
 * Current playback info.
 *
 * @type MediaControllerServerPlaybackInfo
 */
MediaControllerServer.prototype.playback = new MediaControllerServerPlaybackInfo();

/**
 * Object representing features related to playlists of a media controller server.
 *
 * @type MediaControllerPlaylists
 */
MediaControllerServer.prototype.playlists = new MediaControllerPlaylists();

/**
 * Server icon URI.
 *
 * @type String
 */
MediaControllerServer.prototype.iconURI = new String();

/**
 * Abilities of the media controller server.
 *
 * @type MediaControllerAbilities
 */
MediaControllerServer.prototype.abilities = new MediaControllerAbilities();

/**
 * Object representing features related to subtitles control of a media controller server.
 *
 * @type MediaControllerSubtitles
 */
MediaControllerServer.prototype.subtitles = new MediaControllerSubtitles();

/**
 * Object representing features related to spherical (360°) mode control of a media controller server.
 *
 * @type MediaControllerMode360
 */
MediaControllerServer.prototype.mode360 = new MediaControllerMode360();

/**
 * Object representing features related to display mode control of a media controller server.
 *
 * @type MediaControllerDisplayMode
 */
MediaControllerServer.prototype.displayMode = new MediaControllerDisplayMode();

/**
 * Object representing features related to display rotation control of a media controller server.
 *
 * @type MediaControllerDisplayRotation
 */
MediaControllerServer.prototype.displayRotation = new MediaControllerDisplayRotation();

/**
 * Returns all existing clients info.
 *
 * @type array
 * @memberOf MediaControllerServer
 * @returns {array}
 */
MediaControllerServer.prototype.getAllClientsInfo = function(){ var ret = new array(); return ret; };

/**
 * Updates playback state and send notification to the listening clients. See to check how to receive playback info changes from server on client side.
 *
 * @param {MediaControllerPlaybackState} state
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackState = function(state){ return; };

/**
 * Updates server icon URI.
 *
 * @param {String} iconURI
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateIconURI = function(iconURI){ return; };

/**
 * Updates playback position and send notification to the listening clients.
 *
 * @param {Number} position
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackPosition = function(position){ return; };

/**
 * Sets content age rating for current playback item.
 *
 * @param {MediaControllerContentAgeRating} rating
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackAgeRating = function(rating){ return; };

/**
 * Sets content type for the current playback item.
 *
 * @param {MediaControllerContentType} type
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackContentType = function(type){ return; };

/**
 * Updates shuffle mode and send notification to the listening clients.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateShuffleMode = function(mode){ return; };

/**
 * Updates repeat mode and send notification to the listening clients.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateRepeatMode = function(mode){ return; };

/**
 * Updates repeat state and sends notification to the listening clients.
 *
 * @param {MediaControllerRepeatState} state
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateRepeatState = function(state){ return; };

/**
 * Updates metadata and send notification to the listening clients.
 *
 * @param {MediaControllerMetadata} metadata
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateMetadata = function(metadata){ return; };

/**
 * Adds the listener for a media playback info requests from client. See to check how to send playback info change requests from client.
 *
 * @param {MediaControllerChangeRequestPlaybackInfoCallback} listener
 * @type Number
 * @memberOf MediaControllerServer
 * @returns {Number}
 */
MediaControllerServer.prototype.addChangeRequestPlaybackInfoListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving playback state requests from clients.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.removeChangeRequestPlaybackInfoListener = function(watchId){ return; };

/**
 * Sets the listener for receiving search requests from a client.
 *
 * @param {MediaControllerSearchRequestCallback} listener
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.setSearchRequestListener = function(listener){ return; };

/**
 * Unsets search request listener.
            <p>
Calling this function has no effect if the listener was not set.
            </p>
           
 *
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.unsetSearchRequestListener = function(){ return; };

/**
 * Adds the listener for receiving custom commands from client. See to check how to from client.
 *
 * @param {MediaControllerReceiveCommandCallback} listener
 * @type Number
 * @memberOf MediaControllerServer
 * @returns {Number}
 */
MediaControllerServer.prototype.addCommandListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving custom commands from clients.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.removeCommandListener = function(watchId){ return; };

/**
 * Creates object.
 *
 * @param {String} name
 * @type MediaControllerPlaylist
 * @memberOf MediaControllerServer
 * @returns {MediaControllerPlaylist}
 */
MediaControllerServer.prototype.createPlaylist = function(name){ var ret = new MediaControllerPlaylist(); return ret; };

/**
 * Saves the playlist in a local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>InvalidValuesError</em>: if playlist with given name does not exist.              </li>
              <li>
<em>UnknownError</em>: if any other error prevents the function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerPlaylist} playlist
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.savePlaylist = function(playlist, successCallback, errorCallback){ return; };

/**
 * Deletes playlist from local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>InvalidValuesError</em>: if playlist with given name does not exist.              </li>
              <li>
<em>UnknownError</em>: if any other error prevents the function from successful completion.              </li>
            </ul>
           
 *
 * @param {String} playlistName
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.deletePlaylist = function(playlistName, successCallback, errorCallback){ return; };

/**
 * Sets index and playlist name properties of playback info object.
 *
 * @param {String} playlistName
 * @param {String} index
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackItem = function(playlistName, index){ return; };

/**
 * Retrieves all playlists from a local database.
            <p>
The <em>errorCallback</em> may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
<em>UnknownError</em>: if any error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerGetAllPlaylistsSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.getAllPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Object representing a media controller manager.
 *
 * @type MediaControllerManager
 */
MediaControllerObject.prototype.mediacontroller = new MediaControllerManager();

/**
 * Represents the server's ability to set 0° display orientation.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilities.prototype.rotationNone = new MediaControllerAbilitySupport();

/**
 * Represents the server's ability to set 90° display orientation.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilities.prototype.rotation90 = new MediaControllerAbilitySupport();

/**
 * Represents the server's ability to set 180° display orientation.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilities.prototype.rotation180 = new MediaControllerAbilitySupport();

/**
 * Represents the server's ability to set 270° display orientation.
 * <p>
Default value is NO.
            </p>
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilities.prototype.rotation270 = new MediaControllerAbilitySupport();

/**
 * Function called on the server when it receives a search request from a client.
 *
 * @param {ApplicationId} clientName
 * @param {array} request
 * @type RequestReply
 * @memberOf MediaControllerSearchRequestCallback
 * @returns {RequestReply}
 */
MediaControllerSearchRequestCallback.prototype.onrequest = function(clientName, request){ var ret = new RequestReply(); return ret; };

/**
 * Retrieves all activated media controller servers.
 *
 * @param {MediaControllerServerInfoArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerClient
 * @returns {void}
 */
MediaControllerClient.prototype.findServers = function(successCallback, errorCallback){ return; };

/**
 * Gets the latest activated media controller server info.
 *
 * @type MediaControllerServerInfo
 * @memberOf MediaControllerClient
 * @returns {MediaControllerServerInfo}
 */
MediaControllerClient.prototype.getLatestServerInfo = function(){ var ret = new MediaControllerServerInfo(); return ret; };

/**
 * Adds a listener to be invoked when ability of the media controller server is changed.
 *
 * @param {MediaControllerAbilityChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerClient
 * @returns {Number}
 */
MediaControllerClient.prototype.addAbilityChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes selected .
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerClient
 * @returns {void}
 */
MediaControllerClient.prototype.removeAbilityChangeListener = function(watchId){ return; };

/**
 * Retrieves all subscribed media controller servers.
            <p>
The ErrorCallback may be triggered for one of the following errors:
            </p>
            <ul>
              <li>
UnknownError: if any error prevents function from successful completion.              </li>
            </ul>
           
 *
 * @param {MediaControllerServerInfoArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerClient
 * @returns {void}
 */
MediaControllerClient.prototype.findSubscribedServers = function(successCallback, errorCallback){ return; };

/**
 * Sets the media controller client's listener for custom events from the server.
            <p>
If the listener has already been set, calling this method will override it.
            </p>
           
 *
 * @param {MediaControllerReceiveCommandCallback} listener
 * @type void
 * @memberOf MediaControllerClient
 * @returns {void}
 */
MediaControllerClient.prototype.setCustomEventListener = function(listener){ return; };

/**
 * Removes the server's events listener.
            <p>
Calling this function has no effect, if the listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf MediaControllerClient
 * @returns {void}
 */
MediaControllerClient.prototype.unsetCustomEventListener = function(){ return; };

/**
 * Represents the server's ability to set 0° display orientation.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilitiesInfo.prototype.rotationNone = new MediaControllerAbilitySupport();

/**
 * Represents the server's ability to set 90° display orientation.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilitiesInfo.prototype.rotation90 = new MediaControllerAbilitySupport();

/**
 * Represents the server's ability to set 180° display orientation.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilitiesInfo.prototype.rotation180 = new MediaControllerAbilitySupport();

/**
 * Represents the server's ability to set 270° display orientation.
 *
 * @type MediaControllerAbilitySupport
 */
MediaControllerDisplayRotationAbilitiesInfo.prototype.rotation270 = new MediaControllerAbilitySupport();

/**
 * Object representing a media controller manager.
 *
 * @type MediaControllerManager
 */
Tizen.prototype.mediacontroller = new MediaControllerManager();

/**
 * The MediaKeyManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.mediakey object that allows accessing the functionality of the Media Key API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaKeyManagerObject}
 */
function MediaKeyManagerObject() {};
MediaKeyManagerObject.prototype = new Object();

/**
 * The MediaKeyManager interface provides the functionalities to get information about media key events.
 *
 * @super Object
 * @constructor
 * @return {MediaKeyManager}
 */
function MediaKeyManager() {};
MediaKeyManager.prototype = new Object();

/**
 * The MediaKeyEventCallback interface specifies a media key event callback for getting notified information about the media key events.
 *
 * @super Object
 * @constructor
 * @return {MediaKeyEventCallback}
 */
function MediaKeyEventCallback() {};
MediaKeyEventCallback.prototype = new Object();

/**
 * Object representing a media key manager.
 *
 * @type MediaKeyManager
 */
MediaKeyManagerObject.prototype.mediakey = new MediaKeyManager();

/**
 * Registers a listener to be called when a media key is pressed or released.
 *
 * @param {MediaKeyEventCallback} callback
 * @type void
 * @memberOf MediaKeyManager
 * @returns {void}
 */
MediaKeyManager.prototype.setMediaKeyEventListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification for detecting the media key event.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf MediaKeyManager
 * @returns {void}
 */
MediaKeyManager.prototype.unsetMediaKeyEventListener = function(){ return; };

/**
 * Called when a media key has been pressed.
 *
 * @param {MediaKeyType} type
 * @type void
 * @memberOf MediaKeyEventCallback
 * @returns {void}
 */
MediaKeyEventCallback.prototype.onpressed = function(type){ return; };

/**
 * Called when a media key has been released.
 *
 * @param {MediaKeyType} type
 * @type void
 * @memberOf MediaKeyEventCallback
 * @returns {void}
 */
MediaKeyEventCallback.prototype.onreleased = function(type){ return; };

/**
 * Object representing a media key manager.
 *
 * @type MediaKeyManager
 */
Tizen.prototype.mediakey = new MediaKeyManager();

/**
 * The interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.messageport</em> object allows access to the functionality of the Message Port API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessagePortManagerObject}
 */
function MessagePortManagerObject() {};
MessagePortManagerObject.prototype = new Object();

/**
 * The MessagePortCallback interface defines notification callbacks for receiving data from other applications.
 *
 * @super Object
 * @constructor
 * @return {MessagePortCallback}
 */
function MessagePortCallback() {};
MessagePortCallback.prototype = new Object();

/**
 * The interface provides methods to send messages.
 *
 * @super Object
 * @constructor
 * @return {RemoteMessagePort}
 */
function RemoteMessagePort() {};
RemoteMessagePort.prototype = new Object();

/**
 * The interface provides methods to receive data.
 *
 * @super Object
 * @constructor
 * @return {LocalMessagePort}
 */
function LocalMessagePort() {};
LocalMessagePort.prototype = new Object();

/**
 * The interface provides methods to request message port to communicate.
 *
 * @super Object
 * @constructor
 * @return {MessagePortManager}
 */
function MessagePortManager() {};
MessagePortManager.prototype = new Object();

/**
 * Object representing a exif manager.
 *
 * @type MessagePortManager
 */
MessagePortManagerObject.prototype.messageport = new MessagePortManager();

/**
 * Called when data is received from other applications via the specified message port name.
 *
 * @param {array} data
 * @param {RemoteMessagePort} remoteMessagePort
 * @type void
 * @memberOf MessagePortCallback
 * @returns {void}
 */
MessagePortCallback.prototype.onreceived = function(data, remoteMessagePort){ return; };

/**
 * The message port name.
 *
 * @type String
 */
RemoteMessagePort.prototype.messagePortName = new String();

/**
 * The application ID to connect with.
 *
 * @type ApplicationId
 */
RemoteMessagePort.prototype.appId = new ApplicationId();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
RemoteMessagePort.prototype.isTrusted = new Boolean();

/**
 * Sends messages to the specified application.
            <p>
The sent messages will be ignored without any notice, unless the target application added one or more listeners to the target local message port.
            </p>
           
 *
 * @param {array} data
 * @param {LocalMessagePort} localMessagePort
 * @type void
 * @memberOf RemoteMessagePort
 * @returns {void}
 */
RemoteMessagePort.prototype.sendMessage = function(data, localMessagePort){ return; };

/**
 * The name of the message port name.
 *
 * @type String
 */
LocalMessagePort.prototype.messagePortName = new String();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
LocalMessagePort.prototype.isTrusted = new Boolean();

/**
 * Adds a message port listener to receive messages from other applications.
 *
 * @param {MessagePortCallback} listener
 * @type Number
 * @memberOf LocalMessagePort
 * @returns {Number}
 */
LocalMessagePort.prototype.addMessagePortListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the message port listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf LocalMessagePort
 * @returns {void}
 */
LocalMessagePort.prototype.removeMessagePortListener = function(watchId){ return; };

/**
 * Requests a LocalMessagePort instance to start receiving message from another application.
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a trusted LocalMessagePort instance to receive message from another application.
            <p>
Trusted local message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestTrustedLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a RemoteMessagePort instance to send message to another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * Requests a trusted RemoteMessagePort instance to receive message from another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
Trusted remote message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestTrustedRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * Object representing a exif manager.
 *
 * @type MessagePortManager
 */
Tizen.prototype.messageport = new MessagePortManager();

/**
 * Object representing a file for metadata operations.
 *
 * @super Object
 * @constructor
 * @return {MetadataFileHandle}
 */
function MetadataFileHandle() {};
MetadataFileHandle.prototype = new Object();

/**
 * The MetadataManager interface is the top-level interface for the Metadata API.
 *
 * @super Object
 * @constructor
 * @return {MetadataManager}
 */
function MetadataManager() {};
MetadataManager.prototype = new Object();

/**
 * The MetadataObject interface defines what is instantiated in the tizen object.
          <p>
The tizen.metadata object provides access to the functionality of the Metadata API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MetadataObject}
 */
function MetadataObject() {};
MetadataObject.prototype = new Object();

/**
 * Object representing synchronized lyrics with associated timestamp. The lyrics need to be included in a multimedia file as SYLT metadata tag. Supported formats of encoding are at least and . Other formats can be ignored depending on the platform.
 *
 * @super Object
 * @constructor
 * @return {MetadataSyncLyrics}
 */
function MetadataSyncLyrics() {};
MetadataSyncLyrics.prototype = new Object();

/**
 * for a path passed to .
 *
 * @type String
 */
MetadataFileHandle.prototype.uri = new String();

/**
 * Extracts a metadata of a given type.
 *
 * @param {MetadataType} type
 * @type String
 * @memberOf MetadataFileHandle
 * @returns {String}
 */
MetadataFileHandle.prototype.get = function(type){ var ret = new String(); return ret; };

/**
 * Gets the artwork image included in a media file.
 *
 * @type Blob
 * @memberOf MetadataFileHandle
 * @returns {Blob}
 */
MetadataFileHandle.prototype.getArtwork = function(){ var ret = new Blob(); return ret; };

/**
 * Gets the thumbnail frame of a video file.
 *
 * @type Blob
 * @memberOf MetadataFileHandle
 * @returns {Blob}
 */
MetadataFileHandle.prototype.getThumbnailFrame = function(){ var ret = new Blob(); return ret; };

/**
 * Gets the frame of a video file for a specified time.
 *
 * @param {Number} timestamp
 * @param {Boolean} isAccurate
 * @type Blob
 * @memberOf MetadataFileHandle
 * @returns {Blob}
 */
MetadataFileHandle.prototype.getFrameAtTime = function(timestamp, isAccurate){ var ret = new Blob(); return ret; };

/**
 * Gets synchronized lyrics saved in multimedia file.
 *
 * @param {Number} index
 * @type MetadataSyncLyrics
 * @memberOf MetadataFileHandle
 * @returns {MetadataSyncLyrics}
 */
MetadataFileHandle.prototype.getSyncLyrics = function(index){ var ret = new MetadataSyncLyrics(); return ret; };

/**
 * Releases all resources related to the handle and marks handle as invalid.
 *
 * @type void
 * @memberOf MetadataFileHandle
 * @returns {void}
 */
MetadataFileHandle.prototype.release = function(){ return; };

/**
 * Creates representation of file for metadata operations.
            <p>
Handle is used for optimization of a process of reading multiple metadata from file. Creation of a handle does not open a file yet.
For memory management optimization, handle should be <a href="#MetadataFileHandle::release">released</a> after reading all needed metadata.
            </p>
           
 *
 * @param {Path} path
 * @type MetadataFileHandle
 * @memberOf MetadataManager
 * @returns {MetadataFileHandle}
 */
MetadataManager.prototype.createFileHandle = function(path){ var ret = new MetadataFileHandle(); return ret; };

/**
 * Object representing a Metadata manager.
 *
 * @type MetadataManager
 */
MetadataObject.prototype.metadata = new MetadataManager();

/**
 * Time information about lyrics in milliseconds.
 *
 * @type Number
 */
MetadataSyncLyrics.prototype.timestamp = new Number();

/**
 * Lyrics stored as simple text.
 *
 * @type String
 */
MetadataSyncLyrics.prototype.lyrics = new String();

/**
 * Object representing a Metadata manager.
 *
 * @type MetadataManager
 */
Tizen.prototype.metadata = new MetadataManager();

/**
 * The interface provides access to pipeline switches. They are elements with multiple source or sink pads and allow choosing between these pads.
 *
 * @super Object
 * @constructor
 * @return {Switch}
 */
function Switch() {};
Switch.prototype = new Object();

/**
 * The interface defines the listener registered with .
 *
 * @super Object
 * @constructor
 * @return {PipelineStateChangeListener}
 */
function PipelineStateChangeListener() {};
PipelineStateChangeListener.prototype = new Object();

/**
 * The interface provides access to control machine learning pipeline.
 *
 * @super Object
 * @constructor
 * @return {Pipeline}
 */
function Pipeline() {};
Pipeline.prototype = new Object();

/**
 * The interface provides access to pipeline's valves. Opening and closing these elements enables and disables data flow in consecutive pipeline branches.
          <p>
<em>Valve</em>s are open by default.
          </p>
          <p>
See the <a href="https://gstreamer.freedesktop.org/documentation/coreelements/valve.html">the gstreamer documentation</a> for more details.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Valve}
 */
function Valve() {};
Valve.prototype = new Object();

/**
 * The interface provides access to those pipeline sources that allow feeding the pipeline with input.
 *
 * @super Object
 * @constructor
 * @return {Source}
 */
function Source() {};
Source.prototype = new Object();

/**
 * The interface defines the listener registered with .
 *
 * @super Object
 * @constructor
 * @return {SinkListener}
 */
function SinkListener() {};
SinkListener.prototype = new Object();

/**
 * The interface allows creation of machine learning pipelines.
 *
 * @super Object
 * @constructor
 * @return {MachineLearningPipeline}
 */
function MachineLearningPipeline() {};
MachineLearningPipeline.prototype = new Object();

/**
 * The interface provides access to pipeline elements' properties.
 *
 * @super Object
 * @constructor
 * @return {NodeInfo}
 */
function NodeInfo() {};
NodeInfo.prototype = new Object();

/**
 * The interface defines the callback registered with .
 *
 * @super Object
 * @constructor
 * @return {CustomFilter}
 */
function CustomFilter() {};
CustomFilter.prototype = new Object();

/**
 * Determines the switch type.
 *
 * @type SwitchType
 */
Switch.prototype.type = new SwitchType();

/**
 * Name of the switch.
 *
 * @type String
 */
Switch.prototype.name = new String();

/**
 * Retrieves the list of pad names of the switch.
 *
 * @type array
 * @memberOf Switch
 * @returns {array}
 */
Switch.prototype.getPadList = function(){ var ret = new array(); return ret; };

/**
 * Selects a pad to be used as a source or sink of the switch node.
            <p>
The switch selects a sink if its <a href="#Switch::type">Switch::type</a> is <var>OUTPUT_SELECTOR</var> or it selects a source if its <a href="#Switch::type">Switch::type</a> is <var>INPUT_SELECTOR</var>.
            </p>
           
 *
 * @param {String} padName
 * @type void
 * @memberOf Switch
 * @returns {void}
 */
Switch.prototype.select = function(padName){ return; };

/**
 * Called when pipeline state changes.
 *
 * @param {PipelineState} newState
 * @type void
 * @memberOf PipelineStateChangeListener
 * @returns {void}
 */
PipelineStateChangeListener.prototype.onstatechange = function(newState){ return; };

/**
 * The current state of the pipeline.
 *
 * @type PipelineState
 */
Pipeline.prototype.state = new PipelineState();

/**
 * Starts the pipeline.
            <p>
The pipeline starts asynchronously and its state may not be set to <em>PLAYING</em> right after <em>start()</em> returns.
Register a <a href="#PipelineStateChangeListener">PipelineStateChangeListener</a> with <a href="#MachineLearningPipeline::createPipeline">MachineLearningPipeline::createPipeline()</a> to watch state changes.
            </p>
           
 *
 * @type void
 * @memberOf Pipeline
 * @returns {void}
 */
Pipeline.prototype.start = function(){ return; };

/**
 * Stops the pipeline.
            <p>
The pipeline stops asynchronously and its state may not be set to <em>PAUSED</em> right after <em>stop()</em> returns.
Register a <a href="#PipelineStateChangeListener">PipelineStateChangeListener</a> with <a href="#MachineLearningPipeline::createPipeline">MachineLearningPipeline::createPipeline()</a> to watch state changes.
            </p>
           
 *
 * @type void
 * @memberOf Pipeline
 * @returns {void}
 */
Pipeline.prototype.stop = function(){ return; };

/**
 * Releases the resources allocated by the pipeline.
            <p>
A pipeline may be expensive in terms of allocated resources such as memory, and <em>dispose()</em> releases them.
            </p>
           
 *
 * @type void
 * @memberOf Pipeline
 * @returns {void}
 */
Pipeline.prototype.dispose = function(){ return; };

/**
 * Gets a object allowing to get and set pipeline node's properties.
 *
 * @param {String} name
 * @type NodeInfo
 * @memberOf Pipeline
 * @returns {NodeInfo}
 */
Pipeline.prototype.getNodeInfo = function(name){ var ret = new NodeInfo(); return ret; };

/**
 * Gets a object that allows input to the pipeline.
 *
 * @param {String} name
 * @type Source
 * @memberOf Pipeline
 * @returns {Source}
 */
Pipeline.prototype.getSource = function(name){ var ret = new Source(); return ret; };

/**
 * Gets a object that allows to select a pipeline branch to be used as a source or sink.
 *
 * @param {String} name
 * @type Switch
 * @memberOf Pipeline
 * @returns {Switch}
 */
Pipeline.prototype.getSwitch = function(name){ var ret = new Switch(); return ret; };

/**
 * Gets a object that allows to start and stop streaming data to a branch of a pipeline.
 *
 * @param {String} name
 * @type Valve
 * @memberOf Pipeline
 * @returns {Valve}
 */
Pipeline.prototype.getValve = function(name){ var ret = new Valve(); return ret; };

/**
 * Registers a for a given sink. The listener is used to get output data from a pipeline.
 *
 * @param {String} sinkName
 * @param {SinkListener} sinkListener
 * @type void
 * @memberOf Pipeline
 * @returns {void}
 */
Pipeline.prototype.registerSinkListener = function(sinkName, sinkListener){ return; };

/**
 * Unregisters a sink's .
 *
 * @param {String} sinkName
 * @type void
 * @memberOf Pipeline
 * @returns {void}
 */
Pipeline.prototype.unregisterSinkListener = function(sinkName){ return; };

/**
 * Name of the valve.
 *
 * @type String
 */
Valve.prototype.name = new String();

/**
 * State of the valve.
 *
 * @type Boolean
 */
Valve.prototype.isOpen = new Boolean();

/**
 * Enables or disables the flow of the data through the valve by setting it to open or closed, respectively.
 *
 * @param {Boolean} open
 * @type void
 * @memberOf Valve
 * @returns {void}
 */
Valve.prototype.setOpen = function(open){ return; };

/**
 * The information about the format of tensor input expected by the source.
 *
 * @type TensorsInfo
 */
Source.prototype.inputTensorsInfo = new TensorsInfo();

/**
 * Name of the source.
 *
 * @type String
 */
Source.prototype.name = new String();

/**
 * Feeds the source with input data.
 *
 * @param {TensorsData} data
 * @type void
 * @memberOf Source
 * @returns {void}
 */
Source.prototype.inputData = function(data){ return; };

/**
 * Called when new data arrives to the sink.
 *
 * @param {String} sinkName
 * @param {TensorsData} data
 * @type void
 * @memberOf SinkListener
 * @returns {void}
 */
SinkListener.prototype.ondata = function(sinkName, data){ return; };

/**
 * Creates a machine learning pipeline.
            <p>
A pipeline is created from a description, which is a string containing all the nodes and links.
For more information about pipeline description, see the <a href="https://gstreamer.freedesktop.org/documentation/tools/gst-launch.html?gi-language=c#pipeline-description">Pipeline Description</a> section of gst-launch-1.0 documentation.
            </p>
           
 *
 * @param {String} description
 * @param {PipelineStateChangeListener} listener
 * @type Pipeline
 * @memberOf MachineLearningPipeline
 * @returns {Pipeline}
 */
MachineLearningPipeline.prototype.createPipeline = function(description, listener){ var ret = new Pipeline(); return ret; };

/**
 * Registers a , which implements a custom transform to the data coming through the pipeline.
            <p>
<var>errorCallback</var> is used to report errors that occur during processing of
the data by the filter.
When an error is caused by <a href="#CustomFilter::filter">CustomFilter::filter</a> or
an internal error occurs during processing of the data, the effect is the same
as if <a href="#CustomFilter::filter">CustomFilter::filter</a> returned <var>-1</var> and
the <em>errorCallback</em> method is called with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if the value returned
from <a href="#CustomFilter::filter">CustomFilter::filter</a> is not
compliant with legal values defined in <a href="#CustomFilter::filter">CustomFilter::filter</a> reference.              </li>
              <li>
AbortError - if an exception thrown from
<a href="#CustomFilter::filter">CustomFilter::filter</a> or any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} filterName
 * @param {CustomFilter} filter
 * @param {TensorsInfo} inputInfo
 * @param {TensorsInfo} outputInfo
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MachineLearningPipeline
 * @returns {void}
 */
MachineLearningPipeline.prototype.registerCustomFilter = function(filterName, filter, inputInfo, outputInfo, errorCallback){ return; };

/**
 * Unregisters a pipeline's .
 *
 * @param {String} filterName
 * @type void
 * @memberOf MachineLearningPipeline
 * @returns {void}
 */
MachineLearningPipeline.prototype.unregisterCustomFilter = function(filterName){ return; };

/**
 * Name of the node.
 *
 * @type String
 */
NodeInfo.prototype.name = new String();

/**
 * Retrieves the value of node's property.
 *
 * @param {String} name
 * @param {PropertyType} type
 * @type Property
 * @memberOf NodeInfo
 * @returns {Property}
 */
NodeInfo.prototype.getProperty = function(name, type){ var ret = new Property(); return ret; };

/**
 * Sets the value of node's property.
 *
 * @param {String} name
 * @param {PropertyType} type
 * @param {Property} value
 * @type void
 * @memberOf NodeInfo
 * @returns {void}
 */
NodeInfo.prototype.setProperty = function(name, type, value){ return; };

/**
 * Called when data to be processed arrives to the filter.
            <p>
This user-defined callback transforms the <em>input</em> and writes the transformation
result to <em>output</em>. <em>output</em> contents will be passed to the further stages of the pipeline.
            </p>
           
 *
 * @param {TensorsData} input
 * @param {TensorsData} output
 * @type Number
 * @memberOf CustomFilter
 * @returns {Number}
 */
CustomFilter.prototype.filter = function(input, output){ var ret = new Number(); return ret; };

/**
 * The interface provides a for the method.
 *
 * @super Object
 * @constructor
 * @return {OpenModelSuccessCallback}
 */
function OpenModelSuccessCallback() {};
OpenModelSuccessCallback.prototype = new Object();

/**
 * The interface provides method for making inferences from input data.
 *
 * @super Object
 * @constructor
 * @return {SingleShot}
 */
function SingleShot() {};
SingleShot.prototype = new Object();

/**
 * The Machine Learning single interface that provides access to the Single Shot API.
 *
 * @super Object
 * @constructor
 * @return {MachineLearningSingle}
 */
function MachineLearningSingle() {};
MachineLearningSingle.prototype = new Object();

/**
 * Called when the model file is opened successfully.
 *
 * @param {SingleShot} singleShot
 * @type void
 * @memberOf OpenModelSuccessCallback
 * @returns {void}
 */
OpenModelSuccessCallback.prototype.onsuccess = function(singleShot){ return; };

/**
 * The information (tensor dimension, type, name and so on) of required input data for the given model.
 *
 * @type TensorsInfo
 */
SingleShot.prototype.input = new TensorsInfo();

/**
 * The information (tensor dimension, type, name and so on) of output data for the given model.
 *
 * @type TensorsInfo
 */
SingleShot.prototype.output = new TensorsInfo();

/**
 * Invokes the model with the given input data.
 *
 * @param {TensorsData} inTensorsData
 * @type TensorsData
 * @memberOf SingleShot
 * @returns {TensorsData}
 */
SingleShot.prototype.invoke = function(inTensorsData){ var ret = new TensorsData(); return ret; };

/**
 * Gets the property value for the given model.
 *
 * @param {String} name
 * @type String
 * @memberOf SingleShot
 * @returns {String}
 */
SingleShot.prototype.getValue = function(name){ var ret = new String(); return ret; };

/**
 * Sets the property value for the given model. A model/framework may support changing the model information, such as tensor dimension and data layout. If model does not support changing the information, this method will raise an exception.
 *
 * @param {String} name
 * @param {String} value
 * @type void
 * @memberOf SingleShot
 * @returns {void}
 */
SingleShot.prototype.setValue = function(name, value){ return; };

/**
 * Sets the maximum amount of time to wait for an output from method, in milliseconds.
 *
 * @param {Number} timeout
 * @type void
 * @memberOf SingleShot
 * @returns {void}
 */
SingleShot.prototype.setTimeout = function(timeout){ return; };

/**
 * Closes the model and releases memory.
 *
 * @type void
 * @memberOf SingleShot
 * @returns {void}
 */
SingleShot.prototype.close = function(){ return; };

/**
 * Opens file, loads the neural network model and configures runtime environment with Neural Network Framework and HW information. Use method to close the opened model.
 *
 * @param {Path} modelPath
 * @param {TensorsInfo} inTensorsInfo
 * @param {TensorsInfo} outTensorsInfo
 * @param {NNFWType} fwType
 * @param {HWType} hwType
 * @param {Boolean} isDynamicMode
 * @type SingleShot
 * @memberOf MachineLearningSingle
 * @returns {SingleShot}
 */
MachineLearningSingle.prototype.openModel = function(modelPath, inTensorsInfo, outTensorsInfo, fwType, hwType, isDynamicMode){ var ret = new SingleShot(); return ret; };

/**
 * Opens file asynchronously, loads the neural network model and configures runtime environment with Neural Network Framework and HW information. Use method to close opened model.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - if any of the input parameters contains an invalid value.              </li>
              <li>
NotFoundError - if the file with model is not found.              </li>
              <li>
NotSupportedError - if the feature is not supported.              </li>
              <li>
AbortError - if any other error occurs.              </li>
            </ul>
           
 *
 * @param {Path} modelPath
 * @param {OpenModelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {TensorsInfo} inTensorsInfo
 * @param {TensorsInfo} outTensorsInfo
 * @param {NNFWType} fwType
 * @param {HWType} hwType
 * @param {Boolean} isDynamicMode
 * @type void
 * @memberOf MachineLearningSingle
 * @returns {void}
 */
MachineLearningSingle.prototype.openModelAsync = function(modelPath, successCallback, errorCallback, inTensorsInfo, outTensorsInfo, fwType, hwType, isDynamicMode){ return; };

/**
 * The MachineLearningManagerObject interface defines what is instantiated by the object from the Tizen platform.
          <p>
The <em>tizen.ml</em> object allows access to the Machine Learning API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MachineLearningManagerObject}
 */
function MachineLearningManagerObject() {};
MachineLearningManagerObject.prototype = new Object();

/**
 * The TensorsData interface sets and gets the buffer data for each Tensor.
 *
 * @super Object
 * @constructor
 * @return {TensorsData}
 */
function TensorsData() {};
TensorsData.prototype = new Object();

/**
 * The TensorsInfo interface manages tensor information such as name, type, and dimensions.
 *
 * @super Object
 * @constructor
 * @return {TensorsInfo}
 */
function TensorsInfo() {};
TensorsInfo.prototype = new Object();

/**
 * The MachineLearningManager entry interface provides methods to query the ML.
 *
 * @super Object
 * @constructor
 * @return {MachineLearningManager}
 */
function MachineLearningManager() {};
MachineLearningManager.prototype = new Object();

/**
 * TensorRawData interface provides information about raw data gathered from tensor.
 *
 * @super Object
 * @constructor
 * @return {TensorRawData}
 */
function TensorRawData() {};
TensorRawData.prototype = new Object();

/**
 * Object representing a machine learning manager.
 *
 * @type MachineLearningManager
 */
MachineLearningManagerObject.prototype.ml = new MachineLearningManager();

/**
 * Number of tensors in TensorsData object.
 *
 * @type Number
 */
TensorsData.prototype.count = new Number();

/**
 * Information about tensor.
 *
 * @type TensorsInfo
 */
TensorsData.prototype.tensorsInfo = new TensorsInfo();

/**
 * Gets tensor data at a given index. Data location and size can be provided to limit returned buffer, otherwise whole tensor will be returned.
 *
 * @param {Number} index
 * @param {array} location
 * @param {array} size
 * @type TensorRawData
 * @memberOf TensorsData
 * @returns {TensorRawData}
 */
TensorsData.prototype.getTensorRawData = function(index, location, size){ var ret = new TensorRawData(); return ret; };

/**
 * Sets tensor data at a given index. Location and size of modified data can be provided.
 *
 * @param {Number} index
 * @param {Bytes} buffer
 * @param {array} location
 * @param {array} size
 * @type void
 * @memberOf TensorsData
 * @returns {void}
 */
TensorsData.prototype.setTensorRawData = function(index, buffer, location, size){ return; };

/**
 * Disposes an object and releases the memory. Object should not be used after calling this method. Using diposed object will trigger .
 *
 * @type void
 * @memberOf TensorsData
 * @returns {void}
 */
TensorsData.prototype.dispose = function(){ return; };

/**
 * Number of tensor information already added to object.
 *
 * @type Number
 */
TensorsInfo.prototype.count = new Number();

/**
 * Add a Tensor information to the TensorsInfo instance.
 *
 * @param {String} name
 * @param {TensorType} type
 * @param {array} dimensions
 * @type Number
 * @memberOf TensorsInfo
 * @returns {Number}
 */
TensorsInfo.prototype.addTensorInfo = function(name, type, dimensions){ var ret = new Number(); return ret; };

/**
 * Clones a TensorsInfo object.
 *
 * @type TensorsInfo
 * @memberOf TensorsInfo
 * @returns {TensorsInfo}
 */
TensorsInfo.prototype.clone = function(){ var ret = new TensorsInfo(); return ret; };

/**
 * Compares with TensorsInfo and checks whether it has the same contents or not. One TensorsInfo is equal to another when they both have the same type and dimensions.
 *
 * @param {TensorsInfo} other
 * @type Boolean
 * @memberOf TensorsInfo
 * @returns {Boolean}
 */
TensorsInfo.prototype.equals = function(other){ var ret = new Boolean(); return ret; };

/**
 * Gets the dimensions of the tensor at a given index.
 *
 * @param {Number} index
 * @type array
 * @memberOf TensorsInfo
 * @returns {array}
 */
TensorsInfo.prototype.getDimensions = function(index){ var ret = new array(); return ret; };

/**
 * Gets the name of the tensor at a given index.
 *
 * @param {Number} index
 * @type String
 * @memberOf TensorsInfo
 * @returns {String}
 */
TensorsInfo.prototype.getTensorName = function(index){ var ret = new String(); return ret; };

/**
 * Creates a TensorsData instance based on information of TensorsInfo. Each execution of this method creates a new TensorsData object.
 *
 * @type TensorsData
 * @memberOf TensorsInfo
 * @returns {TensorsData}
 */
TensorsInfo.prototype.getTensorsData = function(){ var ret = new TensorsData(); return ret; };

/**
 * Calculates the byte size of tensor data.
 *
 * @param {Number} index
 * @type Number
 * @memberOf TensorsInfo
 * @returns {Number}
 */
TensorsInfo.prototype.getTensorSize = function(index){ var ret = new Number(); return ret; };

/**
 * Gets the type of the tensor at a given index.
 *
 * @param {Number} index
 * @type TensorType
 * @memberOf TensorsInfo
 * @returns {TensorType}
 */
TensorsInfo.prototype.getTensorType = function(index){ var ret = new TensorType(); return ret; };

/**
 * Sets the dimensions of the tensor at a given index.
 *
 * @param {Number} index
 * @param {array} dimensions
 * @type void
 * @memberOf TensorsInfo
 * @returns {void}
 */
TensorsInfo.prototype.setDimensions = function(index, dimensions){ return; };

/**
 * Sets the name of the tensor at a given index.
 *
 * @param {Number} index
 * @param {String} name
 * @type void
 * @memberOf TensorsInfo
 * @returns {void}
 */
TensorsInfo.prototype.setTensorName = function(index, name){ return; };

/**
 * Sets the type of the tensor at a given index.
 *
 * @param {Number} index
 * @param {TensorType} type
 * @type void
 * @memberOf TensorsInfo
 * @returns {void}
 */
TensorsInfo.prototype.setTensorType = function(index, type){ return; };

/**
 * Disposes an object and releases the memory. Object should not be used after calling this method. Using diposed object will trigger .
 *
 * @type void
 * @memberOf TensorsInfo
 * @returns {void}
 */
TensorsInfo.prototype.dispose = function(){ return; };

/**
 * Provides methods for .
 *
 * @type MachineLearningSingle
 */
MachineLearningManager.prototype.single = new MachineLearningSingle();

/**
 * Provides methods for .
 *
 * @type MachineLearningPipeline
 */
MachineLearningManager.prototype.pipeline = new MachineLearningPipeline();

/**
 * Checks whether Neural Network Framework with provided configuration is supported.
 *
 * @param {NNFWType} nnfw
 * @param {HWType} hw
 * @type Boolean
 * @memberOf MachineLearningManager
 * @returns {Boolean}
 */
MachineLearningManager.prototype.checkNNFWAvailability = function(nnfw, hw){ var ret = new Boolean(); return ret; };

/**
 * Raw tensor data. Array type inside TensorRawData is deduced by the of the tensor.
 * <p/>

 *
 * @type TypedArray
 */
TensorRawData.prototype.data = [new Typed()];

/**
 * Size of returned data in bytes.
 *
 * @type Number
 */
TensorRawData.prototype.size = new Number();

/**
 * Shape of raw tensor data - the length (number of elements) of each of the axes of a tensor. Tensors with rank up to 4 are supported, so length of the shape array will be always 4 and axes not defined by user will be filled with 1.
 *
 * @type array
 */
TensorRawData.prototype.shape = new array();

/**
 * Object representing a machine learning manager.
 *
 * @type MachineLearningManager
 */
Tizen.prototype.ml = new MachineLearningManager();

/**
 * The NDEFRecord interface.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecord}
 */
function NDEFRecord() {};
NDEFRecord.prototype = new Object();

/**
 * The NFCTagDetectCallback interface specifies a success callback to be invoked when an NFC tag is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
onattach: Invoked when an NFC tag is detected            </li>
            <li>
ondetach: Invoked when an NFC tag is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setTagListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCTagDetectCallback}
 */
function NFCTagDetectCallback() {};
NFCTagDetectCallback.prototype = new Object();

/**
 * The NDEFMessage interface. An NDEFmessage is composed of multiple NDEFRecords. The NDEFMessage must have at least one NDEFRecord.
 *
 * @super Object
 * @constructor
 * @return {NDEFMessage}
 */
function NDEFMessage() {};
NDEFMessage.prototype = new Object();

/**
 * The ActiveSecureElementChangeCallback interface specifies a success callback to be invoked when an active secure element is changed.
 *
 * @super Object
 * @constructor
 * @return {ActiveSecureElementChangeCallback}
 */
function ActiveSecureElementChangeCallback() {};
ActiveSecureElementChangeCallback.prototype = new Object();

/**
 * The NDEFRecord that has text type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordText}
 */
function NDEFRecordText() {};
NDEFRecordText.prototype = new NDEFRecord();

/**
 * The AIDArraySuccessCallback interface specifies a success callback to be invoked when an NFCAdaptor.getAIDsForCategory() completes successfully.
 *
 * @super Object
 * @constructor
 * @return {AIDArraySuccessCallback}
 */
function AIDArraySuccessCallback() {};
AIDArraySuccessCallback.prototype = new Object();

/**
 * The NFCPeer interface provides access to the NFC peer-to-peer target.
 *
 * @super Object
 * @constructor
 * @return {NFCPeer}
 */
function NFCPeer() {};
NFCPeer.prototype = new Object();

/**
 * The NDEFMessageReadCallback interface specifies a success callback to be invoked when data has been read successfully from the NFC tag or target.
          <p>
This callback interface specifies a success method with
an NDEF message as an input parameter.
It is used in asynchronous
operations, such as NFCTag.readNDEF() or NFCPeer.setReceiveNDEFListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NDEFMessageReadCallback}
 */
function NDEFMessageReadCallback() {};
NDEFMessageReadCallback.prototype = new Object();

/**
 * The NFCManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the NFC API.
 *
 * @super Object
 * @constructor
 * @return {NFCManagerObject}
 */
function NFCManagerObject() {};
NFCManagerObject.prototype = new Object();

/**
 * The HCEEventReceiveCallback interface specifies a success callback to be invoked when an HCE event is detected.
 *
 * @super Object
 * @constructor
 * @return {HCEEventReceiveCallback}
 */
function HCEEventReceiveCallback() {};
HCEEventReceiveCallback.prototype = new Object();

/**
 * The NFCManager interface provides access to the NFC tag/target.
          <p>
It provides access to the API functionalities through the tizen.nfc interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCManager}
 */
function NFCManager() {};
NFCManager.prototype = new Object();

/**
 * The NDEFRecord that has URI type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordURI}
 */
function NDEFRecordURI() {};
NDEFRecordURI.prototype = new NDEFRecord();

/**
 * The ByteArraySuccessCallback interface specifies a success callback to be invoked when NFCTag.transceive() completes successfully.
          <p>
This callback interface specifies a success method, with
raw data as an input parameter. It is used in NFCTag.transceive().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ByteArraySuccessCallback}
 */
function ByteArraySuccessCallback() {};
ByteArraySuccessCallback.prototype = new Object();

/**
 * The NFCAdapter interface provides access to control the adapter by offering methods to control local NFC behaviors, such as turning on/off an adapter.
 *
 * @super Object
 * @constructor
 * @return {NFCAdapter}
 */
function NFCAdapter() {};
NFCAdapter.prototype = new Object();

/**
 * The AID data interface represents registered AID data
 *
 * @super Object
 * @constructor
 * @return {AIDData}
 */
function AIDData() {};
AIDData.prototype = new Object();

/**
 * The CardEmulationModeChangeCallback interface specifies a success callback to be invoked when the card emulation mode is changed.
 *
 * @super Object
 * @constructor
 * @return {CardEmulationModeChangeCallback}
 */
function CardEmulationModeChangeCallback() {};
CardEmulationModeChangeCallback.prototype = new Object();

/**
 * The NFCTag interface provides access to the NFC tag.
 *
 * @super Object
 * @constructor
 * @return {NFCTag}
 */
function NFCTag() {};
NFCTag.prototype = new Object();

/**
 * The HCEEventData interface represents HCE event data.
 *
 * @super Object
 * @constructor
 * @return {HCEEventData}
 */
function HCEEventData() {};
HCEEventData.prototype = new Object();

/**
 * The NDEFRecord that has mime type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordMedia}
 */
function NDEFRecordMedia() {};
NDEFRecordMedia.prototype = new NDEFRecord();

/**
 * The NFCPeerDetectCallback interface specifies a success callback to be invoked when an NFC peer-to-peer target is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
onattach: Invoked when an NFC peer-to-peer target is detected            </li>
            <li>
ondetach: Invoked when an NFC peer-to-peer target is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setPeerListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCPeerDetectCallback}
 */
function NFCPeerDetectCallback() {};
NFCPeerDetectCallback.prototype = new Object();

/**
 * The TransactionEventCallback interface specifies a success callback to be invoked when an external reader tries to access a secure element.
 *
 * @super Object
 * @constructor
 * @return {TransactionEventCallback}
 */
function TransactionEventCallback() {};
TransactionEventCallback.prototype = new Object();

/**
 * The value of the record type (TNF value).
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>NFC_RECORD_TNF_EMPTY - The record type is empty
 * <li>NFC_RECORD_TNF_WELL_KNOWN - Record Type Definition (RTD) format [NFC RTD]
 * <li>NFC_RECORD_TNF_MIME_MEDIA - MIME media types in RFC 2046 [RFC 2046]
 * <li>NFC_RECORD_TNF_URI - Absolute URI as defined in RFC 3986 [RFC 3986]
 * <li>NFC_RECORD_TNF_EXTERNAL_RTD - NFC forum external type [NFC RTD]
 * <li>NFC_RECORD_TNF_UNKNOWN - The payload type is unknown
 * <li>NFC_RECORD_TNF_UNCHANGED - It means the payload is an intermediate or final chunk of a chunked NDEF record
 * </ul>
 *
 * @type Number
 */
NDEFRecord.prototype.tnf = new Number();

/**
 * The specified type in byte array.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.type = new array();

/**
 * The record ID.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.id = new array();

/**
 * The record payload.
 * <p>
The byte array contains <var>0</var> to <var>(2 ** 32 - 1)</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.payload = new array();

/**
 * The method invoked when a tag is attached.
 *
 * @param {NFCTag} nfcTag
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.onattach = function(nfcTag){ return; };

/**
 * The method invoked when the connected tag is detached.
 *
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.ondetach = function(){ return; };

/**
 * The number of records in the NDEFMessage.
 *
 * @type Number
 */
NDEFMessage.prototype.recordCount = new Number();

/**
 * The array of NDEFRecord objects in the NDEFMessage.
 *
 * @type array
 */
NDEFMessage.prototype.records = new array();

/**
 * Gets the serial byte array of the NDEF message.
            <p>
If the operation completes successfully, it returns the serial byte array of the NDEF message.
            </p>
           
 *
 * @type array
 * @memberOf NDEFMessage
 * @returns {array}
 */
NDEFMessage.prototype.toByte = function(){ var ret = new array(); return ret; };

/**
 * Called when the type of an active secure element is changed.
 *
 * @param {SecureElementType} type
 * @type void
 * @memberOf ActiveSecureElementChangeCallback
 * @returns {void}
 */
ActiveSecureElementChangeCallback.prototype.onchanged = function(type){ return; };

/**
 * The encoded text.
 *
 * @type String
 */
NDEFRecordText.prototype.text = new String();

/**
 * The language code string value, followed by IANA[RFC 3066] (for example, en-US, ko-KR).
 *
 * @type String
 */
NDEFRecordText.prototype.languageCode = new String();

/**
 * The encoding type. By default, this attribute is set to UTF8.
 *
 * @type NDEFRecordTextEncoding
 */
NDEFRecordText.prototype.encoding = new NDEFRecordTextEncoding();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} aids
 * @type void
 * @memberOf AIDArraySuccessCallback
 * @returns {void}
 */
AIDArraySuccessCallback.prototype.onsuccess = function(aids){ return; };

/**
 * The value is necessary to check if this NFC peer-to-peer target is connected.
 *
 * @type Boolean
 */
NFCPeer.prototype.isConnected = new Boolean();

/**
 * Registers a callback function to be invoked when an NDEF message is received from the connected NFC peer-to-peer target.
 *
 * @param {NDEFMessageReadCallback} successCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.setReceiveNDEFListener = function(successCallback){ return; };

/**
 * Unregisters the listener for receiving NDEF messages from the NFC peer-to-peer target connected.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.unsetReceiveNDEFListener = function(){ return; };

/**
 * Sends data to the NFC peer-to-peer target.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
ServiceNotAvailableError: If the NFC service is not available.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.sendNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {NDEFMessage} ndefMessage
 * @type void
 * @memberOf NDEFMessageReadCallback
 * @returns {void}
 */
NDEFMessageReadCallback.prototype.onsuccess = function(ndefMessage){ return; };

/**
 * Object representing a nfc manager.
 *
 * @type NFCManager
 */
NFCManagerObject.prototype.nfc = new NFCManager();

/**
 * Called when HCE event is detected.
 *
 * @param {HCEEventData} data
 * @type void
 * @memberOf HCEEventReceiveCallback
 * @returns {void}
 */
HCEEventReceiveCallback.prototype.ondetected = function(data){ return; };

/**
 * A constant to indicate the empty format of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EMPTY = new Number();

/**
 * A constant to indicate the Record Type Definition (RTD) format of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_WELL_KNOWN = new Number();

/**
 * A constant to indicate the MIME media types format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_MIME_MEDIA = new Number();

/**
 * A constant to indicate the absolute URI, as defined in the RFC 3986 [RFC 3986] format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_URI = new Number();

/**
 * A constant to indicate the NFC forum external type [NFC RTD] format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EXTERNAL_RTD = new Number();

/**
 * A constant to indicate the unknown type format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNKNOWN = new Number();

/**
 * A constant to indicate whether the payload is an intermediate or final chunk of a chunked NDEF record.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNCHANGED = new Number();

/**
 * Gets the default NFC adapter of the device.
 *
 * @type NFCAdapter
 * @memberOf NFCManager
 * @returns {NFCAdapter}
 */
NFCManager.prototype.getDefaultAdapter = function(){ var ret = new NFCAdapter(); return ret; };

/**
 * Gives priority to the current application for NFC operations.
            <p>
If the current application has priority, and is in the foreground, the system will not generate
application control requests to pick an application to handle NFC requests.
Such a request is usually generated, for example, when detecting an NFC tag or receiving an NDEF message
from a connected NFC peer-to-peer target.
            </p>
            <p>
When the current application moves to the background, it loses the priority.
            </p>
            <p>
The exclusive mode can only be set when NFC is on. If NFC is off, the mode is ignored.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCManager
 * @returns {void}
 */
NFCManager.prototype.setExclusiveMode = function(mode){ return; };

/**
 * The URI string that is stored in the payload.
 *
 * @type String
 */
NDEFRecordURI.prototype.uri = new String();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} data
 * @type void
 * @memberOf ByteArraySuccessCallback
 * @returns {void}
 */
ByteArraySuccessCallback.prototype.onsuccess = function(data){ return; };

/**
 * The state of the NFC adapter.
 *
 * @type Boolean
 */
NFCAdapter.prototype.powered = new Boolean();

/**
 * Card emulation mode of the NFC adapter.
 * <p>
To be allowed to change <var>cardEmulationMode</var>, the following privilege must be declared in the application's <em>config.xml</em> file.
            </p>
 * <ul>
 * <li>- NFC card emulation feature is enabled. NFC card emulation related methods are available for use.
 * <li>- NFC card emulation related methods cannot be used
 * </ul>
 *
 * @type CardEmulationMode
 */
NFCAdapter.prototype.cardEmulationMode = new CardEmulationMode();

/**
 * Active secure element type.
 * <p>
To be allowed to change <var>activeSecureElement</var>, the following privilege must be declared in the application's <em>config.xml</em> file.
            </p>
 * <p>
If the NFC service is not available, it returns <var>null</var>.
            </p>
 *
 * @type SecureElementType
 */
NFCAdapter.prototype.activeSecureElement = new SecureElementType();

/**
 * Registers a callback function to invoke when an NFC tag is detected.
            <p>
If the registration completes successfully, detectCallback must be
invoked when the NFC tag is detected.
            </p>
            <p>
If no tagFilter is passed, it shall consider the default tagFilter, that is to set all tag types.
            </p>
           
 *
 * @param {NFCTagDetectCallback} detectCallback
 * @param {array} tagFilter
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setTagListener = function(detectCallback, tagFilter){ return; };

/**
 * Registers a callback function to be invoked when an NFC peer-to-peer target is detected.
            <p>
If the registration completes successfully, the detectCallback must be
invoked when an NFC peer-to-peer target is detected.
            </p>
           
 *
 * @param {NFCPeerDetectCallback} detectCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPeerListener = function(detectCallback){ return; };

/**
 * Unregisters the listener for detecting an NFC tag.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetTagListener = function(){ return; };

/**
 * Unregisters the listener for detecting an NFC peer-to-peer target.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetPeerListener = function(){ return; };

/**
 * Registers a callback function to invoke when the card emulation mode is changed.
 *
 * @param {CardEmulationModeChangeCallback} changeCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addCardEmulationModeChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of card emulation mode changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeCardEmulationModeChangeListener = function(watchId){ return; };

/**
 * Registers a callback function to invoke when an external reader tries to access a secure element. Such an event may indicate initiating a financial transaction using the device.
 *
 * @param {SecureElementType} type
 * @param {TransactionEventCallback} eventCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addTransactionEventListener = function(type, eventCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of transaction events.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeTransactionEventListener = function(watchId){ return; };

/**
 * Registers a callback function to invoke when an active secure element is changed.
 *
 * @param {ActiveSecureElementChangeCallback} changeCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addActiveSecureElementChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of active secure element changes.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeActiveSecureElementChangeListener = function(watchId){ return; };

/**
 * Gets the NDEF message cached when the tag is detected.
            <p>
If the operation completes successfully, the NDEF Message that is last read
should be returned.
            </p>
           
 *
 * @type NDEFMessage
 * @memberOf NFCAdapter
 * @returns {NDEFMessage}
 */
NFCAdapter.prototype.getCachedMessage = function(){ var ret = new NDEFMessage(); return ret; };

/**
 * Gives priority to the current application for NFC transaction events.
            <p>
If the current application has priority, and is in the foreground, the system will not generate
application control requests to pick an application to handle a transaction event request.
            </p>
            <p>
When the current application moves to the background, it loses priority.
            </p>
            <p>
An application is allowed to get priority only when it is in the foreground.
Losing priority is always allowed regardless of an application's status.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setExclusiveModeForTransaction = function(mode){ return; };

/**
 * Registers a callback function for receiving HCE event.
 *
 * @param {HCEEventReceiveCallback} eventCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addHCEEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of a HCE event.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeHCEEventListener = function(watchId){ return; };

/**
 * Sends host APDU response to CLF (Contactless Front-end).
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} apdu
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.sendHostAPDUResponse = function(apdu, successCallback, errorCallback){ return; };

/**
 * Allows an application to query whether an application is currently the activated handler for a specific AID and secure element type.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @type Boolean
 * @memberOf NFCAdapter
 * @returns {Boolean}
 */
NFCAdapter.prototype.isActivatedHandlerForAID = function(type, aid){ var ret = new Boolean(); return ret; };

/**
 * Allows an application to query whether an application is currently the activated handler for a specific card emulation category and secure element type.
 *
 * @param {SecureElementType} type
 * @param {CardEmulationCategoryType} category
 * @type Boolean
 * @memberOf NFCAdapter
 * @returns {Boolean}
 */
NFCAdapter.prototype.isActivatedHandlerForCategory = function(type, category){ var ret = new Boolean(); return ret; };

/**
 * Registers an AID for a specific category and secure element type.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @param {CardEmulationCategoryType} category
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.registerAID = function(type, aid, category){ return; };

/**
 * Unregisters an AID that was previously registered for a specific card emulation category and secure element type. An application can only remove the AIDs which it registered.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @param {CardEmulationCategoryType} category
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unregisterAID = function(type, aid, category){ return; };

/**
 * Retrieves AIDs that were previously registered for a specific card emulation category and secure element type. An application can only retrieve the AIDs which it registered.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SecureElementType} type
 * @param {CardEmulationCategoryType} category
 * @param {AIDArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.getAIDsForCategory = function(type, category, successCallback, errorCallback){ return; };

/**
 * Sets current application as preferred application for NFC card emulation events as long as it is in foreground.
            <p>
Calling the method allows to change routing priority of NFC card emulation without affecting NFC Settings (the <em>Tap and pay</em> option).
As long as the application is in foreground, it will be set as the receiver of card emulation events instead of the application chosen in NFC Settings.
            </p>
            <p>
When the application leaves the foreground, receiving NFC card events is stopped for this application. The default application from settings will be used instead.
            </p>
            <p>
When the application comes back from background, receiving events is turned back on.
            </p>
           
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPreferredApp = function(){ return; };

/**
 * Unsets currently running application as preferred application for NFC card emulation events.
            <p>
This method restores application chosen in NFC Settings (the <em>Tap and pay</em> option) as preferred for NFC card emulation events.
            </p>
            <p>
To set application as preferred again, use <a href="#NFCAdapter::setPreferredApp">setPreferredApp()</a>.
            </p>
           
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetPreferredApp = function(){ return; };

/**
 * Secure Element type.
 *
 * @type SecureElementType
 */
AIDData.prototype.type = new SecureElementType();

/**
 * The AID (Application ID) data, specified in ISO/IEC 7816-4
 *
 * @type AID
 */
AIDData.prototype.aid = new AID();

/**
 * An attribute to indicate whether the registered AID is read-only or not
 *
 * @type Boolean
 */
AIDData.prototype.readOnly = new Boolean();

/**
 * Called when the card emulation mode is changed.
 *
 * @param {CardEmulationMode} mode
 * @type void
 * @memberOf CardEmulationModeChangeCallback
 * @returns {void}
 */
CardEmulationModeChangeCallback.prototype.onchanged = function(mode){ return; };

/**
 * The type of the NFC tag.
 *
 * @type NFCTagType
 */
NFCTag.prototype.type = new NFCTagType();

/**
 * An attribute to check if the NFC Tag supports the NDEF format.
 *
 * @type Boolean
 */
NFCTag.prototype.isSupportedNDEF = new Boolean();

/**
 * The size of an NDEF message stored in the tag.
 *
 * @type Number
 */
NFCTag.prototype.ndefSize = new Number();

/**
 * The value is all tag information.
 * <p>
It is pairs of key and value.
The array's index is the pair's key and value is its value.
            </p>
 *
 * @type object
 */
NFCTag.prototype.properties = new object();

/**
 * The value is necessary to check if this tag is connected.
 *
 * @type Boolean
 */
NFCTag.prototype.isConnected = new Boolean();

/**
 * Reads the NDEF data from the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
InvalidValuesError - If the current Tag doesn't support the NDEF standard.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {NDEFMessageReadCallback} readCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.readNDEF = function(readCallback, errorCallback){ return; };

/**
 * Writes the NDEF data to the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value or the current Tag does not support the NDEF standard.              </li>
              <li>
ServiceNotAvailableError: If the NFC service is not available.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.writeNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * Accesses the raw format card. The transceive function is the only way to access the raw format card (not formatted). Each tag type requires its own command to access tags. This API provides low level access of the tag operation. (Note that you must know each tag technology.)
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} data
 * @param {ByteArraySuccessCallback} dataCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.transceive = function(data, dataCallback, errorCallback){ return; };

/**
 * HCE event type.
 *
 * @type HCEEventType
 */
HCEEventData.prototype.eventType = new HCEEventType();

/**
 * The bytes array of APDU
 *
 * @type array
 */
HCEEventData.prototype.apdu = new array();

/**
 * The length of APDU
 *
 * @type Number
 */
HCEEventData.prototype.length = new Number();

/**
 * The mime type [RFC 2046] (for example, text/plain, image/jpeg ).
 *
 * @type String
 */
NDEFRecordMedia.prototype.mimeType = new String();

/**
 * The method invoked when the NFC peer-to-peer target is attached.
 *
 * @param {NFCPeer} nfcPeer
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.onattach = function(nfcPeer){ return; };

/**
 * The method invoked when the connected NFC peer-to-peer target is detached.
 *
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.ondetach = function(){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} appletId
 * @param {array} data
 * @type void
 * @memberOf TransactionEventCallback
 * @returns {void}
 */
TransactionEventCallback.prototype.ondetected = function(appletId, data){ return; };

/**
 * Object representing a nfc manager.
 *
 * @type NFCManager
 */
Tizen.prototype.nfc = new NFCManager();

/**
 * Defines what is instantiated by the object.
          <p>
The <em>tizen.notification</em> object allows access to the
Notification API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationObject}
 */
function NotificationObject() {};
NotificationObject.prototype = new Object();

/**
 * The UserNotification interface represents a notification and offers additional attributes to represent a notification displayed in the notification tray.
          <p>
All notifications must have a title attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {UserNotification}
 */
function UserNotification() {};
UserNotification.prototype = new Notification();

/**
 * Notification manager interface that provides access to the API.
          <p>
The NotificationManager interface provides access to the notification object.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationManager}
 */
function NotificationManager() {};
NotificationManager.prototype = new Object();

/**
 * The NotificationDetailInfo object that contains the detail information of the notification.
 *
 * @super Object
 * @constructor
 * @return {NotificationDetailInfo}
 */
function NotificationDetailInfo() {};
NotificationDetailInfo.prototype = new Object();

/**
 * The Notification interface offers common attributes to represent the object.
 *
 * @super Object
 * @constructor
 * @return {Notification}
 */
function Notification() {};
Notification.prototype = new Object();

/**
 * The StatusNotification interface represents a status notification and offers additional attributes to represent a notification displayed in the notification tray.
          <p>
All notifications must have a title attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {StatusNotification}
 */
function StatusNotification() {};
StatusNotification.prototype = new Notification();

/**
 * Object representing a notification manager.
 *
 * @type NotificationManager
 */
NotificationObject.prototype.notification = new NotificationManager();

/**
 * The type of notification.
 *
 * @type UserNotificationType
 */
UserNotification.prototype.userType = new UserNotificationType();

/**
 * Defines content-related settings of a notification.
 * <p>
If this is null, all property values of a NotificationTextContentInfo dictionary are ignored.
            </p>
 *
 * @type NotificationTextContentInfo
 */
UserNotification.prototype.textContents = new NotificationTextContentInfo();

/**
 * Defines additional image-related settings of a notification.
 * <p>
If this is null, all property values of a NotificationImageInfo dictionary are ignored.
            </p>
 *
 * @type NotificationImageInfo
 */
UserNotification.prototype.images = new NotificationImageInfo();

/**
 * Defines additional thumbnails-related settings of a notification.
 * <p>
If this is null, all property values of a NotificationThumbnailInfo dictionary are ignored.
            </p>
 *
 * @type NotificationThumbnailInfo
 */
UserNotification.prototype.thumbnails = new NotificationThumbnailInfo();

/**
 * Defines additional actions-related settings of a notification.
 * <p>
If this is null, all property values of a NotificationActionInfo dictionary are ignored.
            </p>
 *
 * @type NotificationActionInfo
 */
UserNotification.prototype.actions = new NotificationActionInfo();

/**
 * Defines additional group-content-related settings of a notification.
 * <p>
If this is null, all property values of a NotificationGroupContentInfo dictionary are ignored.
            </p>
 *
 * @type NotificationGroupContentInfo
 */
UserNotification.prototype.groupContents = new NotificationGroupContentInfo();

/**
 * Defines additional LED-related settings of a notification.
 * <p>
If this is null, all property values of a NotificationLedInfo dictionary are ignored.
            </p>
 *
 * @type NotificationLedInfo
 */
UserNotification.prototype.leds = new NotificationLedInfo();

/**
 * Posts a notification to display.
 *
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.post = function(notification){ return; };

/**
 * Updates a previously posted notification.
 *
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.update = function(notification){ return; };

/**
 * Removes a previously posted notification.
 *
 * @param {NotificationId} id
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.remove = function(id){ return; };

/**
 * Removes all notifications that have been posted by the current application.
 *
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.removeAll = function(){ return; };

/**
 * Gets a notification that has previously been posted by the current application. Note that the obtained notification's progressType is
 *
 * @param {NotificationId} id
 * @type Notification
 * @memberOf NotificationManager
 * @returns {Notification}
 */
NotificationManager.prototype.get = function(id){ var ret = new Notification(); return ret; };

/**
 * Gets a notification that has previously been posted by the current application. Note that the obtained notification's progressType is .
 *
 * @param {NotificationId} id
 * @type Notification
 * @memberOf NotificationManager
 * @returns {Notification}
 */
NotificationManager.prototype.getNotification = function(id){ var ret = new Notification(); return ret; };

/**
 * Gets all notifications that have previously been posted by the current application. Note that the obtained notification's progressType is
 *
 * @type array
 * @memberOf NotificationManager
 * @returns {array}
 */
NotificationManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * Gets all notifications that have previously been posted by the current application. Note that the obtained notification's progressType is .
 *
 * @type array
 * @memberOf NotificationManager
 * @returns {array}
 */
NotificationManager.prototype.getAllNotifications = function(){ var ret = new array(); return ret; };

/**
 * Saves a notification template to the notification database.
            <p>
An application can save the created notification as a template for later reuse.
If the template has the same name as a saved one, the saved template will be overwritten.
            </p>
            <p>
A saved template can be loaded only by the application which saved it.
All templates are removed when the application package is uninstalled.
            </p>
           
 *
 * @param {String} name
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.saveNotificationAsTemplate = function(name, notification){ return; };

/**
 * Creates notification based on previously created template.
            <p>
An application can load a saved template and post it.
An application can load only templates that it has saved.
            </p>
           
 *
 * @param {String} name
 * @type UserNotification
 * @memberOf NotificationManager
 * @returns {UserNotification}
 */
NotificationManager.prototype.createNotificationFromTemplate = function(name){ var ret = new UserNotification(); return ret; };

/**
 * The main content of the detail information. This attribute is available on simple status notifications.
 *
 * @type String
 */
NotificationDetailInfo.prototype.mainText = new String();

/**
 * The secondary content of the detail information.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
NotificationDetailInfo.prototype.subText = new String();

/**
 * The Notification identifier. Before the notification is posted, this value is undefined.
 *
 * @type NotificationId
 */
Notification.prototype.id = new NotificationId();

/**
 * The Notification type.
 *
 * @type NotificationType
 */
Notification.prototype.type = new NotificationType();

/**
 * The time when the notification is posted. Before the notification is posted, this value is undefined.
 *
 * @type Date
 */
Notification.prototype.postedTime = new Date();

/**
 * The title to display in a notification.
 *
 * @type String
 */
Notification.prototype.title = new String();

/**
 * The content to display in a notification.
 *
 * @type String
 */
Notification.prototype.content = new String();

/**
 * The status notification type.
 *
 * @type StatusNotificationType
 */
StatusNotification.prototype.statusType = new StatusNotificationType();

/**
 * The icon path to display in the notification.
 *
 * @type String
 */
StatusNotification.prototype.iconPath = new String();

/**
 * The sub icon path to display in the notification.
 *
 * @type String
 */
StatusNotification.prototype.subIconPath = new String();

/**
 * The number of events to display in the notification.
 *
 * @type Number
 */
StatusNotification.prototype.number = new Number();

/**
 * Appends lines of the detail information to the notification. This attribute is available in a simple status notification. By default, this attribute is initialized with an empty array. The maximum number of detail information elements in the array is 2.
 *
 * @type array
 */
StatusNotification.prototype.detailInfo = new array();

/**
 * Sets the notification LED indicator color property. The color is a numerical RGB value(#rrggbb). The format of an RGB value in hexadecimal notation is a "#" immediately followed by exactly six hexadecimal characters(0-9, A-F). The color format is case-insensitive. The LED indicator color will show that it's a close approximation. LED will only light on when the screen is off. To turn the LED off, set "#000000" or null to ledColor. This method has effects when the device has notification LED.
 *
 * @type String
 */
StatusNotification.prototype.ledColor = new String();

/**
 * The milliseconds for which the light is on. The light continuously toggles on (ledOnPeriod) and off (ledOffPeriod). By default, this attribute is set to 0
 *
 * @type Number
 */
StatusNotification.prototype.ledOnPeriod = new Number();

/**
 * The milliseconds for which the light is off. By default, this attribute is set to 0.
 *
 * @type Number
 */
StatusNotification.prototype.ledOffPeriod = new Number();

/**
 * The image path to use as the background of the notification. This attribute is available on simple or thumbnail status notifications.
 *
 * @type String
 */
StatusNotification.prototype.backgroundImagePath = new String();

/**
 * The image paths associated with the thumbnail status notification. By default, this attribute is initialized with an empty array. The maximum number of thumbnail path elements in the array is 4.
 *
 * @type array
 */
StatusNotification.prototype.thumbnails = new array();

/**
 * The path of a sound file to play when the notification is shown.
 *
 * @type String
 */
StatusNotification.prototype.soundPath = new String();

/**
 * Checks whether to vibrate when the notification is shown. By default, this attribute is set to false.
 *
 * @type Boolean
 */
StatusNotification.prototype.vibration = new Boolean();

/**
 * Holds the application control to launch an application when the notification is selected from the notification tray.
 *
 * @type ApplicationControl
 */
StatusNotification.prototype.appControl = new ApplicationControl();

/**
 * Holds the application ID to launch when the notification is selected from the notification tray.
 *
 * @type ApplicationId
 */
StatusNotification.prototype.appId = new ApplicationId();

/**
 * Defines the type for an ongoing notification's progress. By default, this attribute is set to PERCENTAGE.
 *
 * @type NotificationProgressType
 */
StatusNotification.prototype.progressType = new NotificationProgressType();

/**
 * Defines the current notification progress value ( or ), depending on the
 * <p>
If progressValue is set, the progressbar will be displayed in the notification. The progressValue can change the amount of progress as it moves forward or backward. It gets the progress value of the current notification.
If 0, the indeterminate progressbar will be shown.
This attribute is only available for StatusNotification of type <em>PROGRESS</em>.
            </p>
 * <p>
Applications should keep the progress value for its job because
the saved value in the notification status tray would be different from
the exact progress value.
            </p>
 * <p>
Range of <em>progressValue</em>: percent (0 to 100).
            </p>
 *
 * @type Number
 */
StatusNotification.prototype.progressValue = new Number();

/**
 * Object representing a notification manager.
 *
 * @type NotificationManager
 */
Tizen.prototype.notification = new NotificationManager();

/**
 * This interface invokes the success callback with an array of objects as an input parameter when the installed package list is retrieved.
          <p>
It is used in <em>tizen.package.getPackagesInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageInformationArraySuccessCallback}
 */
function PackageInformationArraySuccessCallback() {};
PackageInformationArraySuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.package</em> object allows access to Package API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageManagerObject}
 */
function PackageManagerObject() {};
PackageManagerObject.prototype = new Object();

/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 *
 * @super Object
 * @constructor
 * @return {PackageInformationEventCallback}
 */
function PackageInformationEventCallback() {};
PackageInformationEventCallback.prototype = new Object();

/**
 * This interface defines the general information available to an installed package.
 *
 * @super Object
 * @constructor
 * @return {PackageInformation}
 */
function PackageInformation() {};
PackageInformation.prototype = new Object();

/**
 * This interface defines the package manager.
 *
 * @super Object
 * @constructor
 * @return {PackageManager}
 */
function PackageManager() {};
PackageManager.prototype = new Object();

/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 * @super Object
 * @constructor
 * @return {PackageProgressCallback}
 */
function PackageProgressCallback() {};
PackageProgressCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf PackageInformationArraySuccessCallback
 * @returns {void}
 */
PackageInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Object representing a package manager.
 *
 * @type PackageManager
 */
PackageManagerObject.prototype.package = new PackageManager();

/**
 * Called when a package is installed.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when a package is updated.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when a package is uninstalled.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the identifier of a package.
 *
 * @type PackageId
 */
PackageInformation.prototype.id = new PackageId();

/**
 * An attribute to store the package name.
 *
 * @type String
 */
PackageInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of a package.
 * <p>
The icon path of the package is the same as the icon path of the relevant application
(see the <a href="application.html#ApplicationInformation::iconPath">iconPath</a> attribute of
the <a href="application.html#ApplicationInformation">ApplicationInformation</a> interface).
            </p>
 * <p>
The relevant application is the one with the same
<a href="application.html#ApplicationInformation::packageId">packageId</a> as the
<a href="#PackageInformation::id">id</a> of this package.
            </p>
 *
 * @type String
 */
PackageInformation.prototype.iconPath = new String();

/**
 * An attribute to store the package version.
 *
 * @type String
 */
PackageInformation.prototype.version = new String();

/**
 * An attribute to store the total installed size(package + data) of a package.
 *
 * @type Number
 */
PackageInformation.prototype.totalSize = new Number();

/**
 * An attribute to store the current data size of a package.
 *
 * @type Number
 */
PackageInformation.prototype.dataSize = new Number();

/**
 * An attribute to store the latest installed or updated time of a package.
 *
 * @type Date
 */
PackageInformation.prototype.lastModified = new Date();

/**
 * An attribute to store the author of a package.
 *
 * @type String
 */
PackageInformation.prototype.author = new String();

/**
 * An attribute to store the package description.
 *
 * @type String
 */
PackageInformation.prototype.description = new String();

/**
 * An attribute to store the application ID list of a package.
 *
 * @type array
 */
PackageInformation.prototype.appIds = new array();

/**
 * Installs a package with a specified file on a device.
            <p>
This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found at the specified location.              </li>
              <li>
UnknownError - If it is not allowed to install the package by the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} packageFileURI
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.install = function(packageFileURI, progressCallback, errorCallback){ return; };

/**
 * Uninstalls the package with a specified package ID.
            <p>
This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found with the specified ID.              </li>
              <li>
UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageId} id
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.uninstall = function(id, progressCallback, errorCallback){ return; };

/**
 * Gets information of the installed packages.
            <p>
The result contains the snapshots of the installed packages information.
            </p>
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.getPackagesInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets information of an installed package.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the package information of the current application.
The list of installed packages and their package IDs is obtained using <em>getPackagesInfo()</em>.
            </p>
           
 *
 * @param {PackageId} id
 * @type PackageInformation
 * @memberOf PackageManager
 * @returns {PackageInformation}
 */
PackageManager.prototype.getPackageInfo = function(id){ var ret = new PackageInformation(); return ret; };

/**
 * Sets a listener to receive notifications for any changes made to the list of installed packages.
            <p>
This method sets a <em>PackageInformationEventCallback</em> type callback that is triggered when a package is installed, removed, or updated.
            </p>
            <p>
The callback lasts until the <em>unsetPackageInfoEventListener()</em> method is called.
            </p>
           
 *
 * @param {PackageInformationEventCallback} eventCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.setPackageInfoEventListener = function(eventCallback){ return; };

/**
 * Unsets the listener to stop receiving package notifications.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.unsetPackageInfoEventListener = function(){ return; };

/**
 * Called while the request is in progress.
 *
 * @param {PackageId} id
 * @param {Number} progress
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * Called when the request is completed.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.oncomplete = function(id){ return; };

/**
 * Object representing a package manager.
 *
 * @type PackageManager
 */
Tizen.prototype.package = new PackageManager();

/**
 * The PlayerUtilManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the Player Util API.
 *
 * @super Object
 * @constructor
 * @return {PlayerUtilManagerObject}
 */
function PlayerUtilManagerObject() {};
PlayerUtilManagerObject.prototype = new Object();

/**
 * The PlayerUtilManager interface provides methods to manage the W3C Player features.
 *
 * @super Object
 * @constructor
 * @return {PlayerUtilManager}
 */
function PlayerUtilManager() {};
PlayerUtilManager.prototype = new Object();

/**
 * Object representing a player utilities manager.
 *
 * @type PlayerUtilManager
 */
PlayerUtilManagerObject.prototype.playerutil = new PlayerUtilManager();

/**
 * Gets the latency mode of the W3C Player.
 *
 * @type LatencyMode
 * @memberOf PlayerUtilManager
 * @returns {LatencyMode}
 */
PlayerUtilManager.prototype.getLatencyMode = function(){ var ret = new LatencyMode(); return ret; };

/**
 * Sets the latency mode of the W3C Player.
 *
 * @param {LatencyMode} mode
 * @type void
 * @memberOf PlayerUtilManager
 * @returns {void}
 */
PlayerUtilManager.prototype.setLatencyMode = function(mode){ return; };

/**
 * Object representing a player utilities manager.
 *
 * @type PlayerUtilManager
 */
Tizen.prototype.playerutil = new PlayerUtilManager();

/**
 * The ScreenStateChangeCallback callback interface defines notification for the screen state changes.
 *
 * @super Object
 * @constructor
 * @return {ScreenStateChangeCallback}
 */
function ScreenStateChangeCallback() {};
ScreenStateChangeCallback.prototype = new Object();

/**
 * The PowerManager interface is used to request resource states.
          <p>
However, these requests can be overridden by the system. If the requests are overridden, the application is notified with the provided listener callback.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManager}
 */
function PowerManager() {};
PowerManager.prototype = new Object();

/**
 * The PowerManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.power</em> object that allows accessing of a functionality of the Power API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManagerObject}
 */
function PowerManagerObject() {};
PowerManagerObject.prototype = new Object();

/**
 * Called on screen state change.
 *
 * @param {PowerScreenState} previousState
 * @param {PowerScreenState} changedState
 * @type void
 * @memberOf ScreenStateChangeCallback
 * @returns {void}
 */
ScreenStateChangeCallback.prototype.onchanged = function(previousState, changedState){ return; };

/**
 * Requests the minimum-state for a power resource.
 *
 * @param {PowerResource} resource
 * @param {PowerState} state
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.request = function(resource, state){ return; };

/**
 * Releases the power state request for the given resource.
 *
 * @param {PowerResource} resource
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.release = function(resource){ return; };

/**
 * Sets the screen state change callback and monitors its state changes.
 *
 * @param {ScreenStateChangeCallback} listener
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenStateChangeListener = function(listener){ return; };

/**
 * Unsets the screen state change callback and stop monitoring it.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.unsetScreenStateChangeListener = function(){ return; };

/**
 * Gets the screen brightness level of an application, from 0 to 1.
 *
 * @type Number
 * @memberOf PowerManager
 * @returns {Number}
 */
PowerManager.prototype.getScreenBrightness = function(){ var ret = new Number(); return ret; };

/**
 * Sets the screen brightness level, from 0 to 1.
            <p>
An approximation is made for best effort when the given value is not exactly applicable by the hardware or system.
            </p>
           
 *
 * @param {Number} brightness
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenBrightness = function(brightness){ return; };

/**
 * Checks whether the screen is on.
 *
 * @type Boolean
 * @memberOf PowerManager
 * @returns {Boolean}
 */
PowerManager.prototype.isScreenOn = function(){ var ret = new Boolean(); return ret; };

/**
 * Restores the screen brightness to the system default setting value.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.restoreScreenBrightness = function(){ return; };

/**
 * Turns on the screen.
            <p>
This API triggers turn-on process and then updates the status when it completes. While the operation is on-going, the isScreenOn() method returns false.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOn = function(){ return; };

/**
 * Turns off the screen.
            <p>
This API triggers turn-off process and then updates the status when it completes.
While the operation is on-going, the isScreenOn() method returns true.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOff = function(){ return; };

/**
 * Object representing a power manager.
 *
 * @type PowerManager
 */
PowerManagerObject.prototype.power = new PowerManager();

/**
 * Object representing a power manager.
 *
 * @type PowerManager
 */
Tizen.prototype.power = new PowerManager();

/**
 * This is the top-level interface for the Privacy Privilege API that manages permissions for using privileges in application.
 *
 * @super Object
 * @constructor
 * @return {PrivacyPrivilegeManager}
 */
function PrivacyPrivilegeManager() {};
PrivacyPrivilegeManager.prototype = new Object();

/**
 * This interface defines what is instantiated for the Privacy Privilege API by the object from the Tizen Platform.
          <p>
<em>tizen.ppm</em> object is available to manage the user permissions to use privacy-related privileges in your Web application.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PrivacyPrivilegeManagerObject}
 */
function PrivacyPrivilegeManagerObject() {};
PrivacyPrivilegeManagerObject.prototype = new Object();

/**
 * The PermissionRequestSuccessCallback interface implements the success callback used in the asynchronous operation of requesting permissions for using privilege.
 *
 * @super Object
 * @constructor
 * @return {PermissionRequestSuccessCallback}
 */
function PermissionRequestSuccessCallback() {};
PermissionRequestSuccessCallback.prototype = new Object();

/**
 * The PermissionSuccessCallback interface that implements the success callback used in the asynchronous operation for requesting permission for using privilege.
 *
 * @super Object
 * @constructor
 * @return {PermissionSuccessCallback}
 */
function PermissionSuccessCallback() {};
PermissionSuccessCallback.prototype = new Object();

/**
 * The PrivilegeStatus interface is an abstract interface for status of user permissions.
 *
 * @super Object
 * @constructor
 * @return {PrivilegeStatus}
 */
function PrivilegeStatus() {};
PrivilegeStatus.prototype = new Object();

/**
 * The RequestStatus interface is an abstract interface for status of user request permissions.
 *
 * @super Object
 * @constructor
 * @return {RequestStatus}
 */
function RequestStatus() {};
RequestStatus.prototype = new Object();

/**
 * Method allows checking current state of user's permission for using a privilege.
            <p>
For privileges not listed in application's <em>config.xml</em> file (or not privacy-related), always returns <var>PPM_DENY</var>.
            </p>
           
 *
 * @param {String} privilege
 * @type PermissionType
 * @memberOf PrivacyPrivilegeManager
 * @returns {PermissionType}
 */
PrivacyPrivilegeManager.prototype.checkPermission = function(privilege){ var ret = new PermissionType(); return ret; };

/**
 * Method allows checking current state of user's permission for using privileges.
            <p>
For privileges not listed in application's <em>config.xml</em> file (or not privacy-related), always returns <var>PPM_DENY</var>.
Maximum number of privileges that can be passed to array is 100.
            </p>
           
 *
 * @param {array} privileges
 * @type array
 * @memberOf PrivacyPrivilegeManager
 * @returns {array}
 */
PrivacyPrivilegeManager.prototype.checkPermissions = function(privileges){ var ret = new array(); return ret; };

/**
 * This method allows launching pop-up for asking user to directly grant permission for given privilege.
            <p>
Requesting permission for privileges not listed in application's <em>config.xml</em> file (or not privacy-related) will not trigger any pop-up,
instead the <em>successCallback</em> will be executed with <var>PPM_DENY_FOREVER</var>.
            </p>
            <p>
When the user has already decided to permanently allow or deny access to use a given privilege, subsequent calls of this function
will result in immediate invocation of <em>successCallback</em> with an appropriate result: <var>PPM_ALLOW_FOREVER</var> or <var>PPM_DENY_FOREVER</var>.
Additionally the asking pop-up will not be shown.
            </p>
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If any platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} privilege
 * @param {PermissionSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PrivacyPrivilegeManager
 * @returns {void}
 */
PrivacyPrivilegeManager.prototype.requestPermission = function(privilege, successCallback, errorCallback){ return; };

/**
 * This method allows launching pop-up for asking user to directly grant permission for given privileges.
            <p>
Requesting permission for privileges not listed in application's <em>config.xml</em> file (or not privacy-related) will not trigger any pop-up,
instead the <em>successCallback</em> will be executed with <var>PPM_DENY_FOREVER</var>.
            </p>
            <p>
When the user has already decided to permanently allow or deny access to use a given privilege, subsequent calls of this function
will result in immediate invocation of <em>successCallback</em> with an appropriate result: <var>PPM_ALLOW_FOREVER</var> or <var>PPM_DENY_FOREVER</var>.
Additionally the asking pop-up will not be shown.
            </p>
            <p>
Maximum number of privileges that can be passed to array is 100.
            </p>
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If any platform error occurs.              </li>
            </ul>
           
 *
 * @param {array} privileges
 * @param {PermissionRequestSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PrivacyPrivilegeManager
 * @returns {void}
 */
PrivacyPrivilegeManager.prototype.requestPermissions = function(privileges, successCallback, errorCallback){ return; };

/**
 * Object representing a privacy privilege manager.
 *
 * @type PrivacyPrivilegeManager
 */
PrivacyPrivilegeManagerObject.prototype.ppm = new PrivacyPrivilegeManager();

/**
 * Called when the permission for privileges was requested successfully.
 *
 * @param {array} result
 * @type void
 * @memberOf PermissionRequestSuccessCallback
 * @returns {void}
 */
PermissionRequestSuccessCallback.prototype.onsuccess = function(result){ return; };

/**
 * Called when the permission for using privilege was requested successfully.
 *
 * @param {PermissionRequestResult} result
 * @param {String} privilege
 * @type void
 * @memberOf PermissionSuccessCallback
 * @returns {void}
 */
PermissionSuccessCallback.prototype.onsuccess = function(result, privilege){ return; };

/**
 * Privilege which was checked against user's permission.
 *
 * @type String
 */
PrivilegeStatus.prototype.privilege = new String();

/**
 * State of user's permission for using specified privilege.
 *
 * @type PermissionType
 */
PrivilegeStatus.prototype.type = new PermissionType();

/**
 * The requested privilege.
 *
 * @type String
 */
RequestStatus.prototype.privilege = new String();

/**
 * Result of the action performed by user.
 *
 * @type PermissionRequestResult
 */
RequestStatus.prototype.result = new PermissionRequestResult();

/**
 * Object representing a privacy privilege manager.
 *
 * @type PrivacyPrivilegeManager
 */
Tizen.prototype.ppm = new PrivacyPrivilegeManager();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.preference</em> object provides access to the Preference service API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PreferenceManagerObject}
 */
function PreferenceManagerObject() {};
PreferenceManagerObject.prototype = new Object();

/**
 * The callback function to be used as a change listener for a preference with the given key.
 *
 * @super Object
 * @constructor
 * @return {PreferenceChangeCallback}
 */
function PreferenceChangeCallback() {};
PreferenceChangeCallback.prototype = new Object();

/**
 * The Preference API provides functions to store and retrieve small pieces of data which can be for application preferences.
 *
 * @super Object
 * @constructor
 * @return {PreferenceManager}
 */
function PreferenceManager() {};
PreferenceManager.prototype = new Object();

/**
 * The callback function used to get data of the all preferences.
 *
 * @super Object
 * @constructor
 * @return {PreferenceGetAllCallback}
 */
function PreferenceGetAllCallback() {};
PreferenceGetAllCallback.prototype = new Object();

/**
 * The PreferenceData interface stores data of application preferences.
 *
 * @super Object
 * @constructor
 * @return {PreferenceData}
 */
function PreferenceData() {};
PreferenceData.prototype = new Object();

/**
 * Object representing a preference manager.
 *
 * @type PreferenceManager
 */
PreferenceManagerObject.prototype.preference = new PreferenceManager();

/**
 * Called when the preference with the given key changed.
 *
 * @param {PreferenceData} data
 * @type void
 * @memberOf PreferenceChangeCallback
 * @returns {void}
 */
PreferenceChangeCallback.prototype.onsuccess = function(data){ return; };

/**
 * Gets all preferences data.
 *
 * @param {PreferenceGetAllCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.getAll = function(successCallback, errorCallback){ return; };

/**
 * Sets the preference value.
 *
 * @param {String} key
 * @param {PreferenceValueType} value
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.setValue = function(key, value){ return; };

/**
 * Gets a preference value.
 *
 * @param {String} key
 * @type PreferenceValueType
 * @memberOf PreferenceManager
 * @returns {PreferenceValueType}
 */
PreferenceManager.prototype.getValue = function(key){ var ret = new PreferenceValueType(); return ret; };

/**
 * Removes a value with the given key from the preferences.
 *
 * @param {String} key
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.remove = function(key){ return; };

/**
 * Removes all key-value pairs from the preferences.
 *
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.removeAll = function(){ return; };

/**
 * Checks whether the preference with given key exists.
 *
 * @param {String} key
 * @type Boolean
 * @memberOf PreferenceManager
 * @returns {Boolean}
 */
PreferenceManager.prototype.exists = function(key){ var ret = new Boolean(); return ret; };

/**
 * Sets the listener to receive notifications about changes of the preference value with the given key.
 *
 * @param {String} key
 * @param {PreferenceChangeCallback} listener
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.setChangeListener = function(key, listener){ return; };

/**
 * Unsets the listener, so stop receiving notifications about changes of the preference with the given key.
 *
 * @param {String} key
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.unsetChangeListener = function(key){ return; };

/**
 * Called with all preferences' data as an argument.
 *
 * @param {array} preferences
 * @type void
 * @memberOf PreferenceGetAllCallback
 * @returns {void}
 */
PreferenceGetAllCallback.prototype.onsuccess = function(preferences){ return; };

/**
 * The key name of the preferences data value.
 *
 * @type String
 */
PreferenceData.prototype.key = new String();

/**
 * The value associated with a given key.
 *
 * @type PreferenceValueType
 */
PreferenceData.prototype.value = new PreferenceValueType();

/**
 * Object representing a preference manager.
 *
 * @type PreferenceManager
 */
Tizen.prototype.preference = new PreferenceManager();

/**
 * The PushManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.push</em> object allows access to the functionality of the Push API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushManagerObject}
 */
function PushManagerObject() {};
PushManagerObject.prototype = new Object();

/**
 * The PushRegisterSuccessCallback interface specifies the success callback for a push service registration request.
          <p>
This success callback is invoked when a push service registration request is successful.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushRegisterSuccessCallback}
 */
function PushRegisterSuccessCallback() {};
PushRegisterSuccessCallback.prototype = new Object();

/**
 * The PushRegistrationStateChangeCallback interface specifies the state change callback for the state change event.
          <p>
This state change callback is invoked when the state of registration is changed.
Moreover PushRegistrationStateChangeCallback would be called at least once, just after connection is established.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushRegistrationStateChangeCallback}
 */
function PushRegistrationStateChangeCallback() {};
PushRegistrationStateChangeCallback.prototype = new Object();

/**
 * The PushNotificationCallback interface specifies the notification callback for the received push notification message.
          <p>
This notification callback is invoked when the push notification message arrives.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushNotificationCallback}
 */
function PushNotificationCallback() {};
PushNotificationCallback.prototype = new Object();

/**
 * The PushManager interface provides methods to manage push registration and notification.
 *
 * @super Object
 * @constructor
 * @return {PushManager}
 */
function PushManager() {};
PushManager.prototype = new Object();

/**
 * The PushMessage interface specifies the push message that is delivered from the push service.
 *
 * @super Object
 * @constructor
 * @return {PushMessage}
 */
function PushMessage() {};
PushMessage.prototype = new Object();

/**
 * Object representing a push manager.
 *
 * @type PushManager
 */
PushManagerObject.prototype.push = new PushManager();

/**
 * Called when a push service registration request is successful.
 *
 * @param {PushRegistrationId} id
 * @type void
 * @memberOf PushRegisterSuccessCallback
 * @returns {void}
 */
PushRegisterSuccessCallback.prototype.onsuccess = function(id){ return; };

/**
 * Called when the state of push registration is changed.
 *
 * @param {PushRegistrationState} state
 * @type void
 * @memberOf PushRegistrationStateChangeCallback
 * @returns {void}
 */
PushRegistrationStateChangeCallback.prototype.onsuccess = function(state){ return; };

/**
 * Called when the push notification message arrives.
 *
 * @param {PushMessage} message
 * @type void
 * @memberOf PushNotificationCallback
 * @returns {void}
 */
PushNotificationCallback.prototype.onsuccess = function(message){ return; };

/**
 * Registers an application to the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {PushRegisterSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.registerService = function(appControl, successCallback, errorCallback){ return; };

/**
 * Registers an application to the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError - If the operation timed out.              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
            <p>
The <em>connect()</em> method must be called before calling the <em>register()</em> method.
            </p>
           
 *
 * @param {PushRegisterSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.register = function(successCallback, errorCallback){ return; };

/**
 * Unregisters an application from the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.unregisterService = function(successCallback, errorCallback){ return; };

/**
 * Unregisters an application from the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError - If the operation timed out.              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * Connects to the push service and receives push notifications.
 *
 * @param {PushNotificationCallback} notificationCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.connectService = function(notificationCallback){ return; };

/**
 * Connects to the push service and gets state change events and push notifications.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {PushRegistrationStateChangeCallback} stateChangeCallback
 * @param {PushNotificationCallback} notificationCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.connect = function(stateChangeCallback, notificationCallback, errorCallback){ return; };

/**
 * Disconnects the push service and stops receiving push notifications.
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.disconnectService = function(){ return; };

/**
 * Disconnects the push service and stops receiving push notifications.
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.disconnect = function(){ return; };

/**
 * Gets the push service registration ID for this application if the registration process is successful. is returned if the application has not been registered yet.
 *
 * @type PushRegistrationId
 * @memberOf PushManager
 * @returns {PushRegistrationId}
 */
PushManager.prototype.getRegistrationId = function(){ var ret = new PushRegistrationId(); return ret; };

/**
 * Requests to get unread push notifications. As a consequence, the PushNotificationCallback which was set using the method will be invoked to retrieve the notifications.
            <p>
The connect() method must be called to connect to Tizen push server and receive push notifications before calling the getUnreadNotifications() method.
If connect() is not called, <var>ServiceNotAvailableError</var> occurs.<br/>If any unread message exists, you will get unread push notification message through <var>PushNotificationCallback</var> of connect().
For instance, if there are 10 unread messages, the <var>PushNotificationCallback</var> will be invoked 10 times.<br/><br/>If an application receives unread messages, the messages are removed from the system.
            </p>
            <p>
When an application registers with the push server to receive push notifications,
the push server stores messages for the application until they are delivered.
While the application is not running, messages cannot be delivered.
This method allows retrieving such missed push messages.
Once a missed push notification is retrieved the server deletes it from its database.
            </p>
           
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.getUnreadNotifications = function(){ return; };

/**
 * Gets push messages when the application is launched by the push service.
            <p>
If the application is launched by the push service, the push service is connected when the application is launched.
Therefore, you can get push messages without calling the <a href="push.html#PushManager::connect">connect()</a> function.
            </p>
            <p>
If the application was not launched by the push service, this method returns <var>null</var>.
            </p>
           
 *
 * @type PushMessage
 * @memberOf PushManager
 * @returns {PushMessage}
 */
PushManager.prototype.getPushMessage = function(){ var ret = new PushMessage(); return ret; };

/**
 * An attribute to store the push notification data.
 * <p>
This data is the message that the sender wants to send and its length must be less than 1 KB.
            </p>
 *
 * @type String
 */
PushMessage.prototype.appData = new String();

/**
 * An attribute to store the push notification message that may include an alert message to the user.
 *
 * @type String
 */
PushMessage.prototype.alertMessage = new String();

/**
 * An attribute to store the full push notification message.
 *
 * @type String
 */
PushMessage.prototype.message = new String();

/**
 * An attribute to store the date/time when a push notification message is received.
 *
 * @type Date
 */
PushMessage.prototype.date = new Date();

/**
 * The name of the sender of the notification.
 *
 * @type String
 */
PushMessage.prototype.sender = new String();

/**
 * The session information of the notification.
 *
 * @type String
 */
PushMessage.prototype.sessionInfo = new String();

/**
 * The request ID assigned by the sender.
 *
 * @type String
 */
PushMessage.prototype.requestId = new String();

/**
 * Object representing a push manager.
 *
 * @type PushManager
 */
Tizen.prototype.push = new PushManager();

/**
 * The SensorLightData interface represents light sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorLightData}
 */
function SensorLightData() {};
SensorLightData.prototype = new SensorData();

/**
 * The AccelerationSensor interface provides methods to access accelerometer data.
 *
 * @super Object
 * @constructor
 * @return {AccelerationSensor}
 */
function AccelerationSensor() {};
AccelerationSensor.prototype = new Sensor();

/**
 * The LightSensor interface provides methods to access light sensor data.
 *
 * @super Object
 * @constructor
 * @return {LightSensor}
 */
function LightSensor() {};
LightSensor.prototype = new Sensor();

/**
 * The SensorPressureData interface represents pressure sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorPressureData}
 */
function SensorPressureData() {};
SensorPressureData.prototype = new SensorData();

/**
 * The SensorGyroscopeRotationVectorData interface represents gyroscope rotation vector sensor data. You can refer to to learn more about gyroscope sensor data.
          <p>
A gyroscope rotation vector sensor data represents the orientation of the device as a combination of an angle and an axis when the device has rotated through an angle about an axis (X, Y, or Z).
It is equal to the components of a unit quaternion (cos(θ/2), x * sin(θ/2), y * sin(θ/2), z * sin(θ/2)).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SensorGyroscopeRotationVectorData}
 */
function SensorGyroscopeRotationVectorData() {};
SensorGyroscopeRotationVectorData.prototype = new SensorData();

/**
 * The SensorGyroscopeUncalibratedData interface represents uncalibrated gyroscope sensor data.
          <p>
The uncalibrated gyroscope sensor data represents the angular velocity of the device measured by the sensor and the stated measurement drift values.
          </p>
          <p>
Stated drift values are attached to the data, but the drift compensation of measurement results is not performed.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SensorGyroscopeUncalibratedData}
 */
function SensorGyroscopeUncalibratedData() {};
SensorGyroscopeUncalibratedData.prototype = new SensorData();

/**
 * The LinearAccelerationSensor interface provides methods to access linear acceleration sensor data.
 *
 * @super Object
 * @constructor
 * @return {LinearAccelerationSensor}
 */
function LinearAccelerationSensor() {};
LinearAccelerationSensor.prototype = new Sensor();

/**
 * The MagneticUncalibratedSensor interface provides methods to access uncalibrated magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {MagneticUncalibratedSensor}
 */
function MagneticUncalibratedSensor() {};
MagneticUncalibratedSensor.prototype = new Sensor();

/**
 * The GyroscopeSensor interface provides methods to access gyroscope sensor data.
 *
 * @super Object
 * @constructor
 * @return {GyroscopeSensor}
 */
function GyroscopeSensor() {};
GyroscopeSensor.prototype = new Sensor();

/**
 * The GyroscopeUncalibratedSensor interface provides methods to access uncalibrated gyroscope sensor data.
 *
 * @super Object
 * @constructor
 * @return {GyroscopeUncalibratedSensor}
 */
function GyroscopeUncalibratedSensor() {};
GyroscopeUncalibratedSensor.prototype = new Sensor();

/**
 * The ProximitySensor interface provides methods to access proximity sensor data.
 *
 * @super Object
 * @constructor
 * @return {ProximitySensor}
 */
function ProximitySensor() {};
ProximitySensor.prototype = new Sensor();

/**
 * The GyroscopeRotationVectorSensor interface provides methods to access gyroscope rotation vector sensor data.
 *
 * @super Object
 * @constructor
 * @return {GyroscopeRotationVectorSensor}
 */
function GyroscopeRotationVectorSensor() {};
GyroscopeRotationVectorSensor.prototype = new Sensor();

/**
 * The SensorDataSuccessCallback interface is a callback interface that is invoked periodically. For example, see the Sensor interface.
 *
 * @super Object
 * @constructor
 * @return {SensorDataSuccessCallback}
 */
function SensorDataSuccessCallback() {};
SensorDataSuccessCallback.prototype = new Object();

/**
 * The SensorGyroscopeData interface represents gyroscope sensor data. You can refer to to learn more about gyroscope sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorGyroscopeData}
 */
function SensorGyroscopeData() {};
SensorGyroscopeData.prototype = new SensorData();

/**
 * The UltravioletSensor interface provides methods to access ultraviolet sensor data.
 *
 * @super Object
 * @constructor
 * @return {UltravioletSensor}
 */
function UltravioletSensor() {};
UltravioletSensor.prototype = new Sensor();

/**
 * The HRMRawSensor interface provides methods to access HRM sensor raw data.
 *
 * @super Object
 * @constructor
 * @return {HRMRawSensor}
 */
function HRMRawSensor() {};
HRMRawSensor.prototype = new Sensor();

/**
 * The GravitySensor interface provides methods to access gravity sensor data.
 *
 * @super Object
 * @constructor
 * @return {GravitySensor}
 */
function GravitySensor() {};
GravitySensor.prototype = new Sensor();

/**
 * The SensorMagneticUncalibratedData interface represents uncalibrated magnetic sensor data.
          <p>
The uncalibrated magnetic sensor data represents the magnetic field measured by the sensor and the stated measurement bias.
          </p>
          <p>
Factory calibration and temperature compensation are applied to the measurement results. Stated measurement bias added by other factors is attached to the data, but the bias compensation of measurement results is not performed.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SensorMagneticUncalibratedData}
 */
function SensorMagneticUncalibratedData() {};
SensorMagneticUncalibratedData.prototype = new SensorData();

/**
 * The MagneticSensor interface provides methods to access magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {MagneticSensor}
 */
function MagneticSensor() {};
MagneticSensor.prototype = new Sensor();

/**
 * The SensorUltravioletData interface represents ultraviolet sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorUltravioletData}
 */
function SensorUltravioletData() {};
SensorUltravioletData.prototype = new SensorData();

/**
 * The SensorHardwareInfoSuccessCallback callback interface specifies a success callback with SensorHardwareInfo object as an input argument.
 *
 * @super Object
 * @constructor
 * @return {SensorHardwareInfoSuccessCallback}
 */
function SensorHardwareInfoSuccessCallback() {};
SensorHardwareInfoSuccessCallback.prototype = new Object();

/**
 * The SensorMagneticData interface represents magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorMagneticData}
 */
function SensorMagneticData() {};
SensorMagneticData.prototype = new SensorData();

/**
 * The SensorService interface provides methods to access the sensor.
 *
 * @super Object
 * @constructor
 * @return {SensorService}
 */
function SensorService() {};
SensorService.prototype = new Object();

/**
 * The SensorHRMRawData interface represents HRM sensor raw data.
 *
 * @super Object
 * @constructor
 * @return {SensorHRMRawData}
 */
function SensorHRMRawData() {};
SensorHRMRawData.prototype = new SensorData();

/**
 * The Sensor interface is a base interface for specific sensor interfaces. It provides methods common to all sensor types.
 *
 * @super Object
 * @constructor
 * @return {Sensor}
 */
function Sensor() {};
Sensor.prototype = new Object();

/**
 * The SensorData interface is a common abstract interface used by different types of sensor data objects.
 *
 * @super Object
 * @constructor
 * @return {SensorData}
 */
function SensorData() {};
SensorData.prototype = new Object();

/**
 * The SensorGravityData interface represents gravity sensor data. You can refer to to learn more about gravity sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorGravityData}
 */
function SensorGravityData() {};
SensorGravityData.prototype = new SensorData();

/**
 * The SensorAccelerationData interface represents acceleration sensor data. You can refer to to learn more about acceleration sensor data.
          <p>
The acceleration sensor data represents the sum of acceleration of the device and an acceleration component representing forces opposing the gravity.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SensorAccelerationData}
 */
function SensorAccelerationData() {};
SensorAccelerationData.prototype = new SensorData();

/**
 * The PressureSensor interface provides methods to access pressure sensor data.
 *
 * @super Object
 * @constructor
 * @return {PressureSensor}
 */
function PressureSensor() {};
PressureSensor.prototype = new Sensor();

/**
 * The SensorProximityData interface represents proximity sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorProximityData}
 */
function SensorProximityData() {};
SensorProximityData.prototype = new SensorData();

/**
 * The SensorServiceManagerObject interface defines what is instantiated by the object. The object allows access to various sensors of the Tizen device.
 *
 * @super Object
 * @constructor
 * @return {SensorServiceManagerObject}
 */
function SensorServiceManagerObject() {};
SensorServiceManagerObject.prototype = new Object();

/**
 * The SensorLinearAccelerationData interface represents linear acceleration sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorLinearAccelerationData}
 */
function SensorLinearAccelerationData() {};
SensorLinearAccelerationData.prototype = new SensorData();

/**
 * The SensorHardwareInfo interface represents information about the sensor requested by the method
 *
 * @super Object
 * @constructor
 * @return {SensorHardwareInfo}
 */
function SensorHardwareInfo() {};
SensorHardwareInfo.prototype = new Object();

/**
 * Ambient light level in lux.
 *
 * @type Number
 */
SensorLightData.prototype.lightLevel = new Number();

/**
 * Gets the current acceleration sensor data. You can refer to interface.
            <p>
Note that before calling the getAccelerationSensorData() method, the start() method should be called to turn the sensor on.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getAccelerationSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AccelerationSensor
 * @returns {void}
 */
AccelerationSensor.prototype.getAccelerationSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getLightSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getLightSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
UnknownError : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LightSensor
 * @returns {void}
 */
LightSensor.prototype.getLightSensorData = function(successCallback, errorCallback){ return; };

/**
 * Pressure in hectopascal (hPa).
 *
 * @type Number
 */
SensorPressureData.prototype.pressure = new Number();

/**
 * The X direction component of the rotation vector (x * sin(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.x = new Number();

/**
 * The Y direction component of the rotation vector (y * sin(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.y = new Number();

/**
 * The Z direction component of the rotation vector (z * sin(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.z = new Number();

/**
 * The scalar component of the rotation vector (cos(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.w = new Number();

/**
 * The result of measurement of angular velocity around the device's X axis, without measurement drift compensation, in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeUncalibratedData.prototype.x = new Number();

/**
 * The result of measurement of angular velocity around the device's Y axis, without measurement drift compensation, in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeUncalibratedData.prototype.y = new Number();

/**
 * The result of measurement of angular velocity around the device's Z axis, without measurement drift compensation, in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeUncalibratedData.prototype.z = new Number();

/**
 * Stated drift of angular velocity measurement result around the device's X axis, in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeUncalibratedData.prototype.xAxisDrift = new Number();

/**
 * Stated drift of angular velocity measurement result around the device's Y axis, in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeUncalibratedData.prototype.yAxisDrift = new Number();

/**
 * Stated drift of angular velocity measurement result around the device's Z axis, in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeUncalibratedData.prototype.zAxisDrift = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getLinearAccelerationSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getLinearAccelerationSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LinearAccelerationSensor
 * @returns {void}
 */
LinearAccelerationSensor.prototype.getLinearAccelerationSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getMagneticUncalibratedSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getMagneticUncalibratedSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MagneticUncalibratedSensor
 * @returns {void}
 */
MagneticUncalibratedSensor.prototype.getMagneticUncalibratedSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current gyroscope sensor data. You can refer to the interface.
            <p>
Note that before calling the getGyroscopeSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getGyroscopeSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GyroscopeSensor
 * @returns {void}
 */
GyroscopeSensor.prototype.getGyroscopeSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getGyroscopeUncalibratedSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getGyroscopeUncalibratedSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GyroscopeUncalibratedSensor
 * @returns {void}
 */
GyroscopeUncalibratedSensor.prototype.getGyroscopeUncalibratedSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getProximitySensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getProximitySensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
UnknownError : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ProximitySensor
 * @returns {void}
 */
ProximitySensor.prototype.getProximitySensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current gyroscope rotation vector sensor data. You can refer to the interface.
            <p>
Note that before calling the getGyroscopeRotationVectorSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getGyroscopeRotationVectorSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GyroscopeRotationVectorSensor
 * @returns {void}
 */
GyroscopeRotationVectorSensor.prototype.getGyroscopeRotationVectorSensorData = function(successCallback, errorCallback){ return; };

/**
 * Called periodically.
 *
 * @param {SensorData} sensorData
 * @type void
 * @memberOf SensorDataSuccessCallback
 * @returns {void}
 */
SensorDataSuccessCallback.prototype.onsuccess = function(sensorData){ return; };

/**
 * The angular velocity about the device's X axis in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeData.prototype.x = new Number();

/**
 * The angular velocity about the device's Y axis in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeData.prototype.y = new Number();

/**
 * The angular velocity about the device's Z axis in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeData.prototype.z = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getUltravioletSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getUltravioletSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
UnknownError : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf UltravioletSensor
 * @returns {void}
 */
UltravioletSensor.prototype.getUltravioletSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getHRMRawSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the getHRMRawSensorData method is called without calling the start method.              </li>
              <li>
UnknownError : An unknown error has occurred.              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HRMRawSensor
 * @returns {void}
 */
HRMRawSensor.prototype.getHRMRawSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current gravity sensor data. You can refer to the interface.
            <p>
Note that before calling the getGravitySensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getGravitySensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GravitySensor
 * @returns {void}
 */
GravitySensor.prototype.getGravitySensorData = function(successCallback, errorCallback){ return; };

/**
 * The result of measurement of magnetic field strength of the X axis, without measurement bias compensation, in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticUncalibratedData.prototype.x = new Number();

/**
 * The result of measurement of magnetic field strength of the Y axis, without measurement bias compensation, in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticUncalibratedData.prototype.y = new Number();

/**
 * The result of measurement of magnetic field strength of the Z axis, without measurement bias compensation, in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticUncalibratedData.prototype.z = new Number();

/**
 * Stated measurement bias of the value of magnetic field strength of the X axis in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticUncalibratedData.prototype.xAxisBias = new Number();

/**
 * Stated measurement bias of the value of magnetic field strength of the Y axis in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticUncalibratedData.prototype.yAxisBias = new Number();

/**
 * Stated measurement bias of the value of magnetic field strength of the Z axis in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticUncalibratedData.prototype.zAxisBias = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getMagneticSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getMagneticSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
UnknownError : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MagneticSensor
 * @returns {void}
 */
MagneticSensor.prototype.getMagneticSensorData = function(successCallback, errorCallback){ return; };

/**
 * Ultraviolet index.
 * <p>
The ultraviolet index is an international standard measurement of the strength of ultraviolet radiation from the sun. The <em>ultravioletLevel</em> ranges from 0 to 15.
            </p>
 *
 * @type Number
 */
SensorUltravioletData.prototype.ultravioletLevel = new Number();

/**
 * Called when sensor hardware information is successfully retrieved.
 *
 * @param {SensorHardwareInfo} hardwareInfo
 * @type void
 * @memberOf SensorHardwareInfoSuccessCallback
 * @returns {void}
 */
SensorHardwareInfoSuccessCallback.prototype.onsuccess = function(hardwareInfo){ return; };

/**
 * Ambient magnetic field of the X axis in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.x = new Number();

/**
 * Ambient magnetic field of the Y axis in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.y = new Number();

/**
 * Ambient magnetic field of the Z axis in microtesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.z = new Number();

/**
 * Accuracy of magnetic sensor data.
 * <p>
For increasing the accuracy, wave the device around in the air in figure-eight patterns.
            </p>
 *
 * @type MagneticSensorAccuracy
 */
SensorMagneticData.prototype.accuracy = new MagneticSensorAccuracy();

/**
 * Gets the default sensor of the device for the given sensor type.
            <p>
The supported sensor types are hardware-dependent. <br/><br/>To check if the given <var>type</var> is supported or not, System Info API can be used.
            </p>
            <ul>
              <li>
ACCELERATION - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.accelerometer"</em>)              </li>
              <li>
GRAVITY     - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gravity"</em>)              </li>
              <li>
GYROSCOPE   - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gyroscope"</em>)              </li>
              <li>
GYROSCOPE_ROTATION_VECTOR - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gyroscope_rotation_vector"</em>)              </li>
              <li>
GYROSCOPE_UNCALIBRATED - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gyroscope.uncalibrated"</em>)              </li>
              <li>
HRM_RAW     - HRM_RAW is supported, if at least one HRM LED sensor type is supported:<br/>tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.heart_rate_monitor.led_green"</em>),<br/>tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.heart_rate_monitor.led_ir"</em>),<br/>tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.heart_rate_monitor.led_red"</em>)              </li>
              <li>
LIGHT       - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.photometer"</em>)              </li>
              <li>
LINEAR_ACCELERATION - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.linear_acceleration"</em>)              </li>
              <li>
MAGNETIC    - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.magnetometer"</em>)              </li>
              <li>
MAGNETIC_UNCALIBRATED - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.magnetometer.uncalibrated"</em>)              </li>
              <li>
PRESSURE    - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.barometer"</em>)              </li>
              <li>
PROXIMITY   - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.proximity"</em>)              </li>
              <li>
ULTRAVIOLET - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.ultraviolet"</em>)              </li>
            </ul>
           
 *
 * @param {SensorType} type
 * @type Sensor
 * @memberOf SensorService
 * @returns {Sensor}
 */
SensorService.prototype.getDefaultSensor = function(type){ var ret = new Sensor(); return ret; };

/**
 * Gets the available sensor types.
 *
 * @type array
 * @memberOf SensorService
 * @returns {array}
 */
SensorService.prototype.getAvailableSensors = function(){ var ret = new array(); return ret; };

/**
 * HRM sensor light type.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>LED_IR - The infrared spectrum
 * <li>LED_RED - The red light spectrum
 * <li>LED_GREEN - The green light spectrum
 * </ul>
 *
 * @type String
 */
SensorHRMRawData.prototype.lightType = new String();

/**
 * HRM sensor light intensity measures the light intensity that is reflected from a blood vessel. The changes in the reported value represent blood volume changes in the microvascular bed of the tissue, and can be used to estimate heart rate.
 *
 * @type Number
 */
SensorHRMRawData.prototype.lightIntensity = new Number();

/**
 * Sensor type to monitor the changes.
 *
 * @type SensorType
 */
Sensor.prototype.sensorType = new SensorType();

/**
 * Starts the sensor.
            <p>
The <em>SuccessCallback</em> will be invoked when the first event from the sensor is fired.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - if the sensor is not supported on the device.              </li>
              <li>
UnknownError - if starting the sensor fails because of an unknown error.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.start = function(successCallback, errorCallback){ return; };

/**
 * Stops the sensor.
 *
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.stop = function(){ return; };

/**
 * Registers a listener to retrieve sensor data periodically.
            <p>
Note that the setChangeListener() method only registers the listener.
The start() method must be called to turn on the sensor, or the sensor data will not change.
            </p>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {Number} interval
 * @param {Number} batchLatency
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.setChangeListener = function(successCallback, interval, batchLatency){ return; };

/**
 * Unregisters the sensor data change listener.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.unsetChangeListener = function(){ return; };

/**
 * Gets hardware information of the sensor.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If operation failed.              </li>
              <li>
IOError - If the platform fails to internally prepare a socket for IPC communication.              </li>
            </ul>
           
 *
 * @param {SensorHardwareInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.getSensorHardwareInfo = function(successCallback, errorCallback){ return; };

/**
 * Value of the Earth's gravity in the device's X axis in m/s².The value can be between -9.8 and 9.8 inclusive.
 *
 * @type Number
 */
SensorGravityData.prototype.x = new Number();

/**
 * Value of the Earth's gravity in the device's Y axis in m/s².The value can be between -9.8 and 9.8 inclusive.
 *
 * @type Number
 */
SensorGravityData.prototype.y = new Number();

/**
 * Value of the Earth's gravity in the device's Z axis in m/s².The value can be between -9.8 and 9.8 inclusive.
 *
 * @type Number
 */
SensorGravityData.prototype.z = new Number();

/**
 * The result of acceleration sensor measurement in the device's X axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorAccelerationData.prototype.x = new Number();

/**
 * The result of acceleration sensor measurement in the device's Y axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorAccelerationData.prototype.y = new Number();

/**
 * The result of acceleration sensor measurement in the device's Z axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorAccelerationData.prototype.z = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that the start() method should be called before calling the getPressureSensorData() method to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
ServiceNotAvailableError : If the <em>getPressureSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
UnknownError : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PressureSensor
 * @returns {void}
 */
PressureSensor.prototype.getPressureSensorData = function(successCallback, errorCallback){ return; };

/**
 * Proximity state.
 *
 * @type ProximityState
 */
SensorProximityData.prototype.proximityState = new ProximityState();

/**
 * Object representing a sensor service.
 *
 * @type SensorService
 */
SensorServiceManagerObject.prototype.sensorservice = new SensorService();

/**
 * Value of the linear acceleration in the device's X axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorLinearAccelerationData.prototype.x = new Number();

/**
 * Value of the linear acceleration in the device's Y axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorLinearAccelerationData.prototype.y = new Number();

/**
 * Value of the linear acceleration in the device's Z axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorLinearAccelerationData.prototype.z = new Number();

/**
 * Name of the sensor.
 *
 * @type String
 */
SensorHardwareInfo.prototype.name = new String();

/**
 * .
 *
 * @type SensorType
 */
SensorHardwareInfo.prototype.type = new SensorType();

/**
 * Vendor of the sensor.
 *
 * @type String
 */
SensorHardwareInfo.prototype.vendor = new String();

/**
 * Minimum reading value that can be received from the sensor.The units for the minimum value depends on the sensor type:
 * <ul>
 * <li>ACCELERATION - m/s (meters per second squared)
 * <li>GRAVITY - m/s (meters per second squared)
 * <li>GYROSCOPE - °/s (Degrees/s)
 * <li>GYROSCOPE_ROTATION_VECTOR - None
 * <li>GYROSCOPE_UNCALIBRATED - °/s (Degrees/s)
 * <li>HRM_RAW - None
 * <li>LIGHT - lux
 * <li>LINEAR_ACCELERATION - m/s (meters per second squared)
 * <li>MAGNETIC - μT (microtesla)
 * <li>MAGNETIC_UNCALIBRATED - μT (microtesla)
 * <li>PRESSURE - hPa (hectopascal)
 * <li>PROXIMITY - None
 * <li>ULTRAVIOLET - UV index (ultraviolet index)
 * </ul>
 * <p>
For more information about sensor, see <a href="/application/web/guides/sensors/device-sensors">Sensor Guide</a>.
            </p>
 *
 * @type Number
 */
SensorHardwareInfo.prototype.minValue = new Number();

/**
 * Maximum reading value that can be received from the sensor.The units for the maximum value depends on the sensor type:
 * <ul>
 * <li>ACCELERATION - m/s (meters per second squared)
 * <li>GRAVITY - m/s (meters per second squared)
 * <li>GYROSCOPE - °/s (Degrees/s)
 * <li>GYROSCOPE_ROTATION_VECTOR - None
 * <li>GYROSCOPE_UNCALIBRATED - °/s (Degrees/s)
 * <li>HRM_RAW - None
 * <li>LIGHT - lux
 * <li>LINEAR_ACCELERATION - m/s (meters per second squared)
 * <li>MAGNETIC - μT (microtesla)
 * <li>MAGNETIC_UNCALIBRATED - μT (microtesla)
 * <li>PRESSURE - hPa (hectopascal)
 * <li>PROXIMITY - None
 * <li>ULTRAVIOLET - UV index (ultraviolet index)
 * </ul>
 * <p>
For more information about sensor, see <a href="/application/web/guides/sensors/device-sensors">Sensor Guide</a>.
            </p>
 *
 * @type Number
 */
SensorHardwareInfo.prototype.maxValue = new Number();

/**
 * The smallest change which the sensor can detect.The units of the resolution depends on the sensor type:
 * <ul>
 * <li>ACCELERATION - m/s (meters per second squared)
 * <li>GRAVITY - m/s (meters per second squared)
 * <li>GYROSCOPE - °/s (Degrees/s)
 * <li>GYROSCOPE_ROTATION_VECTOR - None
 * <li>GYROSCOPE_UNCALIBRATED - °/s (Degrees/s)
 * <li>HRM_RAW - None
 * <li>LIGHT - lux
 * <li>LINEAR_ACCELERATION - m/s (meters per second squared)
 * <li>MAGNETIC - μT (microtesla)
 * <li>MAGNETIC_UNCALIBRATED - μT (microtesla)
 * <li>PRESSURE - hPa (hectopascal)
 * <li>PROXIMITY - None
 * <li>ULTRAVIOLET - UV index (ultraviolet index)
 * </ul>
 * <p>
For more information about sensor, see <a href="/application/web/guides/sensors/device-sensors">Sensor Guide</a>.
            </p>
 *
 * @type Number
 */
SensorHardwareInfo.prototype.resolution = new Number();

/**
 * Minimum interval of the sensor which means a period between two events.
 *
 * @type Number
 */
SensorHardwareInfo.prototype.minInterval = new Number();

/**
 * Maximum batch count of sensor, batch means storing a sensors event in a hardware FIFO register when processor stay on sleep or suspend status.
 *
 * @type Number
 */
SensorHardwareInfo.prototype.maxBatchCount = new Number();

/**
 * Object representing a sensor service.
 *
 * @type SensorService
 */
Tizen.prototype.sensorservice = new SensorService();

/**
 * The TransmitSuccessCallback interface specifies the success callback that is invoked when completes successfully.
          <p>
This callback interface specifies a success method with an array of bytes as an input parameter. It is used in <em>Channel.transmit()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TransmitSuccessCallback}
 */
function TransmitSuccessCallback() {};
TransmitSuccessCallback.prototype = new Object();

/**
 * The ChannelSuccessCallback interface specifies the success callback that is invoked when a channel is open to communicate with a specific applet.
          <p>
This callback interface specifies a success method with a <em>Channel</em> object as an input parameter.
It is used in asynchronous operations such as <em>Session.openBasicChannel()</em> or <em>Session.openLogicalChannel()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ChannelSuccessCallback}
 */
function ChannelSuccessCallback() {};
ChannelSuccessCallback.prototype = new Object();

/**
 * The Channel interface is open to a Secure Element and offers methods to send Application Protocol Data Units(APDU) to the Secure Element. The channel is defined in the ISO7816-4.
 *
 * @super Object
 * @constructor
 * @return {Channel}
 */
function Channel() {};
Channel.prototype = new Object();

/**
 * The Session interface is connected to one of the readers and offers methods to control channels in a session.
 *
 * @super Object
 * @constructor
 * @return {Session}
 */
function Session() {};
Session.prototype = new Object();

/**
 * The SEServiceManagerObject interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.seService</em> object allows access to the functionality of the Secure Element API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEServiceManagerObject}
 */
function SEServiceManagerObject() {};
SEServiceManagerObject.prototype = new Object();

/**
 * The ReaderArraySuccessCallback callback interface provides a success callback that is invoked when a list of available Secure Element readers is retrieved.
          <p>
It specifies a success method with an array of <em>Reader</em> objects as an input parameter.
It is used in asynchronous operations such as <em>SEService.getReaders()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReaderArraySuccessCallback}
 */
function ReaderArraySuccessCallback() {};
ReaderArraySuccessCallback.prototype = new Object();

/**
 * The SEChangeListener interface provides the success callback that is invoked when a Secure Element reader is detected or lost.
          <p>
It is used in <em>SEService.registerSEListener()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEChangeListener}
 */
function SEChangeListener() {};
SEChangeListener.prototype = new Object();

/**
 * The SessionSuccessCallback interface specifies the success callback that is invoked when a session on a specific reader is open.
          <p>
This callback interface specifies a success method with a <em>Session</em> object as an input parameter.
It is used in asynchronous operations such as <em>Reader.openSession()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SessionSuccessCallback}
 */
function SessionSuccessCallback() {};
SessionSuccessCallback.prototype = new Object();

/**
 * The SEService interface provides access to the available Secure Element readers.
          <p>
It provides access to the API functionalities through the <em>tizen.seService</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEService}
 */
function SEService() {};
SEService.prototype = new Object();

/**
 * The Reader interface that is connected to this device.
          <p>
This interface offers methods to control sessions on the reader.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Reader}
 */
function Reader() {};
Reader.prototype = new Object();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} response
 * @type void
 * @memberOf TransmitSuccessCallback
 * @returns {void}
 */
TransmitSuccessCallback.prototype.onsuccess = function(response){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Channel} channel
 * @type void
 * @memberOf ChannelSuccessCallback
 * @returns {void}
 */
ChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * Boolean value that indicates whether it is a basic channel.
 *
 * @type Boolean
 */
Channel.prototype.isBasicChannel = new Boolean();

/**
 * Closes a channel.
 *
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.close = function(){ return; };

/**
 * Transmits an APDU command to a Secure Element. The APDU command is defined in ISO7816-4.
            <p>
Some commands that are not allowed to be sent are:
            </p>
            <ul>
              <li>
MANAGE_CHANNEL commands.              </li>
              <li>
SELECT by DF Name (p1=04).              </li>
              <li>
The commands that CLA bytes with channel numbers are de-masked.              </li>
            </ul>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If the command contain an invalid value.              </li>
              <li>
IOError - An error occurred while communicating with the Secure Element in the reader.              </li>
              <li>
SecurityError - If the command is not allowed.              </li>
              <li>
InvalidStateError - If this channel is closed.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} command
 * @param {TransmitSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.transmit = function(command, successCallback, errorCallback){ return; };

/**
 * Gets the data as received from the application select command including the status words.
            <p>
When opening a channel, when an applet ID of secure element is selected,
a response is generated to the select command. This method retrieves the response.
            </p>
            <p>
The return value is a byte array containing the data bytes in the following order:
            </p>
            <p>
[&lt;first data byte&gt;, ..., &lt;last data byte&gt;, &lt;status word1&gt;, &lt;status word2&gt;]
            </p>
            <ul>
              <li>
Only the status words are returned if the application select command has no returned data.              </li>
              <li>
Null if an application select command has not been performed or
the selection response can not be retrieved by the reader implementation.              </li>
            </ul>
           
 *
 * @type array
 * @memberOf Channel
 * @returns {array}
 */
Channel.prototype.getSelectResponse = function(){ var ret = new array(); return ret; };

/**
 * Boolean value that indicates whether a session is closed.
 *
 * @type Boolean
 */
Session.prototype.isClosed = new Boolean();

/**
 * Opens a basic channel in a session. The basic channel (defined in the ISO7816-4 specification) is opened by default and its channel ID is . Once this channel has been opened by an application, it is considered to be "locked" to other applications, and they cannot open any channel, until the basic channel is closed. Some Secure Elements might always deny opening a basic channel.
            <p>
The optional select response data of an applet can be retrieved with byte[] getSelectResponse().
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
SecurityError - If access to this AID or the default application on this session is not allowed .              </li>
              <li>
InvalidStateError - If this session is closed.              </li>
              <li>
NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
NoChannelError - If basic channel is unavailable.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openBasicChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Opens a logical channel in a session by the specified applet ID. The logical channel is defined in the ISO7816-4 specification.
            <p>
The optional select response data of an applet can be retrieved with byte[] getSelectResponse().
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
SecurityError - If access to this AID or the default application in this session is not allowed.              </li>
              <li>
InvalidStateError - If this session is closed.              </li>
              <li>
NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
NoChannelError - If logical channel is unavailable.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openLogicalChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Gets the answer to reset(ATR) of a Secure Element.
 *
 * @type array
 * @memberOf Session
 * @returns {array}
 */
Session.prototype.getATR = function(){ var ret = new array(); return ret; };

/**
 * Closes a session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.close = function(){ return; };

/**
 * Closes all channels on this session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.closeChannels = function(){ return; };

/**
 * Object representing a secure element service manager.
 *
 * @type SEService
 */
SEServiceManagerObject.prototype.seService = new SEService();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} readers
 * @type void
 * @memberOf ReaderArraySuccessCallback
 * @returns {void}
 */
ReaderArraySuccessCallback.prototype.onsuccess = function(readers){ return; };

/**
 * Called when a Secure Element reader is detected.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSEReady = function(reader){ return; };

/**
 * Called when a Secure Element reader is lost.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSENotReady = function(reader){ return; };

/**
 * Called when a Secure Element reader has an error.
 *
 * @param {Reader} reader
 * @param {WebAPIError} error
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSEError = function(reader, error){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Session} session
 * @type void
 * @memberOf SessionSuccessCallback
 * @returns {void}
 */
SessionSuccessCallback.prototype.onsuccess = function(session){ return; };

/**
 * Gets all the available Secure Element readers.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If any error occurs during retrieval.              </li>
            </ul>
           
 *
 * @param {ReaderArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.getReaders = function(successCallback, errorCallback){ return; };

/**
 * Registers a callback function that is invoked when an available Secure Element reader is detected.
 *
 * @param {SEChangeListener} listener
 * @type Number
 * @memberOf SEService
 * @returns {Number}
 */
SEService.prototype.registerSEListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener from notifying any detection of an available Secure Element reader.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} id
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.unregisterSEListener = function(id){ return; };

/**
 * Shuts down Secure Elements after releasing all resources.
 *
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.shutdown = function(){ return; };

/**
 * Boolean value that indicates whether a Secure Element is present on a reader.
 *
 * @type Boolean
 */
Reader.prototype.isPresent = new Boolean();

/**
 * Gets the reader's name.
 *
 * @type String
 * @memberOf Reader
 * @returns {String}
 */
Reader.prototype.getName = function(){ var ret = new String(); return ret; };

/**
 * Opens a session on a reader.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - An error occurred in communication with the Secure Element in this reader.              </li>
              <li>
InvalidStateError - If a Secure Element is not present on this reader.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SessionSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.openSession = function(successCallback, errorCallback){ return; };

/**
 * Closes all sessions opened on a reader.
 *
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.closeSessions = function(){ return; };

/**
 * Object representing a secure element service manager.
 *
 * @type SEService
 */
Tizen.prototype.seService = new SEService();

/**
 * The SoundVolumeChangeCallback interface specifies a volume change callback for getting notified about the volume changes.
 *
 * @super Object
 * @constructor
 * @return {SoundVolumeChangeCallback}
 */
function SoundVolumeChangeCallback() {};
SoundVolumeChangeCallback.prototype = new Object();

/**
 * The SoundManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.sound object that allows accessing the functionality of the Sound API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SoundManagerObject}
 */
function SoundManagerObject() {};
SoundManagerObject.prototype = new Object();

/**
 * The SoundManager interface provides the functionalities to control the volume level.
 *
 * @super Object
 * @constructor
 * @return {SoundManager}
 */
function SoundManager() {};
SoundManager.prototype = new Object();

/**
 * The SoundDeviceInfo interface specifies the information about a sound device.
 *
 * @super Object
 * @constructor
 * @return {SoundDeviceInfo}
 */
function SoundDeviceInfo() {};
SoundDeviceInfo.prototype = new Object();

/**
 * The SoundDeviceStateChangeCallback interface specifies a sound device type change callback for getting notified when the sound device state changes.
 *
 * @super Object
 * @constructor
 * @return {SoundDeviceStateChangeCallback}
 */
function SoundDeviceStateChangeCallback() {};
SoundDeviceStateChangeCallback.prototype = new Object();

/**
 * The SoundModeChangeCallback interface specifies a mode change callback for getting notified about the sound mode changes.
 *
 * @super Object
 * @constructor
 * @return {SoundModeChangeCallback}
 */
function SoundModeChangeCallback() {};
SoundModeChangeCallback.prototype = new Object();

/**
 * Called when the volume level has changed.
 *
 * @param {SoundType} type
 * @param {Number} volume
 * @type void
 * @memberOf SoundVolumeChangeCallback
 * @returns {void}
 */
SoundVolumeChangeCallback.prototype.onsuccess = function(type, volume){ return; };

/**
 * Object representing a sound manager.
 *
 * @type SoundManager
 */
SoundManagerObject.prototype.sound = new SoundManager();

/**
 * Gets the current sound mode.
 *
 * @type SoundModeType
 * @memberOf SoundManager
 * @returns {SoundModeType}
 */
SoundManager.prototype.getSoundMode = function(){ var ret = new SoundModeType(); return ret; };

/**
 * Sets the volume level for a specified sound type.
 *
 * @param {SoundType} type
 * @param {Number} volume
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setVolume = function(type, volume){ return; };

/**
 * Gets the current volume level for a specified sound type.
 *
 * @param {SoundType} type
 * @type Number
 * @memberOf SoundManager
 * @returns {Number}
 */
SoundManager.prototype.getVolume = function(type){ var ret = new Number(); return ret; };

/**
 * Registers a listener to be called when the sound mode is changed.
 *
 * @param {SoundModeChangeCallback} callback
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setSoundModeChangeListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification about the sound mode change.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.unsetSoundModeChangeListener = function(){ return; };

/**
 * Registers a listener to be called when the volume level is changed.
 *
 * @param {SoundVolumeChangeCallback} callback
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setVolumeChangeListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification when the volume level is changed.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.unsetVolumeChangeListener = function(){ return; };

/**
 * Gets a list of connected sound devices.
 *
 * @type array
 * @memberOf SoundManager
 * @returns {array}
 */
SoundManager.prototype.getConnectedDeviceList = function(){ var ret = new array(); return ret; };

/**
 * Gets a list of activated sound devices.
 *
 * @type array
 * @memberOf SoundManager
 * @returns {array}
 */
SoundManager.prototype.getActivatedDeviceList = function(){ var ret = new array(); return ret; };

/**
 * Registers a listener that is to be called when the sound device state is changed.
            <p>
There are two types of device state changes:
            </p>
            <ul>
              <li>
Connectivity: When a device changes from being connected to being disconnected or from being disconnected to being connected.              </li>
              <li>
Activation: When a device changes from being activated to being deactivated or from being deactivated to being activated.              </li>
            </ul>
           
 *
 * @param {SoundDeviceStateChangeCallback} callback
 * @type Number
 * @memberOf SoundManager
 * @returns {Number}
 */
SoundManager.prototype.addDeviceStateChangeListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notifications when the sound device state is changed.
 *
 * @param {Number} id
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.removeDeviceStateChangeListener = function(id){ return; };

/**
 * The sound device ID
 *
 * @type Number
 */
SoundDeviceInfo.prototype.id = new Number();

/**
 * The sound device name
 *
 * @type String
 */
SoundDeviceInfo.prototype.name = new String();

/**
 * The sound device type
 *
 * @type SoundDeviceType
 */
SoundDeviceInfo.prototype.device = new SoundDeviceType();

/**
 * The sound device I/O type
 *
 * @type SoundIOType
 */
SoundDeviceInfo.prototype.direction = new SoundIOType();

/**
 * True if the sound device state is connected
 *
 * @type Boolean
 */
SoundDeviceInfo.prototype.isConnected = new Boolean();

/**
 * True if the sound device state is activated
 *
 * @type Boolean
 */
SoundDeviceInfo.prototype.isActivated = new Boolean();

/**
 * Method invoked when the sound device state changes.
 *
 * @param {SoundDeviceInfo} info
 * @type void
 * @memberOf SoundDeviceStateChangeCallback
 * @returns {void}
 */
SoundDeviceStateChangeCallback.prototype.onchanged = function(info){ return; };

/**
 * Called when the sound mode has changed.
 *
 * @param {SoundModeType} mode
 * @type void
 * @memberOf SoundModeChangeCallback
 * @returns {void}
 */
SoundModeChangeCallback.prototype.onsuccess = function(mode){ return; };

/**
 * Object representing a sound manager.
 *
 * @type SoundManager
 */
Tizen.prototype.sound = new SoundManager();

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceOrientation}
 */
function SystemInfoDeviceOrientation() {};
SystemInfoDeviceOrientation.prototype = new SystemInfoProperty();

/**
 * This property reflects the locale information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoLocale}
 */
function SystemInfoLocale() {};
SystemInfoLocale.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBuild}
 */
function SystemInfoBuild() {};
SystemInfoBuild.prototype = new SystemInfoProperty();

/**
 * This property reflects the state of the CPUs available to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCpu}
 */
function SystemInfoCpu() {};
SystemInfoCpu.prototype = new SystemInfoProperty();

/**
 * This property exposes the data storage devices connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorage}
 */
function SystemInfoStorage() {};
SystemInfoStorage.prototype = new SystemInfoProperty();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a tizen.systeminfo object that allows accessing the
functionality of the System Information API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoObject}
 */
function SystemInfoObject() {};
SystemInfoObject.prototype = new Object();

/**
 * SystemInfoDeviceCapability object.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceCapability}
 */
function SystemInfoDeviceCapability() {};
SystemInfoDeviceCapability.prototype = new Object();

/**
 * This property reflects the general state of the system's battery.
          <p>
<b>Listener notice</b>:
          </p>
          <p>
Change listener registered on <var>BATTERY</var> property is triggered on
<em>level</em> and <em>isCharging</em> properties change.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBattery}
 */
function SystemInfoBattery() {};
SystemInfoBattery.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Wi-Fi network in this system.
          <p>
<b>Listener notice</b>:
          </p>
          <p>
Change listener registered on <var>WIFI_NETWORK</var> property is triggered on
<em>ipAddress</em> and <em>ipv6Address</em> properties change (the network layer).
Those changes could be not consistent with physical layer (<em>status</em> or
<em>signalStrength</em> of physical adapter).
          </p>
          <p>
According to above constraints, in specific situation the listener could be
triggered just before network adapter shutdown and the value of <em>status</em> returned
by listener would be outdated.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoWifiNetwork}
 */
function SystemInfoWifiNetwork() {};
SystemInfoWifiNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the peripheral information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPeripheral}
 */
function SystemInfoPeripheral() {};
SystemInfoPeripheral.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the net_proxy network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetProxyNetwork}
 */
function SystemInfoNetProxyNetwork() {};
SystemInfoNetProxyNetwork.prototype = new SystemInfoProperty();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous operations, such as <a href="#SystemInfo::getPropertyValueArray">getPropertyValueArray()</a> or <a href="#SystemInfo::addPropertyValueArrayChangeListener">addPropertyValueArrayChangeListener()</a>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertyArraySuccessCallback}
 */
function SystemInfoPropertyArraySuccessCallback() {};
SystemInfoPropertyArraySuccessCallback.prototype = new Object();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous
operations, such as <a href="#SystemInfo::getPropertyValue">getPropertyValue()</a> or <a href="#SystemInfo::addPropertyValueChangeListener">addPropertyValueChangeListener()</a>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertySuccessCallback}
 */
function SystemInfoPropertySuccessCallback() {};
SystemInfoPropertySuccessCallback.prototype = new Object();

/**
 * This property reflects the information of the Display.
          <p>
<b>Listener notice</b>:
          </p>
          <p>
Change listener registered on <var>DISPLAY</var> property is triggered on
<em>brightness</em> property change.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDisplay}
 */
function SystemInfoDisplay() {};
SystemInfoDisplay.prototype = new SystemInfoProperty();

/**
 * The SystemInfoCameraFlash provides the way to control the attached the camera flash.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCameraFlash}
 */
function SystemInfoCameraFlash() {};
SystemInfoCameraFlash.prototype = new SystemInfoProperty();

/**
 * This entry interface queries the information of a system.
          <p>
This API offers methods for retrieving system information
and for subscribing notifications of system information changes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfo}
 */
function SystemInfo() {};
SystemInfo.prototype = new Object();

/**
 * This property reflects the information of the SIM card information.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoSIM}
 */
function SystemInfoSIM() {};
SystemInfoSIM.prototype = new SystemInfoProperty();

/**
 * This is a common abstract interface used by different types of system information objects.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoProperty}
 */
function SystemInfoProperty() {};
SystemInfoProperty.prototype = new Object();

/**
 * This property reflects the information of the Ethernet network in this system.
          <p>
<b>Listener notice</b>:
          </p>
          <p>
Change listener registered on <var>ETHERNET_NETWORK</var> property is triggered on
<em>ipAddress</em> and <em>ipv6Address</em> properties change (the network layer).
Those changes could be not consistent with physical layer (<em>status</em> of physical adapter).
          </p>
          <p>
According to above constraints, in specific situation the listener could be
triggered just before network adapter shutdown and the value of <em>status</em> returned
by listener would be outdated.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoEthernetNetwork}
 */
function SystemInfoEthernetNetwork() {};
SystemInfoEthernetNetwork.prototype = new SystemInfoProperty();

/**
 * This property represents information about the memory state on the device system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoMemory}
 */
function SystemInfoMemory() {};
SystemInfoMemory.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Cellular network in this system.
          <p>
<b>Listener notice</b>:
          </p>
          <p>
Change listener registered on <var>CELLULAR_NETWORK</var> property is triggered on
<em>ipAddress</em>, <em>ipv6Address</em> (the network layer), <em>cellId</em>,
<em>lac</em> and <em>isFlightMode</em> properties change.
Those changes could be not consistent with physical layer (<em>status</em> of physical adapter).
          </p>
          <p>
According to above constraints, in specific situation the listener could be
triggered just before network adapter shutdown and the value of <em>status</em> returned
by listener would be outdated.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCellularNetwork}
 */
function SystemInfoCellularNetwork() {};
SystemInfoCellularNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the data network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetwork}
 */
function SystemInfoNetwork() {};
SystemInfoNetwork.prototype = new SystemInfoProperty();

/**
 * This property represents information about advertisement service - ADS.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoADS}
 */
function SystemInfoADS() {};
SystemInfoADS.prototype = new SystemInfoProperty();

/**
 * This property exposes a single storage device connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorageUnit}
 */
function SystemInfoStorageUnit() {};
SystemInfoStorageUnit.prototype = new SystemInfoProperty();

/**
 * Represents the status of the current device orientation.
 *
 * @type SystemInfoDeviceOrientationStatus
 */
SystemInfoDeviceOrientation.prototype.status = new SystemInfoDeviceOrientationStatus();

/**
 * Indicates whether the device is in autorotation.
 *
 * @type Boolean
 */
SystemInfoDeviceOrientation.prototype.isAutoRotation = new Boolean();

/**
 * Indicates the current language setting in the (LANGUAGE)_(REGION) syntax.
 * <p>
The language setting is in the ISO 639-2 format and the region setting is in the ISO 3166-1 alpha-2 format.
The language setting is case-sensitive.
            </p>
 *
 * @type String
 */
SystemInfoLocale.prototype.language = new String();

/**
 * Indicates the current country setting in the (LANGUAGE)_(REGION) syntax.
 * <p>
The language setting is in the ISO 639-2 format and the region setting is in the ISO 3166-1 alpha-2 format.
The country setting is case-sensitive.
            </p>
 *
 * @type String
 */
SystemInfoLocale.prototype.country = new String();

/**
 * Represents the model name of the current device.
 *
 * @type String
 */
SystemInfoBuild.prototype.model = new String();

/**
 * Represents the manufacturer of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.manufacturer = new String();

/**
 * Represents the build version information of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.buildVersion = new String();

/**
 * An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system.
 * <p>
Any threshold parameter used in a watch function to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoCpu.prototype.load = new Number();

/**
 * The array of storage units connected to this device.
 *
 * @type array
 */
SystemInfoStorage.prototype.units = new array();

/**
 * Object representing a system info module.
 *
 * @type SystemInfo
 */
SystemInfoObject.prototype.systeminfo = new SystemInfo();

/**
 * Indicates whether the device supports Bluetooth.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.bluetooth = new Boolean();

/**
 * Indicates whether the device supports NFC.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfc = new Boolean();

/**
 * Indicates whether the device supports NFC reserved push.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfcReservedPush = new Boolean();

/**
 * The number of point in Multi-point touch.
 *
 * @type Number
 */
SystemInfoDeviceCapability.prototype.multiTouchCount = new Number();

/**
 * Indicates whether the device supports the built-in keyboard.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboard = new Boolean();

/**
 * Indicates whether the device supports the built-in keyboard layout.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboardLayout = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifi = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi Direct.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifiDirect = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.opengles = new Boolean();

/**
 * The device 3DC texture format for OpenGL-ES.
 * <p>
One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.openglestextureFormat = new String();

/**
 * Indicates whether the device supports OpenGL-ES version 1.1.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion1_1 = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES version 2.0.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion2_0 = new Boolean();

/**
 * Indicates whether the device supports FM radio.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.fmRadio = new Boolean();

/**
 * The version of the platform in the format.
 * <p>
For example, <var>1.0.0</var> represents a platform version where the major version is <var>1</var> and the minor and build versions are <var>0</var>.
<em>[Patch Version]</em> is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
Manufacturers may add more parts (dot followed by number or text) after the preserved format.
If a version is not versioned as [Major].[Minor].[Patch Version], the unused digits must be taken as <var>0</var>.
So for example, version <var>2.3</var> is <var>2.3.0</var> and manufacturers must add parts after <var>2.3.0</var> such as <var>2.3.0.1</var>.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformVersion = new String();

/**
 * The version of the Web API in the format.
 * <p>
For example, <var>1.0.0</var> represents a Web API version where the major version is <var>1</var> and the minor and build versions are <var>0</var>.
<em>[Patch Version]</em> is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
Manufacturers may add more parts (dot followed by number or text) after the preserved format.
If a version is not versioned as [Major].[Minor].[Patch Version], the unused digits must be taken as <var>0</var>.
So for example, version <var>2.3</var> is <var>2.3.0</var> and manufacturers must add parts after <var>2.3.0</var> such as <var>2.3.0.1</var>.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.webApiVersion = new String();

/**
 * The version of the Native API in the format.
 * <p>
For example, <var>1.0.0</var> represents a Native API version where the major version is <var>1</var> and the minor and build versions are <var>0</var>.
<em>[Patch Version]</em> is optional. The Tizen platform strictly follows this versioning system and this format must be preserved.
Manufacturers may add more parts (dot followed by number or text) after the preserved format.
If a version is not versioned as [Major].[Minor].[Patch Version], the unused digits must be taken as <var>0</var>.
So for example, version <var>2.3</var> is <var>2.3.0</var> and manufacturers must add parts after <var>2.3.0</var> such as <var>2.3.0.1</var>.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.nativeApiVersion = new String();

/**
 * The name of the platform.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformName = new String();

/**
 * Indicates whether the device supports camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.camera = new Boolean();

/**
 * Indicates whether the device supports front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFront = new Boolean();

/**
 * Indicates whether the device supports flash on the front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFrontFlash = new Boolean();

/**
 * Indicates whether the device supports back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBack = new Boolean();

/**
 * Indicates whether the device supports flash on the back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBackFlash = new Boolean();

/**
 * Indicates whether the device supports GPS or not.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.location = new Boolean();

/**
 * Indicates whether the device supports GPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationGps = new Boolean();

/**
 * Indicates whether the device supports WPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationWps = new Boolean();

/**
 * Indicates whether the device supports microphone.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.microphone = new Boolean();

/**
 * Indicates whether the device supports USB host.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbHost = new Boolean();

/**
 * Indicates whether the device supports USB accessory.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbAccessory = new Boolean();

/**
 * Indicates whether the device supports RCA output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputRca = new Boolean();

/**
 * Indicates whether the device supports HDMI output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputHdmi = new Boolean();

/**
 * The device CPU architecture.
 * <p>
The possible values for this attribute are: <var>armv6</var>, <var>armv7</var>, <var>x86</var>.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreCpuArch = new String();

/**
 * The device FPU architecture.
 * <p>
The possible values for this attribute are: <var>vfpv3</var>, <var>sse2</var>, <var>sse3</var> and <var>ssse3</var>.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreFpuArch = new String();

/**
 * Indicates whether the device supports VOIP.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.sipVoip = new Boolean();

/**
 * Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.duid = new String();

/**
 * Indicates whether the device supports speech recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechRecognition = new Boolean();

/**
 * Indicates whether the device supports speech synthesis.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechSynthesis = new Boolean();

/**
 * Indicates whether the device supports accelerometer.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometer = new Boolean();

/**
 * Indicates whether the device supports accelerometer wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometerWakeup = new Boolean();

/**
 * Indicates whether the device supports barometer.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometer = new Boolean();

/**
 * Indicates whether the device supports barometer wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometerWakeup = new Boolean();

/**
 * Indicates whether the device supports gyroscope.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscope = new Boolean();

/**
 * Indicates whether the device supports gyroscope wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscopeWakeup = new Boolean();

/**
 * Indicates whether the device supports magnetometer.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometer = new Boolean();

/**
 * Indicates whether the device supports magnetometer wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometerWakeup = new Boolean();

/**
 * Indicates whether the device supports photometer.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometer = new Boolean();

/**
 * Indicates whether the device supports photometer wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometerWakeup = new Boolean();

/**
 * Indicates whether the device supports proximity.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximity = new Boolean();

/**
 * Indicates whether the device supports proximity wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximityWakeup = new Boolean();

/**
 * Indicates whether the device supports tiltmeter.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeter = new Boolean();

/**
 * Indicates whether the device supports tiltmeter wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeterWakeup = new Boolean();

/**
 * Indicates whether the device supports data encryption.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.dataEncryption = new Boolean();

/**
 * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.graphicsAcceleration = new Boolean();

/**
 * Indicates whether the device supports push service.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.push = new Boolean();

/**
 * Indicates whether the device supports the telephony feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephony = new Boolean();

/**
 * Indicates whether the device supports the MMS feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonyMms = new Boolean();

/**
 * Indicates whether the device supports the SMS feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonySms = new Boolean();

/**
 * Indicates whether the device supports the screen normal size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSizeNormal = new Boolean();

/**
 * Indicates whether the device supports the 480 * 800 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize480_800 = new Boolean();

/**
 * Indicates whether the device supports the 720 * 1280 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize720_1280 = new Boolean();

/**
 * Indicates whether the device supports auto rotation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.autoRotation = new Boolean();

/**
 * Indicates whether the device supports shell app widget (dynamic box).
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.shellAppWidget = new Boolean();

/**
 * Indicates whether the device supports vision image recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionImageRecognition = new Boolean();

/**
 * Indicates whether the device supports vision QR code generation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeGeneration = new Boolean();

/**
 * Indicates whether the device supports vision QR code recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeRecognition = new Boolean();

/**
 * Indicates whether the device supports vision face recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionFaceRecognition = new Boolean();

/**
 * Indicates whether the device supports secure element.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.secureElement = new Boolean();

/**
 * Indicates whether the device supports native OSP API.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nativeOspCompatible = new Boolean();

/**
 * Represents the profile of the current device.
 *
 * @type SystemInfoProfile
 */
SystemInfoDeviceCapability.prototype.profile = new SystemInfoProfile();

/**
 * An attribute to specify the remaining level of an internal battery, scaled from to :
 * <ul>
 * <li>indicates that the battery level is the lowest and the system is about to enter shutdown mode.
 * <li>indicates that the system's charge is maximum.
 * </ul>
 * <p>
Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.level = new Number();

/**
 * Indicates whether the battery source is currently charging.
 *
 * @type Boolean
 */
SystemInfoBattery.prototype.isCharging = new Boolean();

/**
 * Estimated time to discharge, in minutes.
 * <p>
This parameter is mutually exclusive with parameter <em>timeToFullCharge</em>.
An attribute <em>timeToDischarge</em> becomes <var>null</var> when device is plugged.
            </p>
 * <p>
This attribute may equal to <var>-1</var> indicating there is no enough collected data, which means
that the device is still learning device's power usage characteristics and cannot predict the time yet.
This process may take up to few days.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.timeToDischarge = new Number();

/**
 * Estimated time to finish charging battery, in minutes.
 * <p>
This parameter is mutually exclusive with parameter <em>timeToDischarge</em>.
An attribute <em>timeToFullCharge</em> becomes <var>null</var> when device is unplugged.
            </p>
 * <p>
This attribute may equal to <var>-1</var> indicating there is no enough collected data, which means
that the device is still learning device's power usage characteristics and cannot predict the time yet.
This process may take up to few days.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.timeToFullCharge = new Number();

/**
 * Represents the status (ON or OFF) of the Wi-Fi interface.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.status = new String();

/**
 * Represents the SSID of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ssid = new String();

/**
 * Represents the IPv4 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipv6Address = new String();

/**
 * Represents the MAC address of the Wi-Fi interface.
 * <p>
It is written in MM:MM:MM:SS:SS:SS format.
            </p>
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.macAddress = new String();

/**
 * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
 *
 * @type Number
 */
SystemInfoWifiNetwork.prototype.signalStrength = new Number();

/**
 * Represents the video out status.
 *
 * @type Boolean
 */
SystemInfoPeripheral.prototype.isVideoOutputOn = new Boolean();

/**
 * Represents the status (ON or OFF) of the net_proxy network.
 *
 * @type String
 */
SystemInfoNetProxyNetwork.prototype.status = new String();

/**
 * Function invoked when the asynchronous call completes successfully.
 *
 * @param {array} properties
 * @type void
 * @memberOf SystemInfoPropertyArraySuccessCallback
 * @returns {void}
 */
SystemInfoPropertyArraySuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Function invoked when the asynchronous call completes successfully.
 *
 * @param {SystemInfoProperty} property
 * @type void
 * @memberOf SystemInfoPropertySuccessCallback
 * @returns {void}
 */
SystemInfoPropertySuccessCallback.prototype.onsuccess = function(property){ return; };

/**
 * The total number of addressable pixels in the horizontal direction of a rectangular entity (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionWidth = new Number();

/**
 * The total number of addressable pixels in the vertical direction of a rectangular element (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionHeight = new Number();

/**
 * Resolution of this device, along its width, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchWidth = new Number();

/**
 * Resolution of this device, along its height, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchHeight = new Number();

/**
 * The display's physical width in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalWidth = new Number();

/**
 * The display's physical height in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalHeight = new Number();

/**
 * The current brightness of a display ranging between to .
 *
 * @type Number
 */
SystemInfoDisplay.prototype.brightness = new Number();

/**
 * Brightness level of the camera flash (0~1).
 *
 * @type Number
 */
SystemInfoCameraFlash.prototype.brightness = new Number();

/**
 * Specifies camera to which this flash belongs.
 * <ul>
 * <li>BACK - back camera flash
 * <li>FRONT - front camera flash
 * <li>EXTERNAL - external camera flash
 * <li>OTHER - a flash attached to any other camera
 * </ul>
 * <p>
The <a href="#SystemInfo::getPropertyValue">getPropertyValue()</a> method retrieves the <var>SystemInfoCameraFlash</var> for <var>BACK</var> camera.
            </p>
 *
 * @type String
 */
SystemInfoCameraFlash.prototype.camera = new String();

/**
 * Number of brightness levels supported by the flash (other than 0 brightness).
 *
 * @type Number
 */
SystemInfoCameraFlash.prototype.levels = new Number();

/**
 * Sets the brightness value of the flash that is located next to the camera.
            <p>
If the specified brightness value is not supported by the device, the brightness is rounded down to the nearest supported brightness value.
            </p>
           
 *
 * @param {Number} brightness
 * @type void
 * @memberOf SystemInfoCameraFlash
 * @returns {void}
 */
SystemInfoCameraFlash.prototype.setBrightness = function(brightness){ return; };

/**
 * Gets the total amount of system memory (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getTotalMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the amount of memory that is not in use (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getAvailableMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the capabilities of the device.
            <p>
The function must synchronously acquire the capabilities of the device.
            </p>
           
 *
 * @type SystemInfoDeviceCapability
 * @memberOf SystemInfo
 * @returns {SystemInfoDeviceCapability}
 */
SystemInfo.prototype.getCapabilities = function(){ var ret = new SystemInfoDeviceCapability(); return ret; };

/**
 * Gets a device capability related to a given key.
            <p>
See the available <a href="./systeminfo_capability_keys.html">device capability keys</a>.
The additional keys for the custom device capability are specified by OEMs and vendors.
            </p>
           
 *
 * @param {String} key
 * @type any
 * @memberOf SystemInfo
 * @returns {any}
 */
SystemInfo.prototype.getCapability = function(key){ var ret = new any(); return ret; };

/**
 * Gets the number of system property information provided for a particular system property.
            <p>
That is the length of array retrieved by the <a href="#SystemInfo::getPropertyValueArray">getPropertyValueArray()</a> method for the given property.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getCount = function(property){ var ret = new Number(); return ret; };

/**
 * Gets the current value of a specified system property.
            <p>
The function must asynchronously acquire the current value of the requested property. If it is successful,
the successCallback must be invoked with an object containing the information provided by the property.
            </p>
            <p>
The <em>ErrorCallback</em> function can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported (since Tizen 2.3).              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValue = function(property, successCallback, errorCallback){ return; };

/**
 * Gets the current values of a specified system property.
            <p>
It is recommended that you check if a device provides one or more than one value for a particular system property via <a href="#SystemInfo::getCount">getCount()</a>.
            </p>
            <p>
If one particular system property is provided on a device, it returns an array containing one SystemInfoProperty object through <em>SystemInfoPropertyArraySuccessCallback</em> method.<br/>If more than one particular system property is provided, multiple SystemInfoProperty objects are returned.
            </p>
            <p>
The <em>ErrorCallback</em> function can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported.              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValueArray = function(property, successCallback, errorCallback){ return; };

/**
 * Adds a listener to allow tracking changes in one or more system properties.
            <p>
When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
            </p>
            <p>
1. Register the successCallback to receive system events that the status of the requested properties may have changed.
            </p>
            <p>
2. When a system event is successfully received, invoke the associated successCallback with an object containing the property
values.
            </p>
            <p>
3. Repeat step 2 until removePropertyValueChangeListener function is called.
            </p>
            <p>
There are device properties which are never changed (e.g. "BUILD") and properties which are not changed on some devices
(e.g. "DEVICE_ORIENTATION" in Tizen TV device). The <a href="#SystemInfo::addPropertyValueChangeListener">addPropertyValueChangeListener()</a> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
            <p>
The <em>errorCallback</em> can be launched with any of these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported (since Tizen 2.3).<br/>For example, monitoring <var>CELLULAR_NETWORK</var> changes is not supported on a device which does not support the telephony feature.
              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Adds a listener to allow tracking of changes in one or more values of a system property.
            <p>
The <em>ErrorCallback</em> function can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported (since Tizen 2.3).<br/>For example, monitoring <var>CELLULAR_NETWORK</var> changes is not supported on a device which does not support the telephony feature.
              </li>
            </ul>
            <p>
There are device properties which never change (for example "BUILD") and properties which do not change on the current platform
(for example "DEVICE_ORIENTATION" for some platforms). The <a href="#SystemInfo::addPropertyValueChangeListener">addPropertyValueChangeListener()</a> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueArrayChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes notifications for property changes.
            <p>
If a valid listenerId argument is passed that corresponds to an existing subscription,
then the watch process must immediately terminate and no further
callback is invoked.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.removePropertyValueChangeListener = function(listenerId){ return; };

/**
 * Represents the SIM card state.
 *
 * @type SystemInfoSimState
 */
SystemInfoSIM.prototype.state = new SystemInfoSimState();

/**
 * Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.operatorName = new String();

/**
 * Represents the SIM card subscriber number.
 *
 * @type String
 */
SystemInfoSIM.prototype.msisdn = new String();

/**
 * Represents the Integrated Circuit Card ID.
 *
 * @type String
 */
SystemInfoSIM.prototype.iccid = new String();

/**
 * Represents the Mobile Country Code (MCC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mcc = new Number();

/**
 * Represents the Mobile Network Code (MNC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mnc = new Number();

/**
 * Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
 *
 * @type String
 */
SystemInfoSIM.prototype.msin = new String();

/**
 * Represents the Service Provider Name (SPN) of SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.spn = new String();

/**
 * Represents the cable status (ATTACHED or DETACHED) of the Ethernet interface.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.cable = new String();

/**
 * Represents the status (DEACTIVATED, DISCONNECTED or CONNECTED) of the Ethernet interface.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.status = new String();

/**
 * Represents the IPv4 address of the Ethernet network.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the Ethernet network.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.ipv6Address = new String();

/**
 * Represents the MAC address of the Ethernet interface.
 * <p>
It is written in MM:MM:MM:SS:SS:SS format.
            </p>
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.macAddress = new String();

/**
 * Represents the low memory state.
 *
 * @type SystemInfoLowMemoryStatus
 */
SystemInfoMemory.prototype.status = new SystemInfoLowMemoryStatus();

/**
 * Represents the status (ON or OFF) of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.status = new String();

/**
 * Represents an Access Point Name of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.apn = new String();

/**
 * Represents the IPv4 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipv6Address = new String();

/**
 * Represents Mobile Country Code (MCC) of the cellular network.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mcc = new Number();

/**
 * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mnc = new Number();

/**
 * Represents Cell ID.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.cellId = new Number();

/**
 * Represents Location Area Code.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.lac = new Number();

/**
 * Indicates whether the connection is set up while the device is roaming.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isRoaming = new Boolean();

/**
 * Indicates whether the device is in flight mode.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isFlightMode = new Boolean();

/**
 * Represents the International Mobile Equipment Identity (IMEI).
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.imei = new String();

/**
 * Represents the network type of the current data network.
 *
 * @type SystemInfoNetworkType
 */
SystemInfoNetwork.prototype.networkType = new SystemInfoNetworkType();

/**
 * Represents the unique id of advertisement service. It is used to distinguish each device.
 *
 * @type String
 */
SystemInfoADS.prototype.id = new String();

/**
 * The type of a storage device. The value is one of the constants defined for this type.
 * <p>
The supported storage unit types are:
            </p>
 * <ul>
 * <li>UNKNOWN
 * <li>INTERNAL
 * <li>USB_DEVICE
 * <li>USB_HOST
 * <li>MMC
 * </ul>
 *
 * @type String
 */
SystemInfoStorageUnit.prototype.type = new String();

/**
 * The total amount of space available on the user's storage (excluding system-reserved), in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.capacity = new Number();

/**
 * The amount of space currently available on the user's storage, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.availableCapacity = new Number();

/**
 * An attribute to indicate whether a device can be removed or not.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>- If this storage unit can be removed from the system (such as an sdcard unplugged)
 * <li>- If this storage unit cannot be removed from the system
 * </ul>
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemovable = new Boolean();

/**
 * True if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemoveable = new Boolean();

/**
 * Object representing a system info module.
 *
 * @type SystemInfo
 */
Tizen.prototype.systeminfo = new SystemInfo();

/**
 * The SystemSettingManager interface is the top-level interface for the System Setting API that provides access to the module functionalities.
 *
 * @super Object
 * @constructor
 * @return {SystemSettingManager}
 */
function SystemSettingManager() {};
SystemSettingManager.prototype = new Object();

/**
 * The SystemSettingSuccessCallback interface defines the success callback for getProperty().
 *
 * @super Object
 * @constructor
 * @return {SystemSettingSuccessCallback}
 */
function SystemSettingSuccessCallback() {};
SystemSettingSuccessCallback.prototype = new Object();

/**
 * The SystemSettingObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.systemsetting</em> object that allows accessing the functionality of the System Setting API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemSettingObject}
 */
function SystemSettingObject() {};
SystemSettingObject.prototype = new Object();

/**
 * Sets the property of a device.
            <p>
This method allows the user to set the image or sound file specified as an input parameter as the wallpaper or ringtone of a device.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
NotSupportedError - If the given <var>type</var> is not supported on the device              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SystemSettingType} type
 * @param {String} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.setProperty = function(type, value, successCallback, errorCallback){ return; };

/**
 * Gets the value of the property of a device.
            <p>
This method allows the user to get the value of the specified system property as wallpaper or ringtone of a device.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
TypeMismatchError - If any input parameter is not compatible with the expected type for that parameter              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
NotSupportedError - If the given <var>type</var> is not supported on the device              </li>
              <li>
SecurityError - If the application does not have privilege to access the storage. For more information, see <a href="#StorageRemark">Storage privileges</a>.              </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SystemSettingType} type
 * @param {SystemSettingSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.getProperty = function(type, successCallback, errorCallback){ return; };

/**
 * Called when the value of the system setting property is successfully retrieved.
 *
 * @param {String} value
 * @type void
 * @memberOf SystemSettingSuccessCallback
 * @returns {void}
 */
SystemSettingSuccessCallback.prototype.onsuccess = function(value){ return; };

/**
 * Object representing a system settings manager.
 *
 * @type SystemSettingManager
 */
SystemSettingObject.prototype.systemsetting = new SystemSettingManager();

/**
 * Object representing a system settings manager.
 *
 * @type SystemSettingManager
 */
Tizen.prototype.systemsetting = new SystemSettingManager();

/**
 * The TimeManagerObject interface defines what is instantiated in the tizen object by the Tizen Platform.
          <p>
There will be a <em>tizen.time</em> object that allows accessing the
functionality of the Time API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TimeManagerObject}
 */
function TimeManagerObject() {};
TimeManagerObject.prototype = new Object();

/**
 * The TimeUtil interface that provides access to the time API.
          <p>
This interface offers methods to manage date/time as well as timezones such as:
          </p>
          <ul>
            <li>
Get the current date/time using getCurrentDateTime().            </li>
            <li>
Get timezones using getLocalTimezone() and getAvailableTimezones().            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {TimeUtil}
 */
function TimeUtil() {};
TimeUtil.prototype = new Object();

/**
 * The TZDate interface represents information regarding a given date/time in a predefined timezone. If its date/time exceeds the platform limit, TZDate will be invalid.
 *
 * @super Object
 * @constructor
 * @return {TZDate}
 */
function TZDate() {};
TZDate.prototype = new Object();

/**
 * The TimeDuration interface that contains the length and its associated time unit.
 *
 * @super Object
 * @constructor
 * @return {TimeDuration}
 */
function TimeDuration() {};
TimeDuration.prototype = new Object();

/**
 * Object representing a time manager.
 *
 * @type TimeUtil
 */
TimeManagerObject.prototype.time = new TimeUtil();

/**
 * Gets the current date/time.
 *
 * @type TZDate
 * @memberOf TimeUtil
 * @returns {TZDate}
 */
TimeUtil.prototype.getCurrentDateTime = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the identifier of the local system timezone.
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getLocalTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets synchronously the identifiers of the timezones supported by the device.
            <p>
Zero or more slashes separate different components of a timezone identifier,
with the most general descriptor first and the most specific one last. For example,
"Europe/Berlin", "America/Argentina/Buenos_Aires".
            </p>
           
 *
 * @type array
 * @memberOf TimeUtil
 * @returns {array}
 */
TimeUtil.prototype.getAvailableTimezones = function(){ var ret = new array(); return ret; };

/**
 * Gets the date format according to the system's locale settings.
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"d" = day number (1 to 31)              </li>
              <li>
"D" = day name              </li>
              <li>
"m" = month number (1 to 12)              </li>
              <li>
"M" = month name              </li>
              <li>
"y" = year              </li>
            </ul>
            <p>
Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
            </p>
           
 *
 * @param {Boolean} shortformat
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getDateFormat = function(shortformat){ var ret = new String(); return ret; };

/**
 * Gets the time format according to the system's locale settings.
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"h" = hours (0 to 23 or 1 to 12 if AM/PM display)              </li>
              <li>
"m" = minutes (0 to 59)              </li>
              <li>
"s" = seconds (0 to 59)              </li>
              <li>
"ap" = AM/PM display              </li>
            </ul>
            <p>
Examples of string formats include: "h:m:s ap", "h:m:s".
            </p>
           
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getTimeFormat = function(){ var ret = new String(); return ret; };

/**
 * Checks whether the given year is a leap year.
 *
 * @param {Number} year
 * @type Boolean
 * @memberOf TimeUtil
 * @returns {Boolean}
 */
TimeUtil.prototype.isLeapYear = function(year){ var ret = new Boolean(); return ret; };

/**
 * Sets a listener to receive notification of changes to the time/date on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time was set by the user. <br/>            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setDateTimeChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time/date on a device.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetDateTimeChangeListener = function(){ return; };

/**
 * Sets a listener to receive notification of changes to the time zone on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time zone has changed.
            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setTimezoneChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time zone on a device.
            <p>
Calling this function has no effect if listener is not set.
            </p>
           
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetTimezoneChangeListener = function(){ return; };

/**
 * Gets the day of the month (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month (from 1-31).
            <p>
If the value passed as a parameter is greater than the last day of current month or smaller than 1, the TZDate will be automatically recalculated to reflect this.
For example, if TZDate's month is May and parameter is 32, it will be set to June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setDate = function(date){ return; };

/**
 * Gets the day of the week (from 0-6). 0 denotes Sunday, 1 denotes Monday and so on.
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setFullYear = function(year){ return; };

/**
 * Gets the hour (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour (0-23).
            <p>
If the value passed as a parameter is greater than 23 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setHours(24) results in setting hour to 00:00 and date to the next day.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setHours = function(hours){ return; };

/**
 * Gets the milliseconds (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds (from 0-999).
            <p>
If the value passed as a parameter is greater than 999 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setMilliseconds(1000) results in setting milliseconds to 0 and adding one second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMilliseconds = function(ms){ return; };

/**
 * Gets the minutes (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes.
            <p>
If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setMinutes(60) results in setting minutes to 0 and adding one hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMinutes = function(minutes){ return; };

/**
 * Gets the month (from 0-11). Note: January is denoted as 0, February as 1, and so on till December, which is denoted as 11.
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month (from 0-11).
            <p>
If the value passed as a parameter is greater than 11 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setMonth(12) results in setting month to 0 and adding one year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMonth = function(month){ return; };

/**
 * Gets the seconds (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds (from 0-59).
            <p>
If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setSeconds(60) results in setting seconds to 0 and adding one minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setSeconds = function(seconds){ return; };

/**
 * Gets the day of the month, according to universal time (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month, according to universal time (from 1-31).
            <p>
If the value passed as a parameter is greater than the last day of current month or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setUTCDate(32) when TZDate's month is May results in setting it to June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCDate = function(date){ return; };

/**
 * Gets the day of the week, according to universal time (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year, according to universal time.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year, according to universal time.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCFullYear = function(year){ return; };

/**
 * Gets the hour, according to universal time (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour, according to universal time (0-23).
            <p>
If the value passed as a parameter is greater than 23 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setUTCHours(24) results in setting hour to 0 and adding one day.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCHours = function(hours){ return; };

/**
 * Gets the milliseconds, according to universal time (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds, according to universal time (from 0-999).
            <p>
If the value passed as a parameter is greater than 999 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setUTCMilliseconds(1000) results in setting milliseconds to 0 and adding one second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMilliseconds = function(ms){ return; };

/**
 * Gets the minutes, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes, according to universal time (from 0-59).
            <p>
If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setUTCMinutes(60) results in setting minutes to 0 and adding one hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMinutes = function(minutes){ return; };

/**
 * Gets the month, according to universal time (from 0-11). Note: January is denoted as 0, February as 1 and so on till December, which is denoted as 11.
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month, according to universal time (from 0-11).
            <p>
If the value passed as a parameter is greater than 11 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setUTCMonth(12) results in setting month to 0 and adding one year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMonth = function(month){ return; };

/**
 * Gets the seconds, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds, according to universal time (from 0-59).
            <p>
If the value passed as a parameter is greater than 59 or smaller than 0, the TZDate will be automatically recalculated to reflect this.
For example, calling setUTCSeconds(60) results in setting seconds to 0 and adding one minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCSeconds = function(seconds){ return; };

/**
 * Gets the timezone identifier.
            <p>
Zero or more slashes separate different components, with the most general
descriptor first and the most specific one last. For example,
"Europe/Berlin", "America/Argentina/Buenos_Aires".
            </p>
            <p>
This attribute uniquely identifies the timezone.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets a copy of the TZDate converted to a given time zone.
 *
 * @param {String} tzid
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toTimezone = function(tzid){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to the local time zone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toLocalTimezone = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toUTC = function(){ var ret = new TZDate(); return ret; };

/**
 * Calculates the difference with another TZDate object.
            <p>
Calculates the difference in time between <em>this</em> and the other object.
This comparison method takes timezones into consideration for the comparison.
            </p>
            <p>
The TimeDuration that is returned is effectively <em>this</em> - other.
The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
The result value will be:
            </p>
            <ul>
              <li>
Negative, if other is in the future              </li>
              <li>
0 if the two date/times are equal              </li>
              <li>
Positive, if other is in the past              </li>
            </ul>
           
 *
 * @param {TZDate} other
 * @type TimeDuration
 * @memberOf TZDate
 * @returns {TimeDuration}
 */
TZDate.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TZDate is equal to another.
            <p>
This method takes the timezones into consideration and will return <var>true</var> if
the two TZDate objects represent the same instant in different timezones.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is earlier than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.earlierThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is later than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.laterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Gets a new date by adding a duration to the current TZDate object.
            <p>
If the length of duration is negative, the new date/time will be
earlier than it used to.
            </p>
            <p>
Note that calling this method does not alter the current object.
            </p>
           
 *
 * @param {TimeDuration} duration
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.addDuration = function(duration){ var ret = new TZDate(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleString = function(){ var ret = new String(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * Determines the time zone abbreviation to be used at a particular date in the time zone.
            <p>
For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
summer months when daylight savings time is in effect.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezoneAbbreviation = function(){ var ret = new String(); return ret; };

/**
 * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
            <p>
Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
savings if it is in the timezone. For example, if time zone is GMT+8, it will return -32,400.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.secondsFromUTC = function(){ var ret = new Number(); return ret; };

/**
 * Checks whether Daylight Saving Time(DST) is active for this TZDate.
            <p>
Indicates if daylight savings are in effect for the time zone and instant
identified by the TZDate object.
            </p>
           
 *
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.isDST = function(){ var ret = new Boolean(); return ret; };

/**
 * Gets the date of the previous daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getPreviousDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the date of the next daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getNextDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * The duration length.
 * <p>
The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
is determined by the duration unit attribute.
            </p>
 *
 * @type Number
 */
TimeDuration.prototype.length = new Number();

/**
 * The duration unit (milliseconds, seconds, minutes, hours, or days).
 * <p>
The default value is "MSECS" (milliseconds unit).
            </p>
 *
 * @type TimeDurationUnit
 */
TimeDuration.prototype.unit = new TimeDurationUnit();

/**
 * Calculates the difference between two TimeDuration objects.
            <p>
Calculates the difference in time between <em>this</em> and <em>other</em>.
The TimeDuration that is returned is effectively <em>first</em> - <em>other</em> (that is: positive if the first parameter is larger).
            </p>
            <p>
The returned TimeDuration is the biggest possible unit without losing the precision.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type TimeDuration
 * @memberOf TimeDuration
 * @returns {TimeDuration}
 */
TimeDuration.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TimeDuration is equal to another.
            <p>
This method takes the units into consideration and will return true
if the two TimeDuration objects represent the same duration in different units.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is lower than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.lessThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is greater than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.greaterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Object representing a time manager.
 *
 * @type TimeUtil
 */
Tizen.prototype.time = new TimeUtil();

/**
 * Callback for method.
 *
 * @super Object
 * @constructor
 * @return {BundleItemCallback}
 */
function BundleItemCallback() {};
BundleItemCallback.prototype = new Object();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the following 2 types:
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all the filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This interface is used in methods that require only an error as an input parameter in the error callback.
          <p>
If an invalid function (such as null) is passed to the API that accepts ErrorCallback,
it silently fails and there is no further action.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in the map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filters.
          <p>
It represents the query statement for the specified value of <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter matches all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it only matches objects which have an attribute that match
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback.
          <p>
In case of successful execution of an asynchronous call, <em>SuccessCallback</em> or an API defined callback must be called immediately to notify the user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * Defines the tizen interface as a part of the window global object.
          <p>
The <em>Tizen</em> interface is always available within the <em>Window</em> object in the ECMAScript hierarchy.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TizenObject}
 */
function TizenObject() {};
TizenObject.prototype = new Object();

/**
 * The root of the Tizen Web Device API.
          <p>
This is the Tizen root interface.
It is a property of the ECMAScript global object, as specified by the <em>TizenObject</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Tizen}
 */
function Tizen() {};
Tizen.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * Key-value pair container.
          <p>
Bundle keys are always strings.
All supported value types are specified in the BundleValueType enum.
          </p>
          <p>
Plain dictionary will be implicitly converted to the Bundle object in every
Bundle context within WebAPI.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Bundle}
 */
function Bundle() {};
Bundle.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * Callback for method.
 *
 * @param {String} key
 * @param {any} value
 * @param {BundleValueType} type
 * @type void
 * @memberOf BundleItemCallback
 * @returns {void}
 */
BundleItemCallback.prototype.onitem = function(key, value, type){ return; };

/**
 * The composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when an error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * Data is specified for a node that does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * The object cannot be modified.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * The object cannot be found here.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * The operation is not supported.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * The specified attribute is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * The object is in an invalid state.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * The string did not match the expected pattern.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * The object cannot be modified in this way.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * The operation is not allowed by Namespaces in XML.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * The object does not support the operation or argument.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * The operation would cause the node to fail validation.
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * The type of the object does not match the expected type.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * The operation is insecure.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * A network error occurred.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * The operation has been aborted.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * The given URL does not match another URL.
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * The quota has been exceeded.
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * The operation has timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * The supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * The object cannot be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code.
 * <p>
For the possible values of this attribute, see <a href="https://heycam.github.io/webidl/#idl-DOMException">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * <li>VerificationError - An error occurred in authentication and so the requested method cannot be completed.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="https://heycam.github.io/webidl/#idl-DOMException-error-names">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error.
 * <p>
This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
            </p>
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as "geolocation.latitude" to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as "geolocation.latitude" to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * 16-bit error code.
 * <p>
Possible values are defined in <a href="https://heycam.github.io/webidl/#idl-DOMException">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * <li>VerificationError - An error occurred in authentication and so the requested method cannot be completed.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="https://heycam.github.io/webidl/#idl-DOMException-error-names">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered.
 * <p>
This attribute is not intended to be used directly in the user interfaces
as it is mainly intended to be useful for developers rather than end users.
            </p>
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * Object representing a tizen manager.
 *
 * @type Tizen
 */
TizenObject.prototype.tizen = new Tizen();

/**
 * Gets value stored under given key.
 *
 * @param {String} key
 * @type any
 * @memberOf Bundle
 * @returns {any}
 */
Bundle.prototype.get = function(key){ var ret = new any(); return ret; };

/**
 * Inserts the key-value pair.
 *
 * @param {String} key
 * @param {any} value
 * @type void
 * @memberOf Bundle
 * @returns {void}
 */
Bundle.prototype.set = function(key, value){ return; };

/**
 * Gets type of the value for a given key.
 *
 * @param {String} key
 * @type BundleValueType
 * @memberOf Bundle
 * @returns {BundleValueType}
 */
Bundle.prototype.typeOf = function(key){ var ret = new BundleValueType(); return ret; };

/**
 * Calls the callback function for each item stored in the bundle.
            <p>
If bundle is empty the callback function will not be called.
            </p>
           
 *
 * @param {BundleItemCallback} callback
 * @type void
 * @memberOf Bundle
 * @returns {void}
 */
Bundle.prototype.forEach = function(callback){ return; };

/**
 * Converts bundle to JSON-compatible object.
 *
 * @type object
 * @memberOf Bundle
 * @returns {object}
 */
Bundle.prototype.toJSON = function(){ var ret = new object(); return ret; };

/**
 * Returns string representation of the bundle's data.
 *
 * @type String
 * @memberOf Bundle
 * @returns {String}
 */
Bundle.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <var>ASC</var>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * Object representing a tizen manager.
 *
 * @type Tizen
 */
Window.prototype.tizen = new Tizen();

/**
 * The VoiceControlClientManagerObject interface defines what is instantiated in the object.
          <p>
The <em>tizen.voicecontrol</em> object provides access to the functionality of the Voice Control API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {VoiceControlClientManagerObject}
 */
function VoiceControlClientManagerObject() {};
VoiceControlClientManagerObject.prototype = new Object();

/**
 * The VoiceControlCommand defines interface used to create command you want to be recognized.
 *
 * @super Object
 * @constructor
 * @return {VoiceControlCommand}
 */
function VoiceControlCommand() {};
VoiceControlCommand.prototype = new Object();

/**
 * Voice Control Client
 *
 * @super Object
 * @constructor
 * @return {VoiceControlClient}
 */
function VoiceControlClient() {};
VoiceControlClient.prototype = new Object();

/**
 * Called when client gets the recognition result.
 *
 * @super Object
 * @constructor
 * @return {VoiceControlResultCallback}
 */
function VoiceControlResultCallback() {};
VoiceControlResultCallback.prototype = new Object();

/**
 * Called when default language is changed.
 *
 * @super Object
 * @constructor
 * @return {VoiceControlLanguageChangeCallback}
 */
function VoiceControlLanguageChangeCallback() {};
VoiceControlLanguageChangeCallback.prototype = new Object();

/**
 * Voice Control Client Manager
 *
 * @super Object
 * @constructor
 * @return {VoiceControlClientManager}
 */
function VoiceControlClientManager() {};
VoiceControlClientManager.prototype = new Object();

/**
 * Object representing a voice control manager.
 *
 * @type VoiceControlClientManager
 */
VoiceControlClientManagerObject.prototype.voicecontrol = new VoiceControlClientManager();

/**
 * The command text
 * <p>
The command should be set as text you want to be recognized.
            </p>
 *
 * @type String
 */
VoiceControlCommand.prototype.command = new String();

/**
 * The type of the command processing
 * <p>
The default value is <var>"FOREGROUND"</var>            </p>
 *
 * @type VoiceControlCommandType
 */
VoiceControlCommand.prototype.type = new VoiceControlCommandType();

/**
 * Gets current language.
            <p>
A language is specified as an ISO 3166 alpha-2 two letter country-code followed by ISO 639-1 for the two-letter language code.
For example, "ko_KR" for Korean, "en_US" for American English.
            </p>
           
 *
 * @type String
 * @memberOf VoiceControlClient
 * @returns {String}
 */
VoiceControlClient.prototype.getCurrentLanguage = function(){ var ret = new String(); return ret; };

/**
 * Sets command list.
 *
 * @param {array} list
 * @param {VoiceControlCommandType} type
 * @type void
 * @memberOf VoiceControlClient
 * @returns {void}
 */
VoiceControlClient.prototype.setCommandList = function(list, type){ return; };

/**
 * Unsets command list.
 *
 * @param {VoiceControlCommandType} type
 * @type void
 * @memberOf VoiceControlClient
 * @returns {void}
 */
VoiceControlClient.prototype.unsetCommandList = function(type){ return; };

/**
 * Registers a listener for getting recognition result.
 *
 * @param {VoiceControlResultCallback} listener
 * @type Number
 * @memberOf VoiceControlClient
 * @returns {Number}
 */
VoiceControlClient.prototype.addResultListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} id
 * @type void
 * @memberOf VoiceControlClient
 * @returns {void}
 */
VoiceControlClient.prototype.removeResultListener = function(id){ return; };

/**
 * Registers a callback function to be called when current language is changed.
 *
 * @param {VoiceControlLanguageChangeCallback} listener
 * @type Number
 * @memberOf VoiceControlClient
 * @returns {Number}
 */
VoiceControlClient.prototype.addLanguageChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters the callback function.
            <p>
Calling this function has no effect if there is no listener with given id.
            </p>
           
 *
 * @param {Number} id
 * @type void
 * @memberOf VoiceControlClient
 * @returns {void}
 */
VoiceControlClient.prototype.removeLanguageChangeListener = function(id){ return; };

/**
 * Releases all resources.
            <p>
Releases listeners and disconnects voice control service.
You should call this method when you do not want to use voice control client instance any more.
It is necessary to create new voice control client instance, if you want to use more after release.
            </p>
           
 *
 * @type void
 * @memberOf VoiceControlClient
 * @returns {void}
 */
VoiceControlClient.prototype.release = function(){ return; };

/**
 * Called when client gets the recognition result.
 *
 * @param {VoiceControlResultEvent} event
 * @param {array} list
 * @param {String} results
 * @type void
 * @memberOf VoiceControlResultCallback
 * @returns {void}
 */
VoiceControlResultCallback.prototype.onresult = function(event, list, results){ return; };

/**
 * Called when default language is changed.
 *
 * @param {String} previous
 * @param {String} current
 * @type void
 * @memberOf VoiceControlLanguageChangeCallback
 * @returns {void}
 */
VoiceControlLanguageChangeCallback.prototype.onlanguagechanged = function(previous, current){ return; };

/**
 * Requests voice control Client instance.
 *
 * @type VoiceControlClient
 * @memberOf VoiceControlClientManager
 * @returns {VoiceControlClient}
 */
VoiceControlClientManager.prototype.getVoiceControlClient = function(){ var ret = new VoiceControlClient(); return ret; };

/**
 * Object representing a voice control manager.
 *
 * @type VoiceControlClientManager
 */
Tizen.prototype.voicecontrol = new VoiceControlClientManager();

/**
 * The WidgetInstance interface provides access to a single instance of the Widget.
          <p>
Every visual widget element added to the home screen is a single instance of some Widget.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WidgetInstance}
 */
function WidgetInstance() {};
WidgetInstance.prototype = new Object();

/**
 * The WidgetArraySuccessCallback interface implements the success callback used in the asynchronous operation to get a list of widgets using the getWidgets() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetArraySuccessCallback}
 */
function WidgetArraySuccessCallback() {};
WidgetArraySuccessCallback.prototype = new Object();

/**
 * The WidgetChangeCallback describes a callback for the addStateChangeListener() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetChangeCallback}
 */
function WidgetChangeCallback() {};
WidgetChangeCallback.prototype = new Object();

/**
 * The WidgetVariantsCallback interface implements the success callback used in the asynchronous operation to get a content data of widget instance using the getContent() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetContentCallback}
 */
function WidgetContentCallback() {};
WidgetContentCallback.prototype = new Object();

/**
 * The WidgetSize interface contains width and height of a widget area.
 *
 * @super Object
 * @constructor
 * @return {WidgetSize}
 */
function WidgetSize() {};
WidgetSize.prototype = new Object();

/**
 * The WidgetVariant interface provides Widget information related to specific sizeType.
 *
 * @super Object
 * @constructor
 * @return {WidgetVariant}
 */
function WidgetVariant() {};
WidgetVariant.prototype = new Object();

/**
 * The WidgetServiceManager interface provides methods for accessing information about widgets.
 *
 * @super Object
 * @constructor
 * @return {WidgetServiceManager}
 */
function WidgetServiceManager() {};
WidgetServiceManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.widgetservice</em> object provides access to the Widget Service API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WidgetServiceManagerObject}
 */
function WidgetServiceManagerObject() {};
WidgetServiceManagerObject.prototype = new Object();

/**
 * The Widget interface provides access to a single Widget installed on the system.
 *
 * @super Object
 * @constructor
 * @return {Widget}
 */
function Widget() {};
Widget.prototype = new Object();

/**
 * The WidgetInstancesCallback interface implements the success callback used in the asynchronous operation to get a list of widget instances using the getInstances() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetInstancesCallback}
 */
function WidgetInstancesCallback() {};
WidgetInstancesCallback.prototype = new Object();

/**
 * The WidgetVariantsCallback interface implements the success callback used in the asynchronous operation to get a list of widget variant using the getVariants() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetVariantsCallback}
 */
function WidgetVariantsCallback() {};
WidgetVariantsCallback.prototype = new Object();

/**
 * The Widget this instance belongs to.
 *
 * @type Widget
 */
WidgetInstance.prototype.widget = new Widget();

/**
 * ID of the widget instance, this value is volatile and may change after reboot.
 *
 * @type WidgetInstanceId
 */
WidgetInstance.prototype.id = new WidgetInstanceId();

/**
 * Changes the interval between automatic update of the widget instance data. Minimum value is second.
 *
 * @param {Number} seconds
 * @type void
 * @memberOf WidgetInstance
 * @returns {void}
 */
WidgetInstance.prototype.changeUpdatePeriod = function(seconds){ return; };

/**
 * Sends a new content data to the Widget Instance.
            <p>
This function does not wait for a confirmation that the data was updated.
            </p>
           
 *
 * @param {Object} data
 * @param {Boolean} updateIfPaused
 * @type void
 * @memberOf WidgetInstance
 * @returns {void}
 */
WidgetInstance.prototype.sendContent = function(data, updateIfPaused){ return; };

/**
 * Retrieves content data from the Widget Instance.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If a DB operation has failed              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {WidgetContentCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf WidgetInstance
 * @returns {void}
 */
WidgetInstance.prototype.getContent = function(successCallback, errorCallback){ return; };

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} widgets
 * @type void
 * @memberOf WidgetArraySuccessCallback
 * @returns {void}
 */
WidgetArraySuccessCallback.prototype.onsuccess = function(widgets){ return; };

/**
 * Called when the instance state was changed.
 *
 * @param {WidgetInstance} instance
 * @param {WidgetStateType} event
 * @type void
 * @memberOf WidgetChangeCallback
 * @returns {void}
 */
WidgetChangeCallback.prototype.onchange = function(instance, event){ return; };

/**
 * Called when the content of the widget instance is retrieved successfully.
 *
 * @param {Object} data
 * @type void
 * @memberOf WidgetContentCallback
 * @returns {void}
 */
WidgetContentCallback.prototype.onsuccess = function(data){ return; };

/**
 * The horizontal dimension of the area in pixels.
 *
 * @type Number
 */
WidgetSize.prototype.width = new Number();

/**
 * The vertical dimension of the area in pixels.
 *
 * @type Number
 */
WidgetSize.prototype.height = new Number();

/**
 * The WidgetSizeType this WidgetVariant describes.
 *
 * @type WidgetSizeType
 */
WidgetVariant.prototype.sizeType = new WidgetSizeType();

/**
 * Pixel width.
 *
 * @type Number
 */
WidgetVariant.prototype.width = new Number();

/**
 * Pixel height.
 *
 * @type Number
 */
WidgetVariant.prototype.height = new Number();

/**
 * The preview image path.
 *
 * @type String
 */
WidgetVariant.prototype.previewImagePath = new String();

/**
 * if the widget was designed to receive mouse events.
 *
 * @type Boolean
 */
WidgetVariant.prototype.needsMouseEvents = new Boolean();

/**
 * if the widget expects the system to show touch effect.
 *
 * @type Boolean
 */
WidgetVariant.prototype.needsTouchEffect = new Boolean();

/**
 * if the widget expects the system to draw a frame.
 *
 * @type Boolean
 */
WidgetVariant.prototype.needsFrame = new Boolean();

/**
 * Retrieves a Widget object with a given .
 *
 * @param {WidgetId} widgetId
 * @type Widget
 * @memberOf WidgetServiceManager
 * @returns {Widget}
 */
WidgetServiceManager.prototype.getWidget = function(widgetId){ var ret = new Widget(); return ret; };

/**
 * Retrieves a list of all widgets. If package id is provided returned list contains widgets included in a given package only.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If a DB operation has failed.              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
              <li>
NotFoundError - If the device has no widgets or if a widget with the given id does not exist              </li>
            </ul>
           
 *
 * @param {WidgetArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {PackageId} packageId
 * @type void
 * @memberOf WidgetServiceManager
 * @returns {void}
 */
WidgetServiceManager.prototype.getWidgets = function(successCallback, errorCallback, packageId){ return; };

/**
 * Returns the primary widget ID of the specified package or application.
 *
 * @param {union} id
 * @type WidgetId
 * @memberOf WidgetServiceManager
 * @returns {WidgetId}
 */
WidgetServiceManager.prototype.getPrimaryWidgetId = function(id){ var ret = new WidgetId(); return ret; };

/**
 * Returns the size corresponding to the given sizeType.
 *
 * @param {WidgetSizeType} sizeType
 * @type WidgetSize
 * @memberOf WidgetServiceManager
 * @returns {WidgetSize}
 */
WidgetServiceManager.prototype.getSize = function(sizeType){ var ret = new WidgetSize(); return ret; };

/**
 * Object representing a widget service manager.
 *
 * @type WidgetServiceManager
 */
WidgetServiceManagerObject.prototype.widgetservice = new WidgetServiceManager();

/**
 * Widget ID.
 *
 * @type WidgetId
 */
Widget.prototype.id = new WidgetId();

/**
 * Main application ID.
 *
 * @type ApplicationId
 */
Widget.prototype.applicationId = new ApplicationId();

/**
 * Setup application ID.
 *
 * @type ApplicationId
 */
Widget.prototype.setupApplicationId = new ApplicationId();

/**
 * The ID of the package this widget was installed with.
 *
 * @type PackageId
 */
Widget.prototype.packageId = new PackageId();

/**
 * if the widget should be hidden in the list of widgets.
 * <p>
Precondition: Widget tag in the config.xml file includes the "nodisplay" attribute.
            </p>
 *
 * @type Boolean
 */
Widget.prototype.noDisplay = new Boolean();

/**
 * Returns a name of the widget in a given locale.
 *
 * @param {String} locale
 * @type String
 * @memberOf Widget
 * @returns {String}
 */
Widget.prototype.getName = function(locale){ var ret = new String(); return ret; };

/**
 * Retrieves Widget instances (elements that have been added to the screen). Widget instance as opposed to the widget interface (which is abstract of application), is a specified application.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
              <li>
NotFoundError - If the Web application which is calling this method did not add any widgets to the screen.              </li>
              <li>
SecurityError - If the widget does not belong to the package of the web application which is calling this method.              </li>
            </ul>
           
 *
 * @param {WidgetInstancesCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Widget
 * @returns {void}
 */
Widget.prototype.getInstances = function(successCallback, errorCallback){ return; };

/**
 * Returns object representing widget information related to a given sizeType.
 *
 * @param {WidgetSizeType} sizeType
 * @type WidgetVariant
 * @memberOf Widget
 * @returns {WidgetVariant}
 */
Widget.prototype.getVariant = function(sizeType){ var ret = new WidgetVariant(); return ret; };

/**
 * Retrieves Widget Variants representing all of the supported widget size types.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {WidgetVariantsCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Widget
 * @returns {void}
 */
Widget.prototype.getVariants = function(successCallback, errorCallback){ return; };

/**
 * Registers a callback which will be called whenever any of this widget instances state changes.
 *
 * @param {WidgetChangeCallback} listener
 * @type Number
 * @memberOf Widget
 * @returns {Number}
 */
Widget.prototype.addStateChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters a callback registered under the given watchId.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Widget
 * @returns {void}
 */
Widget.prototype.removeStateChangeListener = function(watchId){ return; };

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} instances
 * @type void
 * @memberOf WidgetInstancesCallback
 * @returns {void}
 */
WidgetInstancesCallback.prototype.onsuccess = function(instances){ return; };

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} instances
 * @type void
 * @memberOf WidgetVariantsCallback
 * @returns {void}
 */
WidgetVariantsCallback.prototype.onsuccess = function(instances){ return; };

/**
 * Object representing a widget service manager.
 *
 * @type WidgetServiceManager
 */
Tizen.prototype.widgetservice = new WidgetServiceManager();


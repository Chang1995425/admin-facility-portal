import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, User, Shield, Database } from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';

export function SettingsPage() {
  const { user, userRole } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>
              Manage your account details and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <p className="text-sm">
                <strong>Email:</strong> {user?.email}
              </p>
              <p className="text-sm">
                <strong>Role:</strong> {userRole?.replace('_', ' ') || 'User'}
              </p>
              <p className="text-sm">
                <strong>User ID:</strong> {user?.id}
              </p>
            </div>
            <Button variant="outline">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Manage your security preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Login Sessions
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Application Settings
            </CardTitle>
            <CardDescription>
              Configure application preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Notification Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Display Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Language & Region
              </Button>
            </div>
          </CardContent>
        </Card>

        {userRole === 'admin' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System Administration
              </CardTitle>
              <CardDescription>
                Advanced system configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Database Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  User Role Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  System Logs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Backup & Recovery
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>
            Facility Management System v1.0
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            A comprehensive facility management platform with role-based access control,
            secure data handling, and intuitive administration tools.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  headerSpacer: { height: 50 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#f0f0f0',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
  },
  appleButton: {
    borderColor: '#000',
    backgroundColor: '#000',
  },
  googleButton: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  socialIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  socialIconWhite: { color: '#fff' },
  socialTextWhite: { color: '#fff' },
  socialTextBlack: { color: '#000' },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
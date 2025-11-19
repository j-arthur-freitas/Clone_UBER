import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  headerSpacer: { 
    height: 50, 
    backgroundColor: '#fff' 
  },
  scrollContent: { 
    paddingHorizontal: 20, 
    paddingTop: 10, 
    paddingBottom: 20 
  },
  inputContainer: {
    paddingVertical: 12, 
    paddingHorizontal: 15, 
    backgroundColor: '#eee',
    borderRadius: 30, 
    marginBottom: 20,
  },
  input: { 
    fontSize: 16, 
    color: '#000', 
    fontWeight: '600' 
  },
  bannerContainer: {
    flexDirection: 'row', 
    backgroundColor: '#1E403F', 
    borderRadius: 8,
    padding: 15, 
    marginBottom: 20, 
    overflow: 'hidden', 
    height: 140,
  },
  bannerLeft: { 
    flex: 1, 
    justifyContent: 'space-between' 
  },
  bannerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#fff', 
    maxWidth: '80%' 
  },
  bannerButton: {
    backgroundColor: '#fff', 
    paddingVertical: 8, 
    paddingHorizontal: 15,
    borderRadius: 20, 
    alignSelf: 'flex-start',
  },
  bannerButtonText: { 
    color: '#000', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  bannerImage: { 
    width: 140, 
    height: 140, 
    position: 'absolute', 
    right: -20, 
    top: 0 
  },
  sugestoesHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  verTudoText: { 
    color: '#000', 
    fontSize: 16 
  },
  sugestoesGrid: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  bannerInferiorContainer: {
    flexDirection: 'row', 
    backgroundColor: '#000', 
    borderRadius: 8,
    overflow: 'hidden', 
    height: 120,
  },
  bannerInferiorLeft: { 
    padding: 15, 
    justifyContent: 'space-between', 
    flex: 2 
  },
  bannerInferiorTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  bannerInferiorButton: {
    backgroundColor: '#fff', 
    paddingVertical: 8, 
    paddingHorizontal: 15,
    borderRadius: 20, 
    alignSelf: 'flex-start',
  },
  bannerInferiorButtonText: { 
    color: '#000', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  bannerInferiorImage: { 
    flex: 1, 
    height: '100%', 
    width: '100%' 
  },
});
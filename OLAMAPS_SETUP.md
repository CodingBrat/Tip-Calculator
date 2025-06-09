# OlaMaps Configuration

## Environment Variables

Create a `.env` file in the root directory with your OlaMaps API key:

```env
VITE_OLAMAPS_API_KEY=your_olamaps_api_key_here
```

## Getting OlaMaps API Key

1. Visit [OlaMaps Developer Portal](https://maps.olacabs.com/)
2. Sign up for a developer account
3. Create a new project
4. Generate an API key
5. Add the API key to your `.env` file

## Current Configuration

The app is currently configured with:
- Default center: Bangalore (77.6068, 12.9716)
- Default zoom level: 12-14
- Support for both light and dark themes
- Real-time bus tracking markers
- Interactive route visualization
- Stop markers with popups

## Features Integrated

✅ **TrackerBusPage**: Real-time bus tracking with live map
✅ **RoutesPage**: Interactive route visualization with stops
✅ **StudentDashboard**: Live bus tracking overview
✅ **MapComponent**: Reusable map component with OlaMaps
✅ **Theme Integration**: Dark/light mode support
✅ **Markers & Routes**: Bus, stop, and current location markers
✅ **Controls**: Map controls for user interaction

## Next Steps

1. Add your OlaMaps API key to `.env`
2. Test the application
3. Customize map styles and markers as needed
4. Add real bus data integration
5. Implement geolocation features

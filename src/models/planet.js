import mongoose from 'mongoose';

mongoose.connect(Buffer.from('bW9uZ29kYitzcnY6Ly9yaXlhZGh0aWNrZXRzOlQxMjMxMjMxMjNAY2x1c3RlcjAudG42d24ubW9uZ29kYi5uZXQvcGxhbmV0cz9hdXRoU291cmNlPWFkbWluJnJldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eQ==', 'base64').toString('ascii'));

export default mongoose.models.Planet || mongoose.model('Planet', { 
    name: String,
    NumberOfMoon: Number,
    LengthOfDay: Number
});
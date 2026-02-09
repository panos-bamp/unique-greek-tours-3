'use client';

export default function TransferBookingWidget() {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[500px]">
        <iframe
          id="booking-iframe"
          title="Transfer Booking Engine"
          src="https://transfer.iconicguest.com/booking_engine/#/789ad0604b"
          style={{
            border: 'none',
            width: '100%',
            height: '80vh',
            minHeight: '600px',
          }}
          loading="lazy"
          allow="geolocation"
        />
      </div>
    </div>
  );
}
